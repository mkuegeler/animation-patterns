requirejs.config({
    //By default load configuration
    baseUrl: 'scripts/conf',
    //except, if the module ID starts with "app",
    //load it from the scripts/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['def', 'custom', 'app/medigeist'],
function   (def,custom) {

var el = new medigeist(def);

el.svg();

function run_test(n) {

 switch(n) {
     case 0:
         test_0000 ();
         break;
     case 1:
         test_0001 ();
         break;
     case 2:
         test_0002 ();
         break;	 
     case 3:
         test_0003 ();
         break;	 
     case 4:
         test_0004 ();
         break;	
     case 5:
         test_0005 ();
         break;	
     case 6:
         test_0006 ();
         break;	
     case 7:
         test_0007 ();
         break;	
     case 8:
         test_0008 ();
         break;	
     case 9:
         test_0009 ();
         break;	
     case 10:
         test_0010 ();
		 break;
     case 11:
         test_0011 ();	 
         break;	
     case 12:
         test_0012 ();	 
         break;
     case 13:
         test_0013 ();	 
         break;	
     case 14:
         test_0014 ();	 
         break;		 		 		 		 	 	 	 	 
		 
     default:
        console.log("no test function defined!");
 }
}
///////////////////////////////////////////////////////////////////////////////	 
// TEST FUNCTIONS
///////////////////////////////////////////////////////////////////////////////	 
// gradients test

function test_0000 () {
 // no params

try {
   el.linearGradient();
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}

}

///////////////////////////////////////////////////////////////////////////////	
function test_0001 () {
 // params with id
var params = [ 
  {id: "my_linearGr"}, 
  {x1: 2, y1:2, x2:1, y2:3, gradientTransform:"matrix(.73628 -.61137 .94263 .47754 -47.58995 74.01084)"}, 
  {offset:"2%",  color: "#00cccc", opacity:"3"},
  {offset:"55%", color: "#f000ff", opacity:"2"}
];

try {
    el.linearGradient(params);
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}

}
///////////////////////////////////////////////////////////////////////////////	
function test_0002 () {
 // params without id
var params = [ 
  {x1: 2, y1:2, x2:1, y2:3, gradientTransform:"matrix(.73628 -.61137 .94263 .47754 -47.58995 74.01084)"}, 
  {offset:"2%",  color: "#00cccc", opacity:"3"},
  {offset:"55%", color: "#f000ff", opacity:"2"}
];

try {
    el.linearGradient(params);
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}

}
///////////////////////////////////////////////////////////////////////////////	
function test_0003 () {
 // params with id only
var params = [ 
  {id: "my_linearGr"}
];

try {
    el.linearGradient(params);
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}

}
///////////////////////////////////////////////////////////////////////////////	

function test_0004 () {
 // gradient used in element, no x1,y1,x2,y2
var id = "my_linearGr1";

var params1 = [ 
  {id: id}
];

var params2 = [ 
  {style: "fill:url(#"+id+");"}
];

try {
	el.linearGradient(params1);
	el.rect(params2);
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}



}
///////////////////////////////////////////////////////////////////////////////	
function test_0005 () {
 // gradient used in element, no x1,y1,x2,y2 but offset
var id = "my_linearGr2";
var params1 = [ 
  {id: id},
  {offset:"2%",  color: "#00cccc", opacity:"3"},
  {offset:"55%", color: "#f000ff", opacity:"2"}
];

var params2 = [ 
  {style: "fill:url(#"+id+");"}
];


try {
	el.linearGradient(params1);
	el.circle(params2);
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}
}
///////////////////////////////////////////////////////////////////////////////	
// radial tests

function test_0006 () {
 // no params

try {
	el.radialGradient();
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}



}
///////////////////////////////////////////////////////////////////////////////	
function test_0007 () {
// id parameter only 
var id = "my_radialGr1";
 var params1 = [ 
      {id: id}
     
 ];
 
 var params2 = [ 
   {style: "fill:url(#"+id+");"}
 ];

try {
	el.radialGradient(params1);
	el.ellipse(params2);
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}


}
///////////////////////////////////////////////////////////////////////////////	

function test_0008 () {
// stop parameters and id only
var id = "my_radialGr2";

var params1 = [ 
   {id: id},
   {offset:"2%",  color: "#ffffff", opacity:"3"},
   {offset:"95%", color: "#000000", opacity:"2"}
];

var params2 = [ 
  {style: "fill:url(#"+id+");"}
];

try {
	el.radialGradient(params1);
	el.polygon(params2);
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}



}
///////////////////////////////////////////////////////////////////////////////	
function test_0009 () {
// id, radial, stop parameters
var id = "my_radialGr3";

var params1 = [ 
   {id: id},
   {fx: "10%", fy:"10%", r:"80%", spreadMethod: "pad"}, 
   {offset:"2%",  color: "#ffffff", opacity:"3"},
   {offset:"95%", color: "#000000", opacity:"2"}
];

var params2 = [ 
  {style: "fill:url(#"+id+");"}
];

try {
	el.radialGradient(params1);
	el.rect(params2);
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}

}
///////////////////////////////////////////////////////////////////////////////	
function test_0010 () {
// pattern: no id, parameters
console.log("test_0010: pattern: no id, parameters");
el.pattern();


}
///////////////////////////////////////////////////////////////////////////////	
function test_0011 () {
// pattern: with id, no parameters
console.log("test_0011: pattern: with id, no parameters");
var id = "my_Pattern1";
 var params = [ 
      {id: id}
     
 ];

try {
	el.pattern(params);
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}



}
///////////////////////////////////////////////////////////////////////////////	
function test_0012 () {
// pattern: with id, no parameters, href in rectangle
// console.log("test_0012: pattern: with id, no parameters, href in rectangle");
var id = "my_Pattern2";

var r = [];

 var params1 = [ 
      {id: id}
     
 ];

// var params2 = [ 
//  {style: "fill:url(#"+id+");"},
//	{transform: "translate(10,5)"}
// ];

var params2 = [ 
	{id: "sample_1", style: "fill:url(#"+id+");", transform: "translate(0,0)"}
];


try {
	el.pattern(params1);
	r = el.rect(params2);
}
catch(err) {    
	document.getElementsByTagName("body").item(0).innerHTML = err.message;
}

console.log(r);

}
///////////////////////////////////////////////////////////////////////////////	
function test_0013 () {
// test abstract element function

var id = "my_element";

var params1 = [ 
		{id:"element_1"}
     
];

var params2 = [ 
   {style: "fill:url(#"+id+");"},	
   {id: "sample_1"},
   {transform: "translate(10,5)"}	
   
];

// el.circle(params);
// el.circle([{r:5, cy:15}]);

el.circle();	
el.rect();
// console.log(el.circle());
// el.line();
el.polygon();
el.ellipse();
// el.polyline();
// el.path();
// el.text();
// el.pattern();	
// el.text("michael");

// var result = "test";
// document.getElementsByTagName("body").item(0).innerHTML = result;

//var result = el.element(params2);
//console.log(result.length);

}
///////////////////////////////////////////////////////////////////////////////	
// next steps:

// add symbols
// def libraries: Rectangles, Circles, Polylines etc. with different styles. gradients, patterns
	// To Do: Core default library: circle with different shades of colors
	// composition conf: separated from style conf

///////////////////////////////////////////////////////////////////////////////
// execute test script
// run_test(0);
// run_test(1);
// run_test(2);
// run_test(3);
// run_test(4);
// run_test(5);
// run_test(7);
// run_test(8);
// run_test(12);
run_test(13);
///////////////////////////////////////////////////////////////////////////////	
// write dom elements as string in console (debug only)

var root = document.getElementById(def.root);
console.log(root.innerHTML);
///////////////////////////////////////////////////////////////////////////////		 
	 
	
    
});



