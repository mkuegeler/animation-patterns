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
		
function svg_1 () {
		
        style.root = "embedded_svg_001";
		var code_area = "embedded_svg_001_code";
		
		// get instance of medigeist object
		var el = new medigeist(style);
		// initialize the svg root element		
		var svg = el.svg([{id:"svg_001", style:"background-color:#ffcc00"}]);
		
		var canvas =  el.g([{id:"canvas_001",layer: svg.id, transform:"translate(22,12),scale(3)"}]);
		
		//////////////////////////////////
		
		var var_1 =  el.g([{ layer: canvas.id, style:"visibility:visible" }]);
		var animation_var_1a = el.animate([{layer: var_1.id, id: "animation_var_1a", attributeType:"CSS", attributeName:"visibility", from:"visible", begin: "animation_2a.end-1", to:"hidden",dur:2, fill:"freeze"}]);
		var animation_var_1b = el.animate([{layer: var_1.id, id: "animation_var_1b", attributeType:"CSS", attributeName:"visibility", from:"hidden", begin: "animation_4a.end-1", to:"visible",dur:2, fill:"freeze"}]);

		var node_1 =  el.element([{layer: var_1.id, id:"node_1", block:"element_001", data: "1", transform:"translate(0,0),scale(1)"}]);
		var animation_1a = el.animateTransform([{layer: node_1.id, id: "animation_1a", values:"0,0;5,0", begin: "node_1.click", dur:2, fill:"freeze", repeatCount: 1}]);

		var node_2 =  el.element([{layer: var_1.id, id:"node_2", block:"element_001", data: "2", transform:"translate(5,0),scale(1)"}]);
		var animation_2a = el.animateTransform([{layer: node_2.id, id: "animation_2a", values:"5,0;0,0", begin: "animation_1a.end-2",  dur:2, fill:"freeze", repeatCount: 1}]);
	

		var var_2 =  el.g([{ layer: canvas.id, style:"visibility:hidden" }]);
		var animation_var_2a = el.animate([{layer: var_2.id, id: "animation_var_2a", attributeType:"CSS", attributeName:"visibility", from:"hidden", begin: "animation_2a.end-1", to:"visible",dur:2, fill:"freeze"}]);
		var animation_var_2b = el.animate([{layer: var_2.id, id: "animation_var_2b", attributeType:"CSS", attributeName:"visibility", from:"visible", begin: "animation_4a.end-1", to:"hidden",dur:2, fill:"freeze"}]);

		var node_3 =  el.element([{layer: var_2.id, id:"node_3", block:"element_001", data: "2", transform:"translate(0,0),scale(1)"}]);
		var animation_3a = el.animateTransform([{layer: node_3.id, id: "animation_3a", values:"0,0;5,0", begin: "animation_4a.end-2", dur:2, fill:"freeze", repeatCount: 1}]);

		var node_4 =  el.element([{layer: var_2.id, id:"node_4", block:"element_001", data: "1", transform:"translate(5,0),scale(1)"}]);
		var animation_4a = el.animateTransform([{layer: node_4.id, id: "animation_4a", values:"5,0;0,0", begin: "node_3.click",  dur:2, fill:"freeze", repeatCount: 1}]);
		
		//////////////////////////////////
		
		
		
	
		el.writeCode (code_area);
		
		
}

svg_1 ();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
function svg_2 () {
		
        style.root = "embedded_svg_002";
		var code_area = "embedded_svg_002_code";
		
		// get instance of medigeist object
		var el = new medigeist(style);
		// initialize the svg root element		
		var svg = el.svg([{id:"svg_002", style:"background-color:#fe8806"}]);
		
		var canvas =  el.g([{id:"canvas_002",layer: svg.id, transform:"translate(5,5),scale(2)"}]);
		
		//////////////////////////////////
		 
		style["element_004"][0][0].style = "fill:#ffcccc;";
		
		var circle_1 =  el.element([{layer: canvas.id, id:"c1", block:"element_004", transform:"translate(10,2),scale(2)"}]);
		
		style["element_004"][1][0].style = "fill:#88ccff;";
		
		var circle_2 =  el.element([{layer: canvas.id, id:"c2", block:"element_004", transform:"translate(10,10),scale(2)"}]);
		
		//////////////////////////////////
		
		el.writeCode (code_area);
		
		
}

