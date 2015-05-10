// OOP Version with element inherit
// this file is is just a clipboard to try out some code before copying it into  the main file (medigeist.js)
///////////////////////////////////////////////////////////////////////////////
medigeist = function(){
	
}

medigeist.prototype.id;
medigeist.prototype.name;
medigeist.prototype.root;
medigeist.prototype.def;


medigeist.prototype.getDef = function(def){
		this.def = def ? def: undefined;
}

medigeist.prototype.getId = function(def){
		this.def = def ? def: undefined;
}
///////////////////////////////////////////////////////////////////////////////
element = function(){
	
}
element.prototype = new medigeist();
element.prototype.constructor = element;
element.prototype.params = "no params";
element.prototype.params = function(){
	this.params = "my params";
}

ocircle = function(){
	
}
ocircle.prototype = new element();
ocircle.prototype.constructor = ocircle;
ocircle.prototype.diameter = 10;
ocircle.prototype.setDiameter = function(){
	this.diameter = 20;
}

///////////////////////////////////////////////////////////////////////////////
// abstract element function
medigeist.prototype.element = function (params) {

	
	var def = this.getDef();	

    // check if param value is there and if it's valid JSON, if not fall back to default type
    if(!params || (typeof(params) != 'object')) { var params = {type:def.type}; }

    // check now for type key in params  
    if (!params.type) {params["type"] = def.type; } 
	
	// next check for type in def. If type doesn't exist in def.js, the default value of 'type' is used	
    if(!def.hasOwnProperty(params.type)) { params.type = def.type; } 
	
	// compare given parameters against default values
	params = this.validate(params,def[params.type][0]);
	
	
	// if no id is given, add a random value
	if (!params.id) {params["id"] = "id_"+Math.random().toString(); }
	// console.log(params.id);
	
	// if no layer (parent element) is given, add a the default parent (the svg root node)
	if (!params.layer) {params["layer"] = def.svg[0].id; }
	// console.log(params.id);


return params;		

} 

///////////////////////////////////////////////////////////////////////////////
// abstract element function
medigeist.prototype.element = function (params) {

	
	var def = this.getDef();	

    // check if param value is there and if it's valid JSON in an array, if not fall back to default type
    if(!params || (typeof(params) != 'object') || (Object.prototype.toString.call( params ) != '[object Array]')) { 
	                   for (key in def) { if (key == def.type) {var params = def[key];    }}
					   
	}
    // validate the values and structure
    
    // set id value if not in params[0]
	// the first element of the array is the primary element, therefore it needs an unique identifier.
	// the id value is set at run time and not in defs.js to avoid rendundancies
	if(!params[0]["id"]) { params[0]["id"] = "id_"+Math.random().toString();  }
    
	// set layer value if not in params[0]
	// default parent element is the SVG root element of the document. Only the first element of the params array needs a layer attribute.
	// All subqequent elements are children of the first element.
	if(!params[0]["layer"]) { params[0]["layer"] = def.svg[0].id;  }


return params;		

} 
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// opsolete circle function with elements function

medigeist.prototype.circle = function(c,l)
{
	
	var type = "circle";
	var defaults = this.getDef().circle[0];
	var svg = this.getDef().svg[0];
	
	//////////////////
	var layer = svg.id;
	var id = "id_"+Math.random().toString();
	
			
	if (l) { layer = l.layer; id = l.id;  }
		
	
	if (document.getElementById(layer) == null ) {
	           layer = svg.id;  
	 }
    //////////////////
	 
	var el = document.createElementNS(svg.xmlns,type);

	// overwrite default settings
	var attributes = c ? c: defaults; 

	if ((JSON.stringify(attributes) === JSON.stringify(defaults)) == false) {
		attributes = this.validate(c,defaults); 
	};
  
    
	// var attributes = this.getDef().rect[0];
	// var parent = svg.id;
	el.setAttribute("id", id);
	
	el.setAttribute("layer", layer); 

	    for (key in attributes) {
    	
	        el.setAttribute(key, attributes[key] );
       
       
	        }
  
	    
		document.getElementById(layer).appendChild(el);
	
}

