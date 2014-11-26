function NewTODO(_args) {
	
	var win = Ti.UI.createWindow({
		title:_args.title,
		backgroundColor:'white',
		//navBarHidden:true, // top tab area on iphone
	    tabBarHidden:true
	});
	
	var statusVariable;
	var dataInsert = [5];
	
	function createWindow(windowType,data){
		
		var winView = Ti.UI.createView({});
		
		var positionY = 10;
		
		// Create a TextField.
		var NameTextField = Ti.UI.createTextField({
			height : 60,
			top : positionY,
			left : 40,
			width : 240,
			hintText : 'TODO name',
			//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});
		
		positionY += (NameTextField.height + 10);
		
		// Listen for return events.
		NameTextField.addEventListener('return', function(e) {
			NameTextField.blur();
		});
		
		var ContentTextArea = Ti.UI.createTextArea({
			borderWidth: 2,
			borderColor: '#bbb',
			borderRadius: 5,
			//color: '#888',
			font: {fontSize:14,fontWeight:'bold', fontFamily:'ArialMT'},
			keyboardType: Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType: Ti.UI.RETURNKEY_GO,
			textAlign: 'left',
			hintText: 'Place TODO content here',
			top: positionY,
			width: 300, height : 70
		});
		
		positionY += (ContentTextArea.height + 10);
		
		var StatusSwitchLabel = Titanium.UI.createLabel({
			text:'The Status of his TODO item is: ' ,
			//color:'#999',
			font:{fontSize:14,fontWeight:'bold', fontFamily:'ArialMT'},
			textAlign:'center',
			top:positionY,
			height:'auto',
			width:'auto'
		});
		
		var statusSwitch = Titanium.UI.createSwitch({
			value: false,
			top:(positionY+10),
			left: (StatusSwitchLabel.width + 5)
		});
		
		positionY += (StatusSwitchLabel.height + 30);
		
		// Create a Button.
		var addImageButton = Ti.UI.createButton({
			title : 'Add Button',
			height : 'auto',
			width : 'auto',
			top : positionY,
			left : 40
		});
		
		positionY += (addImageButton.height + 10);
				
		
		var imageView = Ti.UI.createImageView({
			left:40,
			height:100,
			width:220,
			top:positionY
		});
		
		addImageButton.addEventListener('click', function() {
			
			winView.add(imageView);
		});
		
		positionY += (addImageButton.height + 10);
		
		var currentTime = new Date();
		
		var DateModLabel = Titanium.UI.createLabel({
			//text: currentTime.getDate +"/"+ currentTime.getMonth() +"/"+ currentTime.getFullYear() ,
			color:'#999',
			font:{fontSize:14,fontWeight:'bold', fontFamily:'ArialMT'},
			textAlign:'center',
			top:positionY,
			height:'auto',
			width:'auto'
		});

		positionY += (DateModLabel.height + 10);
		
		var SaveEditButton = Ti.UI.createButton({
			height : 'auto',
			width : 'auto',
			bottom: 20,
			left : 40
		});
		
		positionY += (SaveEditButton.height + 10);
		
		if(windowType==0){
			statusSwitch.enabled = false;
			DateModLabel.text = currentTime.getDate() +"/"+ currentTime.getMonth() +"/"+ currentTime.getFullYear();
			
			winView.add(addImageButton);
			
			Ti.include("TODOdata.js");
			
			SaveEditButton.addEventListener('click',function(e){
				dataInsert.push(NameTextField.text);
				dataInsert.push(ContentTextArea.value);
				dataInsert.push(currentTime.getDate +"/"+ currentTime.getMonth() +"/"+ currentTime.getFullYear());
				dataInsert.push(statusVariable);
				dataInsert.push(imageView.image);
				TODOdata.updateDB(0,dataInsert);
			});
			
		}else{
			Ti.include("TODOdata.js");
			nameTextField.enabled = false;
			nameTextField.text = data[0];
			contentTextArea.value = data[1];
			statusSwitch.enabled=true;
			if(data[3]==0){
				statusSwitch.value = false;
			}else{
				statusSwitch.value = true;
			}
			winView.add(imageView);
			imageView.image = data[4];
			DateModLabel.text = data[2];
			
			SaveEditButton.addEventListener('click',function(e){
				dataInsert.push(NameTextField.text);
				dataInsert.push(ContentTextArea.value);
				dataInsert.push(currentTime.getDate() +"/"+ currentTime.getMonth() +"/"+ currentTime.getFullYear());
				dataInsert.push(statusVariable);
				dataInsert.push(imageView.image);
				
				TODOdata.updateDB(1,dataInsert);
			});
			
			statusSwitch.enabled=true;
	
			statusSwitch.addEventListener('change',function(e){
 
  				if(statusSwitch.value == true){
  					statusVariable = 1;
  				}else{
  					statusVariable = 0;
  				}
  				
			});
			
		}
		
		// Add to the parent view.
		winView.add(NameTextField);
		winView.add(ContentTextArea);
		winView.add(StatusSwitchLabel);
		winView.add(statusSwitch);
		//winView.add(addImageButton);
		winView.add(imageView);
		winView.add(DateModLabel);
		winView.add(SaveEditButton);
		
		win.add(winView);
		
	}
	
	createWindow(_args.windowType,_args.data);
	
	return win;
};

module.exports = NewTODO;
