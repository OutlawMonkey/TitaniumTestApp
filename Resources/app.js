// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var displayLists = require('TODOdisplayLists');


var win1 = Ti.UI.createWindow({ });

win1 = new displayLists("TestApp");

var tab1 = Titanium.UI.createTab({
    window:win1
});
win1.containingTab = tab1;

//
//  add tabs
//
tabGroup.addTab(tab1);   


// open tab group
tabGroup.open();