svg_2 ();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
function svg_3 () {
		
        style.root = "embedded_svg_003";
		var code_area = "embedded_svg_003_code";
		
		// get instance of medigeist object
		var el = new medigeist(style);
		// initialize the svg root element		
		var svg = el.svg([{id:"svg_003", style:"background-color:#ccffcc"}]);
		
		var canvas =  el.g([{id:"canvas_003",layer: svg.id, transform:"translate(20,20),scale(4)"}]);
		
		//////////////////////////////////
		
		// style["animateMotion"][0].transform = "translate(0.5,-0.5),scale(2.5)";
		
		// console.log(style["animateMotion"][0]);
		
		// console.log(style["element_009"][0][0].d);
		
		
		
		// var path_003_1 = "M 0,0 A-1,1 0 0,1 0,4"; // buttom + 90 + 270
		
		// var path_003_1 = "M 0,0 A-1,-1 0 1,0 0,4";
		
		var path_003_1 = "M 0,0 A1,1 0 1,1 4,0"; // top + 0 + 0
		
		style["element_009"][0][0].d = path_003_1; 
		
		var arcc_003_1 =  el.element([{layer: canvas.id, id:"arcc_003_1", block:"element_009", transform:"translate(0,0)"}]);
		
		// var arcc_003_2 =  el.element([{layer: canvas.id, id:"arcc_003_2", block:"element_009", transform:"translate(0,0)"}]);
		
		
		var grou_003_1 =  el.g([{ layer: canvas.id, transform:"translate(0,0), rotate(0)"}]); // 90
		
		var node_003_1 =  el.element([{layer: grou_003_1.id, id:"node_003_1", block:"element_001", data: "1", transform:"rotate(0)"}]); // 270
		
		var anim_003_1b =  el.animateMotion([{layer: node_003_1.id, id: "animateMotion_003_1", path: path_003_1, begin: "node_003_1.click", dur:3,  rotate:0}]);
		
		var anim_003_1bb =  el.animateTransform([{layer: node_003_1.id, id: "anim_003_1b", values:"4,0;0,0", begin: "animateMotion_003_1.end", dur:1, fill:"freeze", repeatCount: 1}]);
		
		var anim_003_1a = el.animate([{layer: grou_003_1.id, id: "anim_003_1a", attributeType:"CSS", attributeName:"visibility", from:"visible", begin: "animateMotion_003_1.end-1.5", to:"hidden",dur:3}]);
		
		var anim_003_1c = el.animate([{layer: grou_003_1.id, id: "anim_003_1c", attributeType:"CSS", attributeName:"visibility", from:"hidden", begin: "animateMotion_003_2.end-1.5", to:"visible",dur:3}]);
		
				
		var path_003_2 = "M 0,0 A-1,-1 0 1,0 0,4"; 
		
		style["element_009"][0][0].d = path_003_2; 
		
		var grou_003_2 =  el.g([{ layer: canvas.id, transform:"translate(4,0), rotate(90)", style:"visibility:hidden" }]); // 90
				
		var node_003_2 =  el.element([{layer: grou_003_2.id, id:"node_003_2", block:"element_001", data: "1", transform:"rotate(270)"}]); // 270
		
		var anim_003_2b =  el.animateMotion([{layer: node_003_2.id, id: "animateMotion_003_2", path: path_003_2,  begin: "node_003_2.click", dur:3, rotate:0}]);
		
		var anim_003_2bb =  el.animateTransform([{layer: node_003_2.id, id: "anim_003_2b", values:"0,0;4,0", begin: "animateMotion_003_2.end", dur:1,  repeatCount: 1}]);
		
		var anim_003_2a = el.animate([{layer: grou_003_2.id, id: "anim_003_2a", attributeType:"CSS", attributeName:"visibility", from:"hidden", begin: "animateMotion_003_1.end-1.5", to:"visible",dur:3}]);
		
		var anim_003_2c = el.animate([{layer: grou_003_2.id, id: "anim_003_2c", attributeType:"CSS", attributeName:"visibility", from:"visible", begin: "animateMotion_003_2.end-1.5", to:"hidden",dur:3}]);
		
		
		
		
		// var node_003_1a =  el.element([{layer: grou_003_1.id, id:"node_003_1a", block:"element_001", data: "1", style:"visibility:visible", cursor:"pointer"}]);
		
		// var path_003_1 =  "M 0,0 A-1,1 0 0,1 0,4"; // buttom right
		                // M 0,0 A-1,-1 0 1,0 0,4
		
		
		// var path_003_1 = style["element_006"][0][0].d;
		
		// var path_003_1 =  "M 0,0 A1,1 0 1,1 4,0 M 0,0 A1,1 0 1,0 4,0";
		
		// var path_003_1 =  "M 0,0 A1,1 0 1,1 4,0"; // top left
		
		// var path_003_1 =  "M 0,0 A1,1 0 1,0 4,0"; // buttom right
		
		// reverse path:
		
		// Play the commands backwards. In most cases, this is trivial. A line that goes (+x, +y) needs to be retraced (-x, -y). 
		// A curve with endpoints (x1, y1) and control points (x2, y2) 
		// needs to be retraced as a curve with endpoints (y1, x1) and control points (y2, x2). Every command has its opposite.
		
		
		
			 
		
		//var grou_003_2 =  el.g([{ layer: canvas.id, transform:"translate(0,0)"}]);
		
		//var node_003_2 =  el.element([{layer: grou_003_1.id, id:"node_003_2", block:"element_001", data: "2"}]);
		
		// var path_003_2 =  "M 0,0 A1,1 0 1,1 4,0"; // top left
		
		
		
		// var anim_003_2 =  el.animateMotion([{layer: node_003_1.id, id: "animateMotion_003_2", path: path_003_2,  begin: "animateMotion_003_1.end", dur:3, fill:"freeze", repeatCount: 1 }]);
		
		//var circle_003_1 =  el.element([{layer: canvas.id, id:"c003_1", block:"element_008", transform:"translate(10,0)"}]);
		
		
		//var grou_003_2 =  el.g([{ layer: canvas.id, transform:"translate(5,0)"}]);
		//var rect_003_2 =  el.element([{layer: grou_003_2.id, id:"rect_003_2", block:"element_005", transform:"translate(-1.25,-1.25),scale(1)"}]);
		//var node_003_2 =  el.element([{layer: grou_003_2.id, id:"node_003_2", block:"element_001", data: "2", transform:"translate(0,0),scale(1)"}]);
		
		
		//////////////////////////////////
		
		el.writeCode (code_area);
		
		
}

