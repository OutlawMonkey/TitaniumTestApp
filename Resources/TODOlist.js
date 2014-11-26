TODOlist = {};

TODOlist.init = function(){
	
};

//procedures that calls the database and process the data and creates table view row
TODOlist.processData = function(selection){
	
	var data; 
	Ti.include("TODOdata.js");
	TODOdata.init();
	
	
	 var tempArray = TODOdata.dataSelect(selection);
	 
	 
	 for (var i = 0; i < tempArray.length ; i++){
	 	var tableViewRow = Ti.UI.createTableViewRow({
	 			height:100,
	 			hasChild:true,
	 			data: tempArray,
	 			title:tempArray[0],
	 			test:'TODOdetail'
	 		});
	 	
	 	var photo = Ti.UI.createImageView({
			image:tempArray[4],
			top:5,
			left:10,
			width:50,
			height:50
		});
	 		
	 	var labelName = Ti.UI.createLabel({
	 		//color:'#313131',
			font:{fontSize:18,fontWeight:'bold', fontFamily:'ArialMT'},
			left:70,
			top:15,
			height:40,
			width:'auto',
			text:tempArray[0]
	 	});
	 	
	 	var labelDate = Ti.UI.createLabel({
	 		//color:'#313131',
			font:{fontSize:13,fontWeight:'bold', fontFamily:'ArialMT'},
			left:70,
			top:55,
			height:30,
			width:'auto',
			text:tempArray[2]
	 	});
	 	
	 	tableViewRow.add(photo);
	 	tableViewRow.add(labelName);
	 	tableViewRow.add(labelDate);
	 	
	 	data.push(tableViewRow);
	 }
	 
	 return data;
	
};


//procedure that creates the table view  
TODOlist.createView = function( self,dataSelection ){
		
	var data = TODOlist.processData(dataSelection);
	
	var search = Titanium.UI.createSearchBar({
		barColor:'#385292',
		showCancel:false,
		hintText:'search'
	});	
	search.addEventListener('change', function(e)
	{
		e.value; // search string as user types
	});
	search.addEventListener('return', function(e)
	{
		search.blur();
	});
	search.addEventListener('cancel', function(e)
	{
		search.blur();
	});
	
	// create table view
	var tableView = Titanium.UI.createTableView({
		data:data,
		search:search,
		searchHidden:true
	});
	
	// create table view event listener
	tableView.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			var win = Ti.UI.createWindow({ });
			var ExampleWindow = require(e.rowData.test);
			win = new ExampleWindow(e.rowData.title,e.rowData.data);
			self.containingTab.open(win,{animated:true});
		}
	});
	
	return tableView;
	
};
