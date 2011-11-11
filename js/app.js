Ext.application({
	name: 'Portfolio',
	launch: function(){
		Ext.create("Ext.TabPanel",{
			fullscreen: true,
			tabBarPosition: 'top',
			ui: 'dark',
			items:[{
					title: "Home",
					xtype: "panel",
					scrollable: true,
					iconCls: 'home',
					cls: 'home',
					html: [
                        '<div id="header">',
							'<p class="tagline">Add your awesome short description here</p>',
						'</div>',
						'<div id="content">',
							'<p style="padding-bottom:5px;"><strong style="font-weight:bold;margin-bottom:5px;">About Me</strong><br />',
							'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> <br />',
							'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><br /><br />',
							'<p style="padding-bottom:5px;"><strong style="font-weight:bold;margin-bottom:5px;">The Skills</strong><br />',
							'<ul class="checklist"><li><span>A Skill</span></li><li><span>A Skill</span></li><li><span>A Skill</span></li><li><span>A Skill</span></li><li><span>A Skill</span></li><li><span>A Skill</span></li><li><span>A Skill</span></li><li><span>A Skill</span></li></ul>',
							'<p style="padding-bottom:5px;"><strong style="font-weight:bold;">Contact Me</strong><br />',
							'<p><strong>Email:</strong> <a href="mailto:name@domain.com" class="ui-link" style="color:#3E7791;font-weight:bold;position:relative;z-index:100;">name@domain.com</a><br />',
							'<strong>Phone:</strong> <a href="callto:123.456.7890" style="color:#3E7791;font-weight:bold;z-index:101;position:relative;">123.456.7890</a><p>',
							'</p>',
						'</div>'
                   ].join("")
				},{
					title: "Portfolio",
					xtype: "dataview",
					iconCls: 'star',
					loadingText:'Loading...',
					scrollable: true,
						store: {
							autoLoad: true,
							fields: ['title', 'imgPath', 'description'],
							proxy: {
								type: 'jsonp',
								url: 'portfolio/portfolio.json',
								reader: {
									type: 'json',
									root: 'portfolio'
									}
								}					
							},
					 itemTpl: '<div class="work"><h3>{title}</h3><br /> <img src="{imgPath}" style="width:100%;" /><br /> <br /><p>{description}</p></div>'
				},{
					title: "@ghost4hire",
					xtype: "dataview",
					iconCls: 'star',
					loadingText:'Loading...',
					scrollable: true,
						store: {
							autoLoad: true,
							fields: ['created_at','text', 'profile_image_url'],
							proxy: {
								type: 'jsonp',
								url: 'http://search.twitter.com/search.json?q=ghost4hire',
								reader: {
									type: 'json',
									root: 'results'
									}
								}					
							},
					 itemTpl: '<div class="tweet"><img src="{profile_image_url}" style="float:left;margin-right:10px;" /><p>{text}<br /></p><div style="clear: both"></div><span style="font-size:11px;color:#999;">Tweeted: {created_at}</span></div>'
				}
			]
		});
		}
});