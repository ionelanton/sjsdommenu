
var sjsdommenu_delay = 500; // milliseconds
var sjsdommenu_theme = 'theme'; // theme folder
var sjsdommenu_timeout;

function Coordinates(x, y) {
	if (x)
		this.x = x;
	else
		this.x = 0;
	if (y)
		this.y = y;
	else
		this.y = 0;
}

Coordinates.prototype.get = function(obj) {
	this.x = 0;
	this.y = 0;
	
	while(obj) {
		this.x += obj.offsetLeft ;
		this.y += obj.offsetTop ;
		obj = obj.offsetParent ;
	}
	return this;	
}

function Menu(options, parent_id, orientation, sjsdommenu_timeout) {

	this.options = [];
	this.parent = null;
	this.orientation = 'vertical';
	this.sjsdommenu_timeout = sjsdommenu_timeout;
	
	this.dom = null;

	if (null != parent_id) {
		this.parent = document.getElementById(parent_id);
		if (null == this.parent) alert('Error: ID of parent [' + parent_id + '] has not been found!');
	}
	if (null != options) this.options = options;
	if (null != orientation) this.orientation = orientation;
}

Menu.prototype.generate = function() {

	this.dom = document.createElement('table');
	this.dom.appendChild(document.createElement('tbody'));
	this.dom.className = 'sjsdommenu';
	//this.dom.setAttribute('border', '0');
	this.parent.appendChild(this.dom);
	
	if ('horizontal' == this.orientation)
		this.dom.firstChild.appendChild(document.createElement('tr'));
	
	for (var i = 0; i < this.options.length; i++) {
		if (null != this.options[i].submenu) {
			this.options[i].submenu.parent = this.parent;
			this.options[i].submenu.generate();
		}
		this.options[i].parent = this;
		this.options[i].generate(this.orientation);
		
		if ('horizontal' == this.orientation) {
			var td = document.createElement('td');
			td.appendChild(this.options[i].dom);
			this.dom.firstChild.firstChild.appendChild(td);
		} else {
			this.dom.firstChild.appendChild(this.options[i].dom);
		}
	}
	this.init();
};

Menu.prototype.translate = function(coord) {
	this.dom.style.left = coord.x + 'px';
	this.dom.style.top = coord.y + 'px';
};

Menu.prototype.init = function() {
	var nodes = this.parent.childNodes;
	for (var i = 1; i < nodes.length; i++) {
		nodes[i].className = 'sjsdommenu sjsdommenu-hidden';
	}
};

Menu.prototype.hide = function() {
	this.dom.className = 'sjsdommenu sjsdommenu-hidden';
};

Menu.prototype.show = function() {
	this.dom.className = 'sjsdommenu sjsdommenu-visible';
};

Menu.prototype.hideChilds = function() {
	for (var i = 0; i < this.options.length; i++) {
		if (null != this.options[i].submenu) {
			this.options[i].submenu.hide();
			this.options[i].submenu.hideChilds();
		}
	}
};

function Option(text, link, target, description, icon, submenu) {
	this.text = text;
	this.link = link;
	this.target = "_self";
	this.description = text;
	this.icon = null;
	this.submenu = null;

	this.parent = null;
	this.dom = null;
	this.coord = null;
	
	if (null != icon) this.icon = sjsdommenu_theme + '/' + icon;
	if (null != description) this.description = description;
	if (null != target) this.target = target;
	if (null != submenu) this.submenu = submenu;

}

Option.prototype.generate = function(orientation) {
	
	if (null != this.submenu) {
		if ('horizontal' == this.parent.orientation) 
			this.arrow = sjsdommenu_theme + '/arrowh.gif';
		else
			this.arrow = sjsdommenu_theme + '/arrowv.gif';
		if (null == this.icon)
			this.icon = sjsdommenu_theme + '/folder.gif';
	} else {
		this.arrow = sjsdommenu_theme + '/blank.gif';
		if (null == this.icon)
			this.icon = sjsdommenu_theme + '/link.gif';
	}
	
	if ('horizontal' == this.parent.orientation) {
		this.dom = document.createElement('table');
		this.dom.innerHTML = '<tbody><tr><td><img src="' + this.icon + '" /></td><td>' + this.text + '</td><td><img src="' + this.arrow + '" /></td></tr></tbody>';
	} else {
		this.dom = document.createElement('tr');
		
		var td_icon = document.createElement('td');
		var td_text = document.createElement('td');
		var td_arrow = document.createElement('td');
		
		td_icon.innerHTML = '<img src="' + this.icon + '" />';
		td_text.innerHTML = this.text;
		td_arrow.innerHTML = '<img src="' + this.arrow + '" />';
		
		this.dom.appendChild(td_icon);
		this.dom.appendChild(td_text);
		this.dom.appendChild(td_arrow);

		// Not working in Firefox
		//this.dom.innerHTML = '<td><img src="' + this.icon + '" /></td><td>' + this.text + '</td><td><img src="' + this.arrow + '" /></td>';
	}
	
	var obj = this;
	
	this.dom.onmouseover=function(e){
		clearTimeout(sjsdommenu_timeout);
		obj.parent.hideChilds();
		if (null != obj.submenu) {
			var coord = (new Coordinates()).get(obj.dom)
			
			if ('horizontal' == orientation) {
				coord.y += obj.dom.offsetHeight + 3;
			} else {
				coord.x += obj.dom.offsetWidth + 0;
				//coord.y -= 1;
			}
			obj.submenu.show();
			obj.submenu.translate(coord);
		}
		obj.dom.className = 'sjsdommenu-active';
	};
	
	this.dom.onmouseout = function(e) {
		sjsdommenu_timeout = setTimeout(function(){
				var nodes = obj.parent.parent.childNodes;
				for (var i = 1; i < nodes.length; i++) {
					nodes[i].className = 'sjsdommenu-hidden';
					//nodes[i].style.visibility = 'hidden';
				}	
			}, sjsdommenu_delay);
		obj.dom.className = 'sjsdommenu-inactive';
	};
	
	this.dom.onclick = function(e) {
		window.open(obj.link, obj.target);
	};
};

function convertOptions(array_menu, array) {
	array = new Array();
	
	for (var i = 0; i < array_menu.length; i++) {
		if (null == array_menu[i][5]) {
			array.push(new Option(array_menu[i][0], array_menu[i][1], array_menu[i][2], array_menu[i][3], array_menu[i][4], null));
		} else {
			array.push(new Option(array_menu[i][0], array_menu[i][1], array_menu[i][2], array_menu[i][3], array_menu[i][4], new Menu(convertOptions(array_menu[i][5]))));
		}
	}
	return array;
}


