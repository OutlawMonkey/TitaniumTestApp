function TODOdisplayLists(title) {
	
	var win = Ti.UI.createWindow({
		title:title,
		//backgroundColor:'white',
		//navBarHidden:true, // top tab area on iphone
	    tabBarHidden:true
	});
	
	Ti.include("TODOlist.js");
	
	var view1 = TODOlist.createView(win,0);
	var view2 = TODOlist.createView(win,1);
	
	
	var newButton = Ti.UI.createButton({
		top:0,
		left:20,
		title:"new TODO item",
		width:'auto'
	});
	
	button.addEventListener('click',function(e){
		var win = Ti.UI.createWindow({ });
		var ExampleWindow = require(e.rowData.test);
		win = new ExampleWindow();
		self.containingTab.open(win,{animated:true});
	});
	
	var scrollView = Titanium.UI.createScrollableView({
		views:[view1,view2],
		showPagingControl:true,
		pagingControlHeight:30,
		maxZoomScale:2.0,
		currentPage:1
	});
	
	win.add(scrollView);
	
	return win;
};

module.exports = TODOdisplayLists;
