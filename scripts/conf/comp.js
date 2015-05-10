// default composition
// changing these values take effect globally!

// generic row and column calculation: returns an array with key,value pairs.
// example: [{x:0,y:0}, {x:10,y:0}]

function createRow (amount, offset) {
	var x = 0; var y = 0;
	var rowArray = [];
	
	for (i=0; i<amount; i++) { x = (x+offset);  rowArray.push({x:x,y:0}); }
	
	return rowArray;
}

function createCol (amount, offset) {
	var x = 0; var y = 0;
	var rowArray = [];
	
	for (i=0; i<amount; i++) { y = (y+offset);  rowArray.push({x:0,y:y}); }
	
	return rowArray;
}
// function c (a) { return a;}
define({

// general parameters
// name of composition
name: "simple row",	
	
// row
// row: [
	// {transform: "translate("+c(this.amount)+",2)"},
//	{transform: "translate(10,2)"},
//	{transform: "translate(15,2)"}
// ],
// converts generix row calculation into svg translate structure    
row: function (am,of) { return createRow(am,of).map(function (e) { return {transform: "translate("+e.x+","+e.y+")"};        }); },	

col: function (am,of) { return createCol(am,of).map(function (e) { return {transform: "translate("+e.x+","+e.y+")"};        }); }

});
