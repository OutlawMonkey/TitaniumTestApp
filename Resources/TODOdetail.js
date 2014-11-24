function TODOdetail(title) {
	
	var win = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white',
		//navBarHidden:true, // top tab area on iphone
	    tabBarHidden:true
	});
	
	
	return win;
};

module.exports = TODOdetail;
