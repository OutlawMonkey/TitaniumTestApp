function TODOdetail(title,data) {
	
	var win = Ti.UI.createWindow({
		title:title,
		//backgroundColor:'white',
		//navBarHidden:true, // top tab area on iphone
	    tabBarHidden:true
	});
	
	var winView=Ti.UI.createView({
		layout:'vertical',
		//backgroundColor:'#e1e7ef'
	});
	
	var positionY = 5;
	
	var nameLabel=Ti.UI.createLabel({
		//color:'#313131',
		font:{fontSize:24,fontWeight:'bold', fontFamily:'Helvetica'},
		textAlign:'center',
		height:'auto',
		top:positionY
	});
	
	positionY += (nameLabel.height+10) ;
		
	var	TODOimage = Ti.UI.createImageView({
		left:40,
		height:100,
		width:220,
		top:positionY
	});
	
	positionY += (TODOimage.height+10) ;

	var contentLabel = Ti.UI.createLabel({
		left:5,
		color:'#000000',
		font:{fontSize:14,fontWeight:'bold', fontFamily:'ArialMT'},
		height:'auto',
		top:positionY
	});

	positionY += (contentLabel.height+10) ;
	
	var modifiedDateLabel = Ti.UI.createLabel({
		right:5,
		color:'#000000',
		textAlign:'center',
		font:{fontSize:10,fontWeight:'bold', fontFamily:'ArialMT'},
		height:'auto',
		top:positionY
	});
	
	var statusLabel = Ti.UI.createLabel({
		left:5,
		color:'#000000',
		textAlign:'center',
		font:{fontSize:10,fontWeight:'bold', fontFamily:'ArialMT'},
		height:'auto',
		top:positionY
	});
	
	
	nameLabel.text = data[0];
	TODOimage.image = data[4];
	contentLabel.text = data[1];
	modifiedDateLabel = data[2];
	if(data[3] == 0){
		statusLabel.text="pending";
	}else {
		statusLabel.text="complete";
	}
	
	
	winView.add(nameLabel);
	winView.add(TODOimage);
	winView.add(contentLabel);
	winView.add(modifiedDateLabel);
	winView.add(statusLabel);
	
	win.add(winView);
	
	return win;
};

module.exports = TODOdetail;
