/* Option(text, link, target, description, icon, submenu) */

options1 = convertOptions([
			['Google', 'http://www.google.ca', '_blank', 'Google search engine', 'google.gif', null],
			['Languages', '#', null, 'description', null,
			 	[
					['Dynamically Typed', '#', null, null, null,
					 	[
					 	 	['Python', 'http://www.python.org', null, null, 'python.gif', null],
					 	 	['Ruby', '#', null, null, 'ruby.gif',
					 	 	 	[
					 	 	 	    ['Ruby on Rails', 'http://www.rubyonrails.org', null, null, null, null],
					 	 	 	    ['Ruby Mate', 'http://rubymate.com', null, null, null, null],
					 	 	 	    ['Rake', 'http://rake.rubyforge.org', null, null, null, null]
					 	 	 	]
					 	 	],
					 	 	['Perl', 'http://www.perl.org', null, null, 'perl.gif', null]
					 	]
					],
					['Statically Typed', '#', null, null, null,
					 	[
					 	 	['Java', 'http://www.java.com', null, null, 'java.gif', null],
					 	 	['C#', '#', null, null, 'csharp.gif', null]
					 	]
					],
					['Others', '#', null, null, null, null]
				]
			],
			['Wordpress', 'http://www.wordpress.org', null, null, 'wordpress.gif',
			 	[
			 	 	['Themes', '#', null, null, null, null],
			 	 	['Forums', '#', null, null, null, null]
			 	]
			],
			['Tech News', '#', null, null, 'earth.gif',
			 	[
					['Hacker News', 'http://news.ycombinator.com', null, null, 'hacker.gif', null],
					['Slashdot', 'http://slashdot.org', null, null, 'slashdot.gif', null],
					['Techmeme', '#', null, null, null, null]
				]
			]
		]);

options2 = convertOptions([
               			['Google', 'http://www.google.ca', '_blank', 'Google search engine', 'google.gif', null],
               			['Languages', '#', null, 'description', null,
               			 	[
               					['Dynamically Typed', '#', null, null, null,
               					 	[
               					 	 	['Python', 'http://www.python.org', null, null, 'python.gif', null],
               					 	 	['Ruby', '#', null, null, 'ruby.gif',
               					 	 	 	[
               					 	 	 	 	['Ruby on Rails', 'http://www.rubyonrails.org', null, null, null, null],
               					 	 	 	    ['Ruby Mate', 'http://rubymate.com', null, null, null, null],
               					 	 	 	    ['Rake', 'http://rake.rubyforge.org', null, null, null, null]
               					 	 	 	]
               					 	 	],
               					 	 	['Perl', 'http://www.perl.org', null, null, 'perl.gif', null]
               					 	]
               					],
               					['Statically Typed', '#', null, null, null,
               					 	[
               					 	 	['Java', 'http://www.java.com', null, null, 'java.gif', null],
               					 	 	['C#', '#', null, null, 'csharp.gif', null]
               					 	]
               					],
               					['Others', '#', null, null, null, null]
               				]
               			],
               			['Wordpress', 'http://www.wordpress.org', null, null, 'wordpress.gif',
               			 	[
               			 	 	['Themes', '#', null, null, null, null],
               			 	 	['Forums', '#', null, null, null, null]
               			 	]
               			],
               			['Tech News', '#', null, null, 'earth.gif',
               			 	[
               					['Hacker News', 'http://news.ycombinator.com', null, null, 'hacker.gif', null],
               					['Slashdot', 'http://slashdot.org', null, null, 'slashdot.gif', null],
               					['Techmeme', '#', null, null, null, null]
               				]
               			]
               		]);

/*
var options = [
new Option('opt1', '#', null, 'description', null,
		new Menu([
		          new Option('opt1_1', '#', null, 'description', null, null),
		          new Option('opt1_2', '#', null, 'description', null,
		        		  new Menu([
		        		            new Option('opt1_2_1', '#', null, 'description', null, null),
		        		            new Option('opt1_2_2', '#', null, 'description', null, null)
		        		            ]))
		          ])),
new Option('opt2', '#', null, 'description', null, null)
];
*/
