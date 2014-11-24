TODOdata = {};

//In case the database doesn't exist it gets created
TODOdata.init = function(){
	
	if (Ti.Database.name != 'TODOdata'){
		var db = Ti.Database.open('TODOdata');
		db.execute('CREATE TABLE IF NOT EXISTS todoItems (name TEXT DEFAULT NULL, content TEXT DEFAULT NULL, dateMod DATE DEFAULT NULL, status INTEGER DEFAULT 0, imageFile TEXT DEFAULT NULL ) ');
		
	}else{
		Ti.API.info("ya existia la base de datos");
	}
	
};

//executes functions depending on the parameter determines in dataField parameters
TODOdata.updateDB = function(dataField,dataArray){
	var db = Ti.Database.open('TODOdata');
	switch (dataField){
		
		case 0: //insert a new element in todoItems table in case it doesn't exist
			
			var validationResult = db.execute('SELECT * FROM todoItems TI WHERE TI.name =?',dataArray[0]);
			
			if (validationResult.rowCount == 0){
				
				db.execute('INSERT INTO todoItems VALUES (?,?,?,?,?)',
						dataArray[0],
						dataArray[1],
						dataArray[2],
						dataArray[3],
						dataArray[4]);
							
			}else{
				alert('The Item Already Exist');
			}  
		 
		break;
		
		case 1: //updates de value of a register in the database
			
			var validationResult = db.execute('UPDATE todoItems TI SET TI.content = ?, TI.dateMod = ?, TI.status =?, TI.imageFile =?  WHERE TI.name =?',
												dataArray[1],
												dataArray[2],
												dataArray[3],
												dataArray[4], 
												dataArray[0]);
		 
		break; 
	}
};

//selects the projection of the database depending the dataSelect parameter
TODOdata.dataSelect = function(dataSelect){
	var db = Ti.Database.open('TODOdata');
	var queryData;
	var resultMatrix = [ ] ;
	
	switch (dataSelect){
		case 0: //Selects the items with status pending
			
			queryData = db.execute('SELECT * FROM todoItems TI WHERE TI.status = 0');
			
			if (queryData.rowCount == 0){
				
				alert('You have no TODO added');
							
			}else{
				 
				 while(queryData.isValidRow()){
				 	var tempArray = [];
				 	tempArray.push(queryData.fieldByName('name'));
				 	tempArray.push(queryData.fieldByName('content'));
				 	tempArray.push(queryData.fieldByName('dateMod'));
				 	tempArray.push(queryData.fieldByName('status'));
				 	tempArray.push(queryData.fieldByName('imageFile'));
				 	resultMatrix.push(tempArray);
				 	queryData.next();
				 	
				 }
				 
			}  
		 
		break;
		
		case 1: //Selects the items with status completed
			
			queryData = db.execute('SELECT * FROM todoItems TI WHERE TI.status = 1');
			
			if (queryData.rowCount == 0){
				
				alert('You have no TODO added');
							
			}else{
				while(queryData.isValidRow()){
				 	var tempArray = [];
				 	tempArray.push(queryData.fieldByName('name'));
				 	tempArray.push(queryData.fieldByName('content'));
				 	tempArray.push(queryData.fieldByName('dateMod'));
				 	tempArray.push(queryData.fieldByName('status'));
				 	tempArray.push(queryData.fieldByName('imageFile'));
				 	resultMatrix.push(tempArray);
				 	queryData.next();
				 }
			}  
		 
		break;
	}
	return resultMatrix;
};
