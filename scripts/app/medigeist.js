function medigeist (def) {
	
	
	this.id =  (def.id) ? def.id: Math.random().toString().replace(/\./g , "x");
	this.name =  (def.name) ? def.name: undefined;
	
	// the html node where the svg is located. Usually, it is a div element.
	this.root = (def.root) ? def.root: document.body;
	
	//this.preserveAspectRatio = (def.preserveAspectRatio) ? def.preserveAspectRatio: "xMidYMid meet";
	
	this.def = def;

}
///////////////////////////////////////////////////////////////////////////////
// get and set methods
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

medigeist.prototype.setID = function(value)
{
            this.id = value;
};
medigeist.prototype.getID = function()
{
            return this.id;
};
///////////////////////////////////////////////////////////////////////////////
medigeist.prototype.setName = function(value)
{
            this.name = value;
};
medigeist.prototype.getName = function()
{
            return this.name;
};
///////////////////////////////////////////////////////////////////////////////

medigeist.prototype.setRoot = function(value)
{
            this.root = value;
};
medigeist.prototype.getRoot = function()
{
            return this.root;
};

///////////////////////////////////////////////////////////////////////////////

medigeist.prototype.setDef = function(value)
{
            this.def = value;
};
medigeist.prototype.getDef = function()
{
            return this.def;
};

///////////////////////////////////////////////////////////////////////////////
// Support functions
///////////////////////////////////////////////////////////////////////////////

/// create a random string used as an unique identifier
medigeist.prototype.createID = function(length)
{
    
	var minimalLength = this.getDef().idLength;
	
	var randomString = Math.random().toString().replace(/\./g , "x");
	
	if(length) { 		
		if (length<minimalLength) { length = minimalLength; }
		    randomString = randomString.substr(0, length); 	
	}
		
	return "id_"+randomString;
};

// validate custom parameters against default parameters
// rules: c object leads def object. If a key nonexists in c, the default value of this key is taken from def.

medigeist.prototype.validate = function(c,def) {
	
    var params = {};
	
	for (var ckey in c) {
		
		params[ckey] = c[ckey];
		
		for (var dkey in def) {
	
		    if(!(dkey in c )) { params[dkey] = def[dkey]; }
   
	    }
	
	      
    }
	
	return params;
	
};
///////////////////////////////////////////////////////////////////////////////
// find specific key in definition file

medigeist.prototype.findDefinition = function(c,key,d) {
	
    var params = c[d];
	
	for (var ckey in c) {
		
		if (ckey === key) { params = c[ckey]; }
	      
    }
	
	return params;
	
};


///////////////////////////////////////////////////////////////////////////////
// check if defs element is existing in svg. if not: create it
// defs is used for gradients, patterns and symbols

medigeist.prototype.isDefs = function (svg) {

// var layer = "id_"+Math.random().toString();	

   var layer = this.createID(this.getDef().idLength); 

	if(document.getElementsByTagName("defs").item(0) === null) {

		var defs = document.createElementNS(svg.xmlns,"defs");
	
		         defs.setAttribute("id", layer);
		
			var first = document.getElementById(svg.id).firstChild;
		
			document.getElementById(svg.id).insertBefore(defs,first);
	

	
	} else { layer = document.getElementsByTagName("defs").item(0).id; }
	
	return layer; 
	
};

///////////////////////////////////////////////////////////////////////////////
// check parameter input
medigeist.prototype.checkParams = function (params,type) {

        // get default values
        var def = this.getDef();
	
	// fall back to default values of particular element
	if((typeof(params) != 'object') || (Object.prototype.toString.call( params ) != '[object Array]') || params.length < 1) { 
	                    if(def[type]) {params = def[type];}
	}
	// add the element identifier (type) to params array
	params[0].type = type;	
	

return params;		

}; 