///////////////////////////////////////////////////////////////////////////////
// core element: rectangle
medigeist.prototype.rect = function(c,l)
{

var type = "rect";
var defaults = this.getDef().rect[0];
var svg = this.getDef().svg[0];

//////////////////
var layer = svg.id;
var id = "id_"+Math.random().toString();

		
if (l) { layer = l.layer; id = l.id;  }
	

if (document.getElementById(layer) == null ) {
           layer = svg.id;  
 }
//////////////////



var el = document.createElementNS(svg.xmlns,type);

// overwrite default settings
var attributes = c ? c: defaults;

if ((JSON.stringify(attributes) === JSON.stringify(defaults)) == false) {
	attributes = this.validate(c,defaults);
};

    
    
// var attributes = this.getDef().rect[0];
// var layer = svg.id;

el.setAttribute("id", id);

el.setAttribute("layer", layer); 

    for (key in attributes) {
    	
        el.setAttribute(key, attributes[key] );
       
       
        }
  
	    
	document.getElementById(layer).appendChild(el);
	
	
}
///////////////////////////////////////////////////////////////////////////////
// core element: line
medigeist.prototype.line = function(c,l)
{

var type = "line";
var defaults = this.getDef().line[0];
var svg = this.getDef().svg[0];

//////////////////
var layer = svg.id;
var id = "id_"+Math.random().toString();

		
if (l) { layer = l.layer; id = l.id;  }
	

if (document.getElementById(layer) == null ) {
           layer = svg.id;  
 }
//////////////////


var el = document.createElementNS(svg.xmlns,type);

// overwrite default settings
var attributes = c ? c: defaults;

if ((JSON.stringify(attributes) === JSON.stringify(defaults)) == false) {
	attributes = this.validate(c,defaults);
};

    
    
// var attributes = this.getDef().rect[0];
// var layer = svg.id;

el.setAttribute("id", id);

el.setAttribute("layer", layer); 

    for (key in attributes) {
    	
        el.setAttribute(key, attributes[key] );
       
       
        }
  
	    
	document.getElementById(layer).appendChild(el);
	
	
}

///////////////////////////////////////////////////////////////////////////////
// core element: text
medigeist.prototype.text = function(c,l)
{
	
// if only one argument with text content is given	
// if ((arguments.length == 1) && (typeof(arguments[0]) == "string")) {
//		    text = arguments[0]; c = undefined; 
// }

var type = "text";
var defaults = this.getDef().text[0];
var svg = this.getDef().svg[0];
var data = this.getDef().text[1].data;

// if only one argument with text content is given get data value and remove it from the array subsequently because otherwise it becomes an attribute of the text node which (see helper function "validate")
if (arguments.length == 1) {
		    if('data' in arguments[0]) { data = arguments[0].data; delete arguments[0].data; }
}

//////////////////
var layer = svg.id;
var id = "id_"+Math.random().toString();
		
if (l) { layer = l.layer; id = l.id; data = l.data; }
	
 

if (document.getElementById(layer) == null ) {
           layer = svg.id;  
 }
//////////////////



// overwrite default settings
var attributes = c ? c: defaults; 
// var data = text ? text: sample_text;


var el = document.createElementNS(svg.xmlns,type);
el.appendChild(document.createTextNode(data));


if ((JSON.stringify(attributes) === JSON.stringify(defaults)) == false) {
	attributes = this.validate(c,defaults);
};

// var layer = svg.id;

el.setAttribute("id", id);

el.setAttribute("layer", layer); 

    for (key in attributes) {
    	
        el.setAttribute(key, attributes[key] );
       
       
        }
  
	    
	document.getElementById(layer).appendChild(el);
	
	
}

///////////////////////////////////////////////////////////////////////////////
// function to create geometric core elements: i.e. circle, rect, polyline
medigeist.prototype.geometry = function (params) {
	
	var def = this.getDef();
	var svg = def.svg[0];
	var type = params[0].type;
	
	// type in params[0] is no longer needed, therefore delete it
    delete params[0].type;
    
    // set id value if not in params[0]
	// the first element of the array is the primary element, therefore it needs an unique identifier.
	// the id value is set at run time and not in defs.js to avoid rendundancies
	if(!params[0]["id"]) { params[0]["id"] = "id_"+Math.random().toString();  }
    
	// set layer value if not in params[0]
	// default parent element is the SVG root element of the document. Only the first element of the params array needs a layer attribute.
	// All subqequent elements are children of the first element.
	if(!params[0]["layer"]) { params[0]["layer"] = def.svg[0].id;  }

	var layer = params[0].layer;
    // validate the values and structure
	// compare given parameters against default values
	
	var attributes = this.validate(params[0],def[type][0]);
	
	var el = document.createElementNS(svg.xmlns,type);
	
    for (key in attributes) {
        el.setAttribute(key, attributes[key] );
	}
	document.getElementById(layer).appendChild(el);
	
	
	return attributes;
	
} 
///////////////////////////////////////////////////////////////////////////////

