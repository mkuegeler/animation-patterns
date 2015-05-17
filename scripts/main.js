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
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
function svg_pattern (v) {
	
	
		
        style.root = "embedded_svg_00"+v;
		var code_area = "embedded_svg_00"+v+"_code";
		
		// get instance of medigeist object
		var el = new medigeist(style);
		// initialize the svg root element		
		var svg = el.svg([{id:"svg_00"+v, style:"background-color:#cccc86"}]);
		
		var canvas =  el.g([{id:"canvas_00"+v,layer: svg.id, transform:"translate(-5,0),scale(1)"}]);
		
		//////////////////////////////////
				
		
		//style["element_001"][0][0].style = "fill:#ff4400;stroke:#ffcccc;stroke-width:0.1px;";
		
		//style["element_001"][2][0].style = "stroke:none; fill:#cc00ff;font-size: 1pt; text-anchor: middle;";
		
		// id:"aniPattern_001_00"+v, id:"aniPattern_002_00"+v,
		
		var aniPattern_001 =  el.animateExchangeNode([{layer: canvas.id,  transform:"translate(15,15),scale(2)"}]);
		
		style["animateExchangeNode"][2][1].data = 3;
		style["animateExchangeNode"][3][1].data = 4;
		style["animateExchangeNode"][4][0].style = "visibility:visible";
		style["animateExchangeNode"][4][1].data = 5;
		
		
		var aniPattern_002 =  el.animateExchangeNode([{layer: canvas.id,  transform:"translate(31,15),scale(2)"}]);  
		
		style["animateExchangeNode"][2][1].data = 6;
		style["animateExchangeNode"][3][1].data = 7;
		//style["animateExchangeNode"][4][0].style = "visibility:visible";
		//style["animateExchangeNode"][4][1].data = 8;
		
		
		var aniPattern_003 =  el.animateExchangeNode([{layer: canvas.id,  transform:"translate(15,23),scale(2)"}]); 
		
		style["animateExchangeNode"][2][1].data = 8;
		style["animateExchangeNode"][3][1].data = 9;
		style["animateExchangeNode"][4][0].style = "visibility:visible";
		style["animateExchangeNode"][4][1].data = 10;
		
		
		var aniPattern_004 =  el.animateExchangeNode([{layer: canvas.id,  transform:"translate(31,23),scale(2)"}]);  
		
		
	
		//////////////////////////////////
		
		el.writeCode (code_area);
		
		
}

svg_pattern (1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
}

);