///////////////////////////////////////////////////////////////////////////////
// return name of method
medigeist.prototype.getNameOfCall = function(f) {
    for(var p in this)
        if(this[p] === f)
            return p;
    throw "Callback not in object.";
};
///////////////////////////////////////////////////////////////////////////////
// Wrapper function to create single elements inside a block element
// see element function
medigeist.prototype.createElement = function(params) {

var el;

var filter = params[0].typeOf;
// delete params[0].typeOf;

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


///////////////////////////////////////////////////////////////////////////////
// Elements: Start
///////////////////////////////////////////////////////////////////////////////
// The svg root element
medigeist.prototype.svg = function(params)
{
    
	if (!params) { params = []; }
	var id;
	var style;
	var preserveAspectRatio;
	var viewBox;
	
    var attributes = this.getDef().svg[0];
	var svg = document.createElementNS(attributes.xmlns,"svg");
	var defs = document.createElementNS(attributes.xmlns,"defs");
	// var def_id = "id_"+Math.random().toString();
	
	var def_id = this.createID(this.getDef().idLength); 
	
	defs.setAttribute("id", def_id);
		
	    for (var key in attributes) {
    	
           svg.setAttribute(key, attributes[key] );
       
        }
	
	    if (params[0] && params[0].id) { id = params[0].id; attributes.id = id; } else {id = attributes.id;}
		if (params[0] && params[0].style) { style = params[0].style; } else {style = attributes.style;}
		if (params[0] && params[0].preserveAspectRatio) { preserveAspectRatio = params[0].preserveAspectRatio; } else {preserveAspectRatio = attributes.preserveAspectRatio;}
		if (params[0] && params[0].viewBox) { viewBox = params[0].viewBox; } else {viewBox = attributes.viewBox;}
		
	    svg.setAttribute("id",id);
		svg.setAttribute("style",style);
		
	    svg.setAttribute("preserveAspectRatio",preserveAspectRatio);
		svg.setAttribute("viewBox",viewBox);
	    			
        document.getElementById(this.getRoot()).appendChild(svg);
		document.getElementById(id).appendChild(defs); 
		
		return attributes;
		
     
};
///////////////////////////////////////////////////////////////////////////////
// function to create geometric core elements: i.e. circle, rect, polyline
medigeist.prototype.geometry = function (params) {
	
	var def = this.getDef();
	var svg = def.svg[0];
	var type = params.type;
	
	// console.log(params.layer);
	
	// type in params is no longer needed, therefore delete it
    delete params.type;
    
    // set id value if not in params
	// the first element of the array is the primary element, therefore it needs an unique identifier.
	// the id value is set at run time and not in defs.js to avoid rendundancies
	if(!params.id) { params.id = this.createID(this.getDef().idLength);  }
    
	// params.id = "id_"+Math.random().toString(); 
	
	// set layer value if not in params
	// default parent element is the SVG root element of the document. Only the first element of the params array needs a layer attribute.
	// All subqequent elements are children of the first element.
	
	// if(!params.layer) { params.layer = def.svg[0].id;  }
	if(!params.layer) {params.layer = document.getElementsByTagName("svg").item(0).id;}
	
	// var layer = params.layer;
    // validate the values and structure
	// compare given parameters against default values
	
	var attributes = this.validate(params,def[type][0]);
	
	var el = document.createElementNS(svg.xmlns,type);
	
    for (var key in attributes) {
        el.setAttribute(key, attributes[key] );
	}
	
	document.getElementById(params.layer).appendChild(el);
	
	
	return attributes;
	
}; 

//////////////////////////////////////////////////////////////////////////////
// returns selected values of css class definitions
//
medigeist.prototype.setClassPropertyValue = function(className,styleProperty)
{
            
		var oLength = document.styleSheets[0].cssRules.length;
		// var className = el.getAttributeNode("class").nodeValue;
		var oStyle, sStyle, j;
		
		for (var c = 0;c<oLength;c++) {
			
			oStyle = document.styleSheets[0].cssRules[c].style;
            
			for( var i = 0; i < oStyle.length; i++ ) {
                j = oStyle.item(i);
				
				if (j == styleProperty) {
				
					if (document.styleSheets[0].cssRules[c].selectorText == "text." + className) {
						this.classPropertyValue = oStyle.getPropertyValue(j);
						
					}
					
				}
            }
		}
			
};
//////////////////////////////////////////////////////////////////////////////
medigeist.prototype.getClassPropertyValue = function()
{
            return this.classPropertyValue;
}; 
///////////////////////////////////////////////////////////////////////////////
// Wrapper functions (Core Geometry)
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// wrapper function for core element: circle
medigeist.prototype.circle = function (params) {
	// get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
        if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
		 
} ;
///////////////////////////////////////////////////////////////////////////////
// wrapper function for core element: rectangle 
medigeist.prototype.rect = function (params) {
	// get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
        if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);

};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for core element: line
medigeist.prototype.line = function(params) {
        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
         if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for core element: polygon
medigeist.prototype.polygon = function(params) {
        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
         if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for core element: ellipse
medigeist.prototype.ellipse = function(params) {
        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
        if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for core element: polyline
medigeist.prototype.polyline = function(params) {
        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
        if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for core element: path
medigeist.prototype.path = function(params) {
        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
         if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for element: animate
medigeist.prototype.animate = function(params) {
        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
         if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for element: animateTransform
medigeist.prototype.animateTransform = function(params) {
        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
         if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for element: animateColor
medigeist.prototype.animateColor = function(params) {
        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
         if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for element: set
medigeist.prototype.set = function(params) {
        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
         if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for element: animateMotion
medigeist.prototype.animateMotion = function(params) {
        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
         if (!params) { params = []; }
        return this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for core element: text
medigeist.prototype.text = function(params)
{
    var data;    
	// text data can be a simple string
	if (typeof(params) == 'string') {  data = params; }        
        // if params array contains data as first and only element      
        if (params && params[0].data) {  data = params[0].data; }
	    if (params && params[1].data) {  data = params[1].data; }

        // get the name of the method which identifies the type of the element
	// var type = this.getNameOfCall(arguments.callee);
        // if no params: set an empty array      
        if (!params) {  params = [];  data = this.getDef().text[1].data; }
        var element = this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
        var el =  document.getElementById(element.id);

        // data as an attribute is not required because a text-node is added
        if (el.getAttribute("data")) {el.removeAttribute("data"); }  
	    el.appendChild(document.createTextNode(data));
		
		return element;
	
	

};
///////////////////////////////////////////////////////////////////////////////
// wrapper function for element: linearGradient
medigeist.prototype.linearGradient = function(params)
{
        
	var type = this.getNameOfCall(arguments.callee);
	var defaults = this.getDef().linearGradient;
	var svg = this.getDef().svg[0];

	// if defs element is not existing in svg: create it
	var layer = this.isDefs(svg);


	// var id = "id_"+Math.random().toString(); 	
	var id = this.createID(this.getDef().idLength); 

	// check if first element of params contains id value
	if (params) { 
		  if(params[0].id) { id = params[0].id; params.shift();
		        if (params.length === 0) { params = defaults; }
		    } 
	} 



	// overwrite default settings
	var attributes = params ? params: defaults; 

	var gradient = attributes.map( function (e) { if ( "x1" in e ) {return e;  }  } )
	      .filter(function(n){ return n !== undefined; });

	// extract stop nodes in default parameters
	var stops = attributes.map(  function (e) { if ( "offset" in e ) {return e;  }    } )
	      .filter(function(n){ return n !== undefined; });


	if (stops.length === 0) { 
	
		stops = defaults.map(  function (e) { if ( "offset" in e ) {return e;  }    } )
		      .filter(function(n){ return n !== undefined; });

	}

	var el = document.createElementNS(svg.xmlns,type);

	el.setAttribute("id", id);

	el.setAttribute("layer", layer); 

	if (gradient.length > 0) {
	var gradient_attributes = gradient[0];

	for (var key in gradient_attributes) {
	
	    el.setAttribute(key, gradient_attributes[key] );
   
   
	    }

	}

	document.getElementById(layer).appendChild(el);



	stops.forEach(function (e) { 
	
		var key_name; 
	
		el = document.createElementNS(svg.xmlns,"stop");
		document.getElementById(id).appendChild(el);
	
		for (var key in e) {
		
			if ((key == "color") || (key == "opacity")) { key_name = "stop-"+key; } else {key_name = key;}
	
		    el.setAttribute(key_name, e[key] );
   
   
		    }


	 } );	
	
};
///////////////////////////////////////////////////////////////////////////////
// Element: radialGradient
medigeist.prototype.radialGradient = function(params)
{

var type = this.getNameOfCall(arguments.callee);
var defaults = this.getDef().radialGradient;
var svg = this.getDef().svg[0];

// debug
// console.log(defaults);

// if defs element is not existing in svg: create it
var layer = this.isDefs(svg);

var id = this.createID(this.getDef().idLength); 
// var id = "id_"+Math.random().toString(); 

// check if first element of params contains id value
if (params) { 
	  if(params[0].id) { id = params[0].id; params.shift();
	        if (params.length === 0) { params = defaults; }
	    } 
} 



// overwrite default settings
var attributes = params ? params: defaults; 

var gradient = attributes.map( function (e) { if ( "fx" in e ) {return e;  }  } )
      .filter(function(n){ return n !== undefined; });

// extract stop nodes in default parameters
var stops = attributes.map(  function (e) { if ( "offset" in e ) {return e;  }    } )
      .filter(function(n){ return n !== undefined; });


if (stops.length === 0) { 
	
	stops = defaults.map(  function (e) { if ( "offset" in e ) {return e;  }    } )
	      .filter(function(n){ return n !== undefined; });

}

var el = document.createElementNS(svg.xmlns,type);

el.setAttribute("id", id);

el.setAttribute("layer", layer); 

if (gradient.length > 0) {
var gradient_attributes = gradient[0];

for (var key in gradient_attributes) {
	
    el.setAttribute(key, gradient_attributes[key] );
   
   
    }

}

document.getElementById(layer).appendChild(el);



stops.forEach(function (e) { 
	
	var key_name; 
	
	el = document.createElementNS(svg.xmlns,"stop");
	document.getElementById(id).appendChild(el);
	
	for (var key in e) {
		
		if ((key == "color") || (key == "opacity")) { key_name = "stop-"+key; } else {key_name = key;}
	
	    el.setAttribute(key_name, e[key] );
   
   
	    }


 } );
	
	
};
///////////////////////////////////////////////////////////////////////////////
// Element: pattern
medigeist.prototype.pattern = function(params)
{

var type = this.getNameOfCall(arguments.callee);
var defaults = this.getDef().pattern;
var svg = this.getDef().svg[0];

// debug
// console.log(defaults);

// if defs element is not existing in svg: create it
var layer = this.isDefs(svg);

var id = this.createID(this.getDef().idLength); 
// var id = "id_"+Math.random().toString(); 

// check if first element of params contains id value
if (params) { 
	  if(params[0].id) { id = params[0].id; params.shift();
	        if (params.length === 0) { params = defaults; }
	    } 
} 



// overwrite default settings
var attributes = params ? params: defaults; 

var pattern = attributes.map( function (e) { if ( "x" in e ) {return e;  }  } )
      .filter(function(n){ return n !== undefined; });

// extract element nodes in default parameters
var elements = attributes.map(  function (e) { if ( "type" in e ) {return e;  }    } )
      .filter(function(n){ return n !== undefined; });


if (elements.length === 0) { 
	
	elements = defaults.map(  function (e) { if ( "type" in e ) {return e;  }    } )
	      .filter(function(n){ return n !== undefined; });

}

var el = document.createElementNS(svg.xmlns,type);

el.setAttribute("id", id);

el.setAttribute("layer", layer); 

if (pattern.length > 0) {
var pattern_attributes = pattern[0];

for (var key in pattern_attributes) {
	
    el.setAttribute(key, pattern_attributes[key] );
   
   
    }

}

document.getElementById(layer).appendChild(el);

var sub_el;

elements.forEach(function (e) { 
	
	// var key_name; 
	var sub_type = e.type;
	
	// remove type key
	delete e.type;
	
	sub_el = document.createElementNS(svg.xmlns,sub_type);
	
	
	for (var key in e) {
	
	    sub_el.setAttribute(key, e[key] );
   
   
	    }
	
	document.getElementById(id).appendChild(sub_el);

 } );
	
	
};

///////////////////////////////////////////////////////////////////////////////
// Create a "group" element (g) and add children. Used for composite elements
//  // var params = [{id: "my_group", children:["child1","child2","child3"]}];
///////////////////////////////////////////////////////////////////////////////

medigeist.prototype.g = function(params)
{

	if (!params) { params = []; }
        var element = this.geometry(this.checkParams(params,this.getNameOfCall(arguments.callee))[0]);
	
        var el =  document.getElementById(element.id);

        // childeren, type, layer attributes are not needed in SVG output. Remove them to optimize the file size
		if (el.getAttribute("children")) {el.removeAttribute("children"); }
		if (el.getAttribute("type")) {el.removeAttribute("type"); }
	    if (el.getAttribute("layer")) {el.removeAttribute("layer"); }
		
        if (params[0] && params[0].children) {	    	
    	    for (var child in params[0].children) {	    	    
    	         el.appendChild(document.getElementById(params[0].children[child]));
            }	    
        }
		
		return el;
	
};
///////////////////////////////////////////////////////////////////////////////
// composite element: Circle node with one character or figure
medigeist.prototype.cnode = function (style,params) {
	
	
	if (!style) { style =  this.getNameOfCall(arguments.callee); }
	
	var node = this.findDefinition(this.getDef(),style,this.getNameOfCall(arguments.callee));
	
	// var node = this.getDef().cnode;
	      
	
//	if (!params) { params = [node[2].data ]; }
    
//	var group = this.g(params);
	
//    var shape =  this.circle([{layer:group.id, transform:node[0].transform}]);
	
//	var text_params = [
//           {layer: group.id, x : node[1].x, y: node[1].y, style: node[1].style},
//           {data: params[1].data}
//    ];
	
//	var text = this.text(text_params);
	
	
//	return group;
	
	
	if (!params) { params = [node[3].data ]; }
    
	var group = this.g(params);
    
	
	node[1].layer = group.id;
	node[1].transform = node[0].transform;
	
	var shape = this.circle([node[1]]);
	
	var text_params = [
		   {layer: group.id, x : node[2].x, y: node[2].y, style: node[2].style},
           {data: params[1].data}
    ];
	
	var text = this.text(text_params);
	
	return group;
	
	
	
	
	
	
};

///////////////////////////////////////////////////////////////////////////////
// composite element: Rectangle node with one character or figure
medigeist.prototype.rnode = function (style,params) {
	
	// a node consists of: a shape element (circle or square), a text element and a group which is the container (parent) of all these elements
 	// if no params: set an empty array      
	//if (!params) { params = [{transform:"translate(0,0)"}, {data: "0"}]; }
    //var group = this.g(params);
	
    //var shape =  this.rect([{layer:group.id,transform:"scale(2)"}]);
	
	//var text_params = [
    //       {layer: group.id, x : 1, y: 1.5, style: "stroke:none; fill:#0000ff;font-size: 1pt; text-anchor: middle;"},
    //       {data: params[1].data}
    //];
	
	//var text = this.text(text_params);
	
	//return group;
	
	if (!style) { style =  this.getNameOfCall(arguments.callee); }
	
	var node = this.findDefinition(this.getDef(),style,this.getNameOfCall(arguments.callee));
	
	// var node = this.getDef().rnode;
	
	if (!params) { params = [node[3].data ]; }
    
	var group = this.g(params);
    
	
	node[1].layer = group.id;
	node[1].transform = node[0].transform;
	
	var shape = this.rect([node[1]]);
	
	var text_params = [
		   {layer: group.id, x : node[2].x, y: node[2].y, style: node[2].style},
           {data: params[1].data}
    ];
	
	var text = this.text(text_params);
	
	return group;
	
	
};
///////////////////////////////////////////////////////////////////////////////
// simplified composite elements called "blocks". Obsolete! See function elements below
medigeist.prototype.block = function (style) {

var el = this;
// var style;
if (!style) { style =  this.getNameOfCall(arguments.callee); }
var group;
var element;
var data;

var block = this.findDefinition(this.getDef(),style,this.getNameOfCall(arguments.callee));

if (block[0].type != "g") {group = el.g(); } else {  group = el.g([block[0]]); block.shift();  }


block.forEach(function (e) {  
	type = e.type;  delete e.type; e.layer = group.id;
	
	if (type === "content" || type === "text") {
	    if (type === "content") {data  = e.data;}
	    if (type === "text") { e.data = data; element = el.text([e,{data:data}]);}
	}
	else { element = el.geometry(el.checkParams([e],type)[0]);}
	    
	 			 
						 } );	

return group;
};
///////////////////////////////////////////////////////////////////////////////
// generic element function: check parameters
medigeist.prototype.element = function (params) {
	
	var el = this;
	var element;
	var children = null;
	
	
	if (!params) {  params = []; }
	
	var block_id = params[0].block ? params[0].block: this.getNameOfCall(arguments.callee);
		
	var block = this.getDef()[block_id] ? this.getDef()[block_id]: this.getDef().default;

	var group = el.g(params);
	
	block.forEach(function (e) {
		
		// e[0].id = "id_"+Math.floor(Math.random()).toString();
		
		e[0].id  = el.createID(el.getDef().idLength); 
			
		// e[0].id = "id_"+Math.random().toString();
		e[0].layer = group.id;
		//if ( e[0].children ) { children = true; console.log(e[0].children);  }
		//if (children === false) { e[0].layer = element.id; children = null; } 
				
		for (var i=0; i<e.length; i++) {  if ( e[i].data ) { e[i].data = params[0].data ? params[0].data: e[i].data; } }
									      
		element =  el.createElement(e);
		
		// if (children === true) { children = false; }
			
        } 
	);
	
	return group;
	
};
///////////////////////////////////////////////////////////////////////////////
// animation pattern: exchange two elements
medigeist.prototype.animateExchange = function (params) {
	
	var el = this;
	var element;
	var children = null;
	var path, arc, g1, node, a1, a2, a3, id;
	var i = 0;
	
	if (!params) {  params = []; }
	
	var block_id = params[0].block ? params[0].block: this.getNameOfCall(arguments.callee);
		
	var block = this.getDef()[block_id] ? this.getDef()[block_id]: this.getDef().default;

    var group = this.g(params);
	
	var traceLine = block[0];
	
	// console.log(traceLine);
	
	var animateMotion_1_id = el.createID(this.getDef().idLength); 
	var animateMotion_2_id = el.createID(this.getDef().idLength); 

	
	var path_003_1 = traceLine[0].d;
	
	var element = traceLine[2].block;
		
	el.getDef()[element][0][0].d = path_003_1; 
	
	traceLine[2].layer = group.id;
	
	traceLine[2].id = el.createID(this.getDef().idLength);

	var arcc_003_1 =  el.element([traceLine[2]]);
	
	// var arcc_003_1 =  el.element([{layer: group.id, block:element, transform:"translate(0,0)"}]);
	
	// console.log(traceLine[2]);
	
	// console.log(arcc_003_1);
	
	var node_1 = block[1];
	
	node_1[0].layer = group.id;
	
	node_1[0].id = el.createID(this.getDef().idLength); 
	
	var grou_003_1 =  el.g([node_1[0]]); // 90
	
	
	node_1[1].layer = grou_003_1.id;
	
	node_1[1].id = el.createID(this.getDef().idLength); 
	
	var node_003_1 =  el.element([node_1[1]]); 
	
	// var grou_003_1 =  el.g([{ layer: group.id, transform:"translate(0,0), rotate(0)"}]); // 90
	
	// var node_003_1 =  el.element([{layer: grou_003_1.id, block:"element_001", data: "1", transform:"rotate(0)"}]); 
	
	
	// var anim_003_1b =  el.animateMotion([{layer: node_003_1.id, id: animateMotion_1_id, path: path_003_1, begin: node_003_1.id+".click", dur:3,  rotate:0}]);
	
	// var anim_003_1bb =  el.animateTransform([{layer: node_003_1.id, values:"4,0;0,0", begin:anim_003_1b.id+".end", dur:1, fill:"freeze", repeatCount: 1}]);
	
	// var anim_003_1a = el.animate([{layer: grou_003_1.id, attributeType:"CSS", attributeName:"visibility", from:"visible", begin: animateMotion_1_id+".end-1.5", to:"hidden",dur:3}]);
	
	// var anim_003_1c = el.animate([{layer: grou_003_1.id, attributeType:"CSS", attributeName:"visibility", from:"hidden", begin: animateMotion_2_id+".end-1.5", to:"visible",dur:3}]);
	
	
	node_1[2].layer = node_003_1.id;
	
	node_1[2].id = animateMotion_1_id; 
	
	node_1[2].path = path_003_1;
	
	node_1[2].begin = node_003_1.id+".click";
	
	var anim_003_1b =  el.animateMotion([node_1[2]]);
	
	
	
	node_1[3].layer = node_003_1.id;
	
	node_1[3].begin = animateMotion_1_id+".end";
	
	var anim_003_1bb =  el.animateTransform([node_1[3]]);
	
	
	node_1[4].layer =grou_003_1.id;
	
	node_1[4].begin = animateMotion_1_id+".end-1.5";	
	
	var anim_003_1a = el.animate([node_1[4]]);
	
		
	node_1[5].layer =grou_003_1.id;
	
	node_1[5].begin = animateMotion_2_id+".end-1.5";
	
	var anim_003_1c = el.animate([node_1[5]]);
	
	
	
	var path_003_2 = traceLine[1].d;
	
	el.getDef()[element][0][0].d = path_003_2; 
	
	// var grou_003_2 =  el.g([{ layer: group.id, transform:"translate(4,0), rotate(90)", style:"visibility:hidden" }]); // 90
	
	// var node_003_2 =  el.element([{layer: grou_003_2.id, block:"element_001", data: "1", transform:"rotate(270)"}]); 
	
	// var anim_003_2b =  el.animateMotion([{layer: node_003_2.id, id: animateMotion_2_id, path: path_003_2, begin: node_003_2.id+".click", dur:3,  rotate:0}]);
	
	// var anim_003_2bb =  el.animateTransform([{layer: node_003_2.id, values:"0,0;4,0", begin:anim_003_2b.id+".end", dur:1, repeatCount: 1}]);
	
	// var anim_003_2a = el.animate([{layer: grou_003_2.id, attributeType:"CSS", attributeName:"visibility", from:"hidden", begin: animateMotion_1_id+".end-1.5", to:"visible",dur:3}]);
	
	// var anim_003_2c = el.animate([{layer: grou_003_2.id, attributeType:"CSS", attributeName:"visibility", from:"visible", begin: animateMotion_2_id+".end-1.5", to:"hidden",dur:3}]);
	
	var node_2 = block[2];
	
	node_2[0].layer = group.id;
	
	node_2[0].id = el.createID(this.getDef().idLength); 
	
	var grou_003_2 =  el.g([node_2[0]]); // 90
	
	
	node_2[1].layer = grou_003_2.id;
	
	node_2[1].id = el.createID(this.getDef().idLength); 
	
	var node_003_2 =  el.element([node_2[1]]); 
	
		
	node_2[2].layer = node_003_2.id;
	
	node_2[2].id = animateMotion_2_id; 
	
	node_2[2].path = path_003_2;
	
	node_2[2].begin = node_003_2.id+".click";	
	
	var anim_003_2b =  el.animateMotion([node_2[2]]);
	
	
	
	node_2[3].layer = node_003_2.id;
	
	node_2[3].begin = animateMotion_2_id+".end";		
	
	var anim_003_2bb =  el.animateTransform([node_2[3]]);
	
	
	node_2[4].layer =grou_003_2.id;
	
	node_2[4].begin = animateMotion_1_id+".end-1.5";	
	
	var anim_003_2a = el.animate([node_2[4]]);
	
	
	node_2[5].layer =grou_003_2.id;
	
	node_2[5].begin = animateMotion_2_id+".end-1.5";
	
	var anim_003_2c = el.animate([node_2[5]]);
	
	
	return group;
	
};

///////////////////////////////////////////////////////////////////////////////
// animation pattern: exchange two node elements
medigeist.prototype.animateExchangeNode = function (params) {
	
	var el = this;
	var element;
	var children = null;
	var path, arc, g1, node, a1, a2, a3, id;
	var i = 0;
	
	if (!params) {  params = []; }
	
	var block_id = params[0].block ? params[0].block: this.getNameOfCall(arguments.callee); // if no params: use default values defined in style.js with same name as function
		
	var block = this.getDef()[block_id] ? this.getDef()[block_id]: this.getDef().default; // default: name of function = animateExchangeNode

    var group = this.g(params);
	
	var nodeElement = block[0][0];	
	
	var arcs = block[1];
	
	var arclist = [];
	
	arcs.forEach(function(e) { el.getDef()[nodeElement.block][0][0].d = e.d;  
		                                nodeElement.layer = group.id; 
							                    nodeElement.id = el.createID(el.getDef().idLength); 
												nodeElement.transform = e.transform;
							                                        arclist.push(el.element([nodeElement]) );    }); 
	
		
	// the circle
	
	//var element1 = traceLine[2].block;
		
	//el.getDef()[arcs[2].block][0][0].d = arcs[0].d; 
	
	//arcs[2].layer = group.id;
	
	//arcs[2].id = el.createID(this.getDef().idLength);

	//var arc1 =  el.element([arcs[2]]);
	
	
		
	//var element2 = traceLine[2].block;
		
	//el.getDef()[arcs[2].block][0][0].d = arcs[1].d; 
	
	//arcs[2].layer = group.id;
	
	//arcs[2].id = el.createID(this.getDef().idLength);	

	//var arc2 =  el.element([arcs[2]]);
		
	
	// First Node
	
	var node_1 = block[2];
	
	node_1[0].layer = group.id;
	
	node_1[0].id = el.createID(this.getDef().idLength); 
	
	var ElementGroup1 =  el.g([node_1[0]]); // 90
	
	
	node_1[1].layer = ElementGroup1.id;
	
	node_1[1].id = el.createID(this.getDef().idLength); 
	
	var nodeElement_1 =  el.element([node_1[1]]); 
	
	// Second Node
	
	var node_2 = block[3];
	
	node_2[0].layer = group.id;
	
	node_2[0].id = el.createID(this.getDef().idLength); 
	
	var ElementGroup2 =  el.g([node_2[0]]); // 90
	
	
	node_2[1].layer = ElementGroup2.id;
	
	node_2[1].id = el.createID(this.getDef().idLength); 
	
	var nodeElement_2 =  el.element([node_2[1]]); 
	
	
	// Third Node
	
	var node_3 = block[4];
	
	node_3[0].layer = group.id;
	
	node_3[0].id = el.createID(this.getDef().idLength); 
	
	var ElementGroup3 =  el.g([node_3[0]]); // 90
	
	
	node_3[1].layer = ElementGroup3.id;
	
	node_3[1].id = el.createID(this.getDef().idLength); 
	
	var nodeElement_3 =  el.element([node_3[1]]); 
	
	
	
	
	
	
	return group;
	
};


///////////////////////////////////////////////////////////////////////////////
// generic test function
medigeist.prototype.test = function () {
	
	// console.log(this.validate(c,this.getDef().rect[0]) );
	
	console.log("Just a test");
	
};

///////////////////////////////////////////////////////////////////////////////
// generic support function: generate plain SVG Code
medigeist.prototype.writeCode = function (code_area) {
	
	var svgout = document.getElementById(this.getDef().root).innerHTML;

	var display_svg = svgout.replace(/</g, "&lt;");	
		display_svg = display_svg.replace(/>/g, "&gt;\n");
		display_svg = display_svg.replace(/"/g, "&quot;");
		display_svg = display_svg.replace(/id=/g, "\nid=");			
	
	document.getElementById(code_area).innerHTML = display_svg;	

	
};

///////////////////////////////////////////////////////////////////////////////