TODOList = {};

TODOList.view;


TODOList.processData = function(selection){
	
	var data; 
	Ti.include("TODOdata");
	TODOdata.init();
	
	
	 var tempArray = TODOdata.dataSelect(selection);
	 
	 
	 
	 
	 
	 return data;
	
};

TODOList.createView = function(){
	
	
	
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
	
	
};