// core element: text
medigeist.prototype.text = function(params)
{
	
	// get the name of the method which identifies the type of the element
	var type = this.getNameOfCall(arguments.callee);
	// get default values
	var def = this.getDef();
	
	
	// text data can be a simple string
	if (typeof(params) == 'string') { var data = params; }
        
        // if params array contains data as first and only element      
        if (params && params[0].data) { var data = params[0].data; console.log (params[0].data); } 
        
	
	// if no params: fall back to default values of particular element
	if(!params || (typeof(params) != 'object') || (params == undefined) || (Object.prototype.toString.call( params ) != '[object Array]') || params.length < 1) { 
	                  
					  
					  var params = def[type]; 
	}
	// add the element identifier (type) to params array
	params[0].type = type;
	
	if (!data) { data = params[1].data ? params[1].data: this.getDef().text[1].data; }
	
		
	var element  = this.geometry(params[0]); 
	
	
	
	// if (!(data = params[1].data)) {data = this.getDef().text[1].data;}
	
    document.getElementById(element.id).appendChild(document.createTextNode(data));

}


///////////////////////////////////////////////////////////////////////////////
// Element: linearGradient
medigeist.prototype.linearGradient = function(params)
{

var type = "linearGradient";
var defaults = this.getDef().linearGradient;
var svg = this.getDef().svg[0];

// if defs element is not existing in svg: create it
var layer = this.isDefs(svg);


var id = "id_"+Math.random().toString(); 

// check if first element of params contains id value
if (params) { 
	  if(params[0].id) { id = params[0].id; params.shift();
	        if (params.length == 0) { params = defaults; }
	    } 
} 



// overwrite default settings
var attributes = params ? params: defaults; 

var gradient = attributes.map( function (e) { if ( "x1" in e ) {return e;  }  } )
      .filter(function(n){ return n != undefined });

// extract stop nodes in default parameters
var stops = attributes.map(  function (e) { if ( "offset" in e ) {return e;  }    } )
      .filter(function(n){ return n != undefined });


if (stops.length == 0) { 
	
	stops = defaults.map(  function (e) { if ( "offset" in e ) {return e;  }    } )
	      .filter(function(n){ return n != undefined });

}

var el = document.createElementNS(svg.xmlns,type);

el.setAttribute("id", id);

el.setAttribute("layer", layer); 

if (gradient.length > 0) {
var gradient_attributes = gradient[0];

for (key in gradient_attributes) {
	
    el.setAttribute(key, gradient_attributes[key] );
   
   
    }

}

document.getElementById(layer).appendChild(el);



stops.forEach(function (e) { 
	
	var key_name; 
	
	el = document.createElementNS(svg.xmlns,"stop");
	document.getElementById(id).appendChild(el);
	
	for (key in e) {
		
		if ((key == "color") || (key == "opacity")) { key_name = "stop-"+key; } else {key_name = key;}
	
	    el.setAttribute(key_name, e[key] );
   
   
	    }


 } );
	
	
}



/////////////////////////////////////////////////////////////////////////

// color = stop-color, opacity = stop-opacity. '-' not allowed as character in variables
linearGradient: [
{offset:"5%",  color: "#ff0000", opacity:"0.3"},
{offset:"85%", color: "#000000", opacity:"0.5"}
],

/////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Wrapper function to create single elements inside a block element
// see element function
medigeist.prototype.createElement = function(params) {

if (!params) { params = []; }
var filter = params[0].type; delete params[0].type;

var el;

  switch (filter) {
	
       case "circle": el = this.circle(params);
       break;
   
       case "rect": el = this.rect(params);
       break;
   
       case "text": el = this.text(params);
       break;
       
       case "line": el = this.line(params);
       break;
       
       case "polygon": el = this.polygon(params);
       break;
	   
       case "path": el = this.path(params);
       break;
   
       case "ellipse": el = this.ellipse(params);
       break;
	   
       case "polyline": el = this.polyline(params);
       break;
	   
       case "linearGradient": el = this.linearGradient(params);
       break;
	   
       case "radialGradient": el = this.radialGradient(params);
       break;
	   
       case "pattern": el = this.pattern(params);
       break;
	   
       case "animateTransform": el = this.animateTransform(params);
       break;
   
}   

return el;
   
};



<!-- start of chapter 4 --> 
<div id="chapter_4">   
<div class="page-header">
    <h2>Example 4</h2>
</div>
<div id="embedded_svg_004"></div>
<br/>
<button type="button" id="full_screen_004" class="btn btn-default">Full Screen</button>			
<button class="btn btn-default" type="button" data-toggle="collapse" data-target="#collapse_svg_004_code" aria-expanded="false" aria-controls="collapse_svg_004_code">
  SVG Source
</button></p>
<div class="collapse" id="collapse_svg_004_code">  
    <pre id="embedded_svg_004_code"></pre>  
</div>
<p>A path which forms a circle consisting of two segments.</p>
</div>      
<!-- end of chapter 4 --> 




$('#full_screen_004').click(function () {
	var el = document.getElementById('embedded_svg_004');   
    screenfull.toggle(el);
});	





animateExchange: [

[
  {typeOf: "path", d: "M 0,0 A1,1 0 1,1 4,0"}, // 0
  {typeOf: "element_009", block:"element_009", d:"{0}.d", transform:"translate(0,0)"} // 1. Arc, layer: canvas.id,  style["element_009"][0][0].d = {0};
  {typeOf: "g", transform:"translate(0,0), rotate(0)"}, // 2. group, layer: canvas.id,
  {typeOf: "element_001", block:"element_001", layer: "{2}.id", data: "1", transform:"rotate(0)"}, // 3. Node, Child of 2
  {typeOf: "animateMotion", dur:3,  layer: "{3}.id", path: "{0}.d", begin: "{3}.click", rotate:0}, // 4. Child of 3
  {typeOf: "animateTransform", layer: "{3}.id", values:"4,0;0,0", dur:1, begin: "{4}.end", fill:"freeze", repeatCount: 1}, // 5. Child of 3
  {typeOf: "animate", layer: "{3}.id", attributeType:"CSS", attributeName:"visibility", from:"visible", begin: "{4}.end-1.5", to:"hidden",dur:3}, // 6. Child of 3
  // {typeOf: "animate", attributeType:"CSS", attributeName:"visibility", from:"hidden", begin: "animateMotion_003_2.end-1.5", to:"visible",dur:3}	 // 7. Child of 3	
                              
]

],




///////////////////////////////////////////////////////////////////////////////
// animation pattern: exchange two elements
medigeist.prototype.animateExchange = function () {
	
	if (!params) {  params = []; }
	
	var block_id = params[0].block ? params[0].block: this.getNameOfCall(arguments.callee);
	
	var block = this.getDef()[block_id] ? this.getDef()[block_id]: this.getDef().default;

	var group = el.g(params);
	
	//console.log("Just a test");
	
	return group;
	
};


//////////////////////////////////////////////////////////////////////////////

var traceLine = block[0];

console.log(group.id);

var path1 = traceLine[0].d;

el.getDef()[traceLine[2].block][0][0].d = path1; 

var path2 = traceLine[1].d;

traceLine[2].layer = group.id;

arc =  el.element([traceLine[2]]);

var animateMotion_1_id = el.createID(this.getDef().idLength); 
var animateMotion_2_id = el.createID(this.getDef().idLength); 


// delete block[0];

var pattern = [block[1], block[2]];

	
pattern.forEach(function (e) {

	
	if (i===0) {id = animateMotion_1_id; path = path1; } else {id = animateMotion_2_id; path = path2;}
			
	e[0].layer = group.id;
	
	g1 = el.g([e[0]]);
	
	e[1].layer = g1.id;
	
	node = el.element([e[1]]);
	
	e[2].layer = node.id;
	e[2].path = path;
	e[2].begin = node.id+".click";
	
	e[2].id = id;
	
	a1 = el.animateMotion([e[2]]);
	
	e[3].layer = node.id;
	e[3].begin = id+".end";    
	a2 = el.animateTransform([e[3]]);
	
	e[4].layer = node.id;
	e[4].begin = animateMotion_1_id+".end-1.5"; 
	   
	a3 = el.animate([e[4]]);
	
	e[5].layer = node.id;
	e[5].begin = animateMotion_2_id+".end-1.5"; 
	
	a4 = el.animate([e[5]]);
	
	i++;
	
		
    } 
); 











