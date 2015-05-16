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
		
		var canvas =  el.g([{id:"canvas_00"+v,layer: svg.id, transform:"translate(5,5),scale(1)"}]);
		
		//////////////////////////////////
				
		
		//style["element_001"][0][0].style = "fill:#ff4400;stroke:#ffcccc;stroke-width:0.1px;";
		
		//style["element_001"][2][0].style = "stroke:none; fill:#cc00ff;font-size: 1pt; text-anchor: middle;";
		
		//style["animateExchange"] = style["animateExchange_001"];
		
		var aniPattern_001 =  el.animateExchange([{layer: canvas.id, id:"aniPattern_001_00"+v, transform:"translate(15,15),scale(4)"}]);
		
		var aniPattern_002 =  el.animateExchange([{layer: canvas.id, id:"aniPattern_002_00"+v, transform:"translate(31,15),scale(4),rotate(180)"}]);  
		
		
	
		//////////////////////////////////
		
		el.writeCode (code_area);
		
		
}

svg_pattern (1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
}

);


