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
requirejs(['comp', 'style', 'app/medigeist'],

function   (comp,style) {	 
	 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function notebook (v) {
	
    style.root = "embedded_svg_00"+v;
	var code_area = "embedded_svg_00"+v+"_code";

	// get instance of medigeist object
	var el = new medigeist(style);
	// initialize the svg root element		
	var svg = el.svg([{id:"svg_00"+v, style:"background-color:#cccccc"}]);

	var canvas =  el.g([{id:"canvas_00"+v,layer: svg.id, transform:"translate(2,5),scale(1)"}]);
	
	var amountR = 4;	
	var offsetR = 8;
	
	
	var scale = 2;

	
	// replace node element 1
	style["animateExchangeNode"][2][1].block = "element_003";
	style["animateExchangeNode"][3][1].block = "element_003";
	
	
    comp.row(amountR,offsetR).forEach(function (e,i) { e.layer = canvas.id;
     e.transform = e.transform+",scale("+scale+")"; el.animateExchangeNode([e]);  i++; } );	

	
	
	el.writeCode (code_area);
	
	
}		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
notebook (1);		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
function svg_animateExchange (v) {
		
        
		
	    style.root = "embedded_svg_00"+v;
		var code_area = "embedded_svg_00"+v+"_code";
	
		// get instance of medigeist object
		var el = new medigeist(style);
		// initialize the svg root element		
		var svg = el.svg([{id:"svg_00"+v, style:"background-color:#cccccc"}]);
	
		var canvas =  el.g([{id:"canvas_00"+v,layer: svg.id, transform:"translate(-6,-3),scale(1.5)"}]);
		
		//////////////////////////////////		
				
		
		style["element_001"][0][0].style = "fill:#ff4400;stroke:#ffcccc;stroke-width:0.1px;";
		
		style["element_001"][2][0].style = "stroke:none; fill:#cc00ff;font-size: 1pt; text-anchor: middle;";
		
		// arc element
		// element_009
		style["animateExchange_arc"][0][0].style = "visibility:hidden";
		
		
				
		var aniPattern_001 =  el.animateExchange([{layer: canvas.id, id:"aniPattern_001_"+v, transform:"translate(15,15),scale(4)"}]); 
		
		style["animateExchange"][1][1].transform = "rotate(180)";
		
		style["animateExchange"][2][1].transform = "rotate(90)";
		
		style["animateExchange"][1][1].data = 2;
		
		style["animateExchange"][2][1].data = 2;
		
		console.log(aniPattern_001.children[2].children[0].children[3]);
		
		
		var aniPattern_002 =  el.animateExchange([{layer: canvas.id, id:"aniPattern_002_"+v, transform:"translate(31,15),scale(4),rotate(180)"}]); 
		
		
		style["animateExchange"][1][1].data = 1;
		
		style["animateExchange"][2][1].data = 1;
		
		
	
		//////////////////////////////////
		
		el.writeCode (code_area);
		
		
	}

	 svg_animateExchange (2);
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
function svg_animateExchangeNode (v) {
	
	
		
        style.root = "embedded_svg_00"+v;
		var code_area = "embedded_svg_00"+v+"_code";
		
		// get instance of medigeist object
		var el = new medigeist(style);
		// initialize the svg root element		
		var svg = el.svg([{id:"svg_00"+v, style:"background-color:#cccc86"}]);
		
		var canvas =  el.g([{id:"canvas_00"+v,layer: svg.id, transform:"translate(1,3),scale(1)"}]);
		
		//////////////////////////////////
				
		
		// overwrite default values
		
		// node element with circles and character (number)
		// element_001
		
		// the circle
		// style["element_001"][0][0].style = "fill:#ff4400;stroke:#ffcccc;stroke-width:0.1px;";
		
		// the number
		// style["element_001"][2][0].style = "stroke:none; fill:#cc00ff;font-size: 1pt; text-anchor: middle;";
		
		// arc element
		// element_009
		// style["element_009"][0][0].style = "visibility:visible";
		
		
		var amountR = 8;
		var amountC = 8;
		
		var offsetR = 8;
		var offsetC = 8;
		
		var scale = 1;
		
		
		// hide arcs
		// style["element_009"][0][0].style = "visibility:hidden";
		
		
		
		// replace node element 1
		style["animateExchangeNode"][2][1].block = "element_003";
		style["animateExchangeNode"][3][1].block = "element_003";
		//style["animateExchangeNode"][4][1].block = "element_003";
		
		// var row1 =  el.g([{layer: canvas.id}]);
		
		var colArray = [];
		
		comp.col(amountC,offsetC).forEach(function (e) { e.layer = canvas.id;  el.g([e]);  colArray.push(e.id); } ); 		
		  colArray.forEach(function (f) {  		
		       comp.row(amountR,offsetR).forEach(function (e,i) { e.layer = f;
			     e.transform = e.transform+",scale("+scale+")"; el.animateExchangeNode([e]);  i++; } );		
		} ); 
		
		
		//comp.row(amountR,offsetR).forEach(function (e,i) { e.layer = canvas.id; 
		//	e.transform = e.transform+",scale("+scale+")"; if(i== (amountR-1)){style["element_009"][0][0].style = "visibility:hidden";}; 	
		//	el.animateExchangeNode([e]);  i++; } );		
		 
		
		// var aniPattern_001 =  el.animateExchangeNode([{layer: canvas.id,  transform:"translate(0,0),scale(2)"}]);
		
		
		
		//style["animateExchangeNode"][2][1].data = 3;
		//style["animateExchangeNode"][3][1].data = 4;
		//style["animateExchangeNode"][4][0].style = "visibility:visible";
		//style["animateExchangeNode"][4][1].data = 5;
		
		
		// var aniPattern_002 =  el.animateExchangeNode([{layer: canvas.id,  transform:"translate(8,0),scale(2)"}]);  
		
		//style["animateExchangeNode"][2][1].data = 6;
		//style["animateExchangeNode"][3][1].data = 7;
		//style["animateExchangeNode"][4][0].style = "visibility:visible";
		//style["animateExchangeNode"][4][1].data = 8;
		
		
		// var aniPattern_003 =  el.animateExchangeNode([{layer: canvas.id,  transform:"translate(16,0),scale(2)"}]); 
		
		//style["animateExchangeNode"][2][1].data = 8;
		//style["animateExchangeNode"][3][1].data = 9;
		//style["animateExchangeNode"][4][0].style = "visibility:visible";
		//style["animateExchangeNode"][4][1].data = 10;
		
		
		// var aniPattern_004 =  el.animateExchangeNode([{layer: canvas.id,  transform:"translate(24,0),scale(2)"}]);  
		
		
	
		//////////////////////////////////
		
		el.writeCode (code_area);
		
		
}

svg_animateExchangeNode (3);
    
}

);