svg_3 ();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
function svg_4 () {
		
        style.root = "embedded_svg_004";
		var code_area = "embedded_svg_004_code";
		
		// get instance of medigeist object
		var el = new medigeist(style);
		// initialize the svg root element		
		var svg = el.svg([{id:"svg_004", style:"background-color:#888800"}]);
		
		var canvas =  el.g([{id:"canvas_004",layer: svg.id, transform:"translate(5,5),scale(1)"}]);
		
		//////////////////////////////////
		
		var aniPattern_001 =  el.animateExchange([{layer: canvas.id, id:"aniPattern_001_004", transform:"translate(10,15),scale(3)"}]); 
		
		var aniPattern_002 =  el.animateExchange([{layer: canvas.id, id:"aniPattern_002_004", transform:"translate(28,15),scale(3)"}]); 
	
		//////////////////////////////////
		
		el.writeCode (code_area);
		
		
}

svg_4 ();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
function svg_5 () {
		
        style.root = "embedded_svg_005";
		var code_area = "embedded_svg_005_code";
		
		// get instance of medigeist object
		var el = new medigeist(style);
		// initialize the svg root element		
		var svg = el.svg([{id:"svg_005", style:"background-color:#cccc86"}]);
		
		var canvas =  el.g([{id:"canvas_005",layer: svg.id, transform:"translate(5,5),scale(1)"}]);
		
		//////////////////////////////////
				
		
		style["element_001"][0][0].style = "fill:#ff4400;stroke:#ffcccc;stroke-width:0.1px;";
		
		style["element_001"][2][0].style = "stroke:none; fill:#cc00ff;font-size: 1pt; text-anchor: middle;";
		
		style["animateExchange"] = style["animateExchange_001"];
		
		var aniPattern_001 =  el.animateExchange([{layer: canvas.id, id:"aniPattern_001_005", transform:"translate(15,15),scale(4)"}]); 
		
		// var aniPattern_002 =  el.animateExchange([{layer: canvas.id, id:"aniPattern_002_005", transform:"translate(28,15),scale(3)"}]); 
	
		//////////////////////////////////
		
		el.writeCode (code_area);
		
		
}

svg_5 ();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
}

);


