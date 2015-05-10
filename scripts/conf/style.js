// Style definitions for elements. 
// This file is a copy of def.js

// changing these values take effect globally!
var root_name = "embedded_svg";
// var svg_name = "my_medigeist_template_001";

var default_style = "fill:#cccccc;stroke:#999999;stroke-width:0.10px;";
// var default_style = "fill:url(#lgr_2);";



define({

// the parent element of the svg node
root: root_name, 

// the default element if no element type is defined
default: "element",

// default offset between elements in rows (see cnode and rnode)
offset: 3,	
	
// default value for text content
data: "x",	
	
// default digits of random id
idLength: 8,		
	

// svg root element	
svg: [
{
	
xmlns: "http://www.w3.org/2000/svg", // mandatory
xlinkNS: "http://www.w3.org/1999/xlink", // mandatory
id: "medigeist_svg",	
preserveAspectRatio: "xMidYMid meet",
// preserveAspectRatio: "none",
viewBox: "-1 -1 60 40",

// name: "my_medigeist_template",


// style: "background-image: url(background.svg)"
style: "background-color:#e8e8e8;"
}
],

// placeholder for group element
g: [{type:"g"}], 

// core svg elements
circle: [
	{r: 1, cx : 0, cy: 0, style: default_style}
],

rect: [
{x : 0, y: 0, width:1, height:1, rx:0.1, ry:0.1, style: "fill:#cccccc;stroke:#999999;stroke-width:0.01px;"}
],

line: [
{x1 : 0, y1: 0, x2: 1, y2:0, style: "stroke:#000000;stroke-width:0.10px;"}
],

polygon: [
{points: "0,0 1,1 2,0", style: default_style}
],


// Path commands
// The M indicates a moveto, the Ls indicate linetos, and the z indicates a closepath
// The "moveto" commands (M or m) establish a new current point. The effect is as if the "pen" were lifted and moved to a new location.
// The "closepath" (Z or z) ends the current subpath and causes an automatic straight line to be drawn from the current point to the initial point of the current subpath.
// The various "lineto" commands draw straight lines from the current point to a new point.



path: [
{d: "M28 2 L26 7 L32 7 L30 2 Z", style: default_style}
],

ellipse: [
{cx:0, cy:0, rx:3, ry:2, style:default_style}
],

polyline: [
{points: "45,5 45,3 50,3 50,5 48,5 48,4", style:default_style}
],

text: [
{x : 0, y: 0, style: "stroke:none; fill:#ff0000;font-size: 1pt;"},
{data: "Sample text"}
],

content: [
{data: "X"}
],

// color = stop-color, opacity = stop-opacity. '-' not allowed as character in variables
linearGradient: [
	{offset:"5%",  color: "#ff0000", opacity:"0.3"},
	{offset:"85%", color: "#000000", opacity:"0.5"}
],

// color = stop-color, opacity = stop-opacity. '-' not allowed as character in variables
radialGradient: [
{fx: "50%", fy:"50%", r:"100%", spreadMethod: "pad"},
{offset:"5%",  color: "#ff0000", opacity:"1"},
{offset:"85%", color: "#0000ff", opacity:"1"}
],

pattern: [
{x: 0.1, y:0, width:2, height:2, patternUnits: "userSpaceOnUse"},
{type: "circle", r: 0.8, cx : 1, cy: 1, style: default_style},
{type: "circle",r: 0.9, cx : 1, cy: 1,  style: default_style}
],

animate: [
{attributeName:"cx", fill:"freeze", repeatCount: 1}
],	
// additional values
// {attributeName:"cx", from:'0,0', to:'3,0',  dur:"1", values: "0;3", fill:"freeze", repeatCount: 1}	
// keyTimes: "0;.7;1",	values: "0;10;10", restart: "whenNotActive", additive: "sum", accumulate:"sum"
	
animateTransform: [
{attributeType: 'XML', attributeName: 'transform', type: 'translate', from:'0,0', to:'15,0', begin: 0, dur:5, repeatCount: 2}
],

animateColor: [
{ attributeName:"visibility", attributeType: 'CSS', from: "visible", to:"hidden", begin: 1, dur:5, repeatCount: 2}
],	

set: [
{ attributeType:"CSS", attributeName:"style", to: "visibility:hidden;", begin: 1, dur:3}
],

animateMotion: [
{ path: "M 0,0 A1,1 0 1,1 4,0", dur:2,}
],	
	
	
// composite elements

cnode: [
{transform:"translate(0,0)"},
{r: 1, cx : 0, cy: 0, style: default_style},	
{x : 0, y: 0.45, style: "stroke:none; fill:#ff0000;font-size: 1pt; text-anchor: middle;"},
{data: "0"}
],

rnode: [
{transform:"scale(2)"},
{x : 0, y: 0, width:1, height:3, rx:0.1, ry:0.1, style: "fill:#cc88ff;stroke:#999999;stroke-width:0.01px;"},	
{x : 1, y: 1.5, style: "stroke:none; fill:#0000ff;font-size: 1pt; text-anchor: middle;"},
{data: "0"}
],
	
/// custom styles
cnode_001: [
{transform:"translate(0,0)"},
{r: 1, cx : 0, cy: 0, style: "fill:#e8e8e8;stroke:#998866;stroke-width:0.05px;"},	
{x : 0, y: 0.45, style: "stroke:none; fill:#ff0000;font-size: 1pt; text-anchor: middle;"},
{data: "0"}
],


cnode_002: [
{transform:"translate(0,0)"},
{r: 1, cx : 0, cy: 0, style: "fill:#e8e8e8;stroke:#998866;stroke-width:0.05px;"},	
{x : 0, y: 0.45, style: "stroke:none; fill:#ff0000;font-size: 1pt; text-anchor: middle;"},
{data: "0"}
],

rnode_001: [
{transform:"scale(2)"},
{x : 0, y: 0, width:1.4, height:5, rx:0.1, ry:0.1, style: "fill:#ffcc88;stroke:#9999ff;stroke-width:0.02px;"},	
{x : 1.5, y: 1.5, style: "stroke:none; fill:#00ccff;font-size: 0.8pt; text-anchor: middle;"},
{data: "0"}
],


// Block definitions (type attribute required). Obsolete! See element definition instead

block: [
{type: "g", transform:"scale(1)"},
{type: "circle", x : 0, y: 0.45, style: "stroke:none; fill:#ff0000;font-size: 1pt; text-anchor: middle;"},
{type: "content", data: "0"},	
{type: "text", x : 1.5, y: 1.5, style: "stroke:none; fill:#00ccff;font-size: 0.8pt; text-anchor: middle;"}
],	

block_001: [
{type: "g", transform:"scale(1)"},
{type: "rect", x : 0, y: 0, width:1, height:3, rx:0.1, ry:0.1, style: "fill:#cc88ff;stroke:#999999;stroke-width:0.01px;"},
{type: "content", data: "just a test"},
{type: "text", x : 1.5, y: 1.5, style: "stroke:none; fill:#00ccff;font-size: 0.8pt; text-anchor: middle;"},

],	

block_002: [
{type: "g",  transform:"translate(10,10),scale(2)"},
{type: "circle", r: 1, cx : 0, cy: 0, style: "fill:#e8e8e8;stroke:#998866;stroke-width:0.05px;"},
{type: "content", data: "0"},	
{type: "text", x : 0, y: 0.45, style: "stroke:none; fill:#ff0000;font-size: 1pt; text-anchor: middle;"},
],	

// block elements (example)

element: [
[
   {typeOf: "circle", r: 0.8, cx : 0, cy: 0, style: "fill:none;stroke:#895577;stroke-width:0.025px;"}
],

[
   {typeOf: "circle", r: 1.0, cx : 0, cy: 0, style: "fill:none;stroke:#895577;stroke-width:0.05px;"}
],
[
   {typeOf: "text", x : 0, y: 0.45, style: "stroke:none; fill:#ff0000;font-size: 1pt; text-anchor: middle;"},
   {data: "0"}
]	
],

element_001_rg: [
[   
   {typeOf: "radialGradient", id: "element_001_rg", fx: "50%", fy:"50%", r:"100%", spreadMethod: "pad"},
   {offset:"5%",  color: "#ffffcc", opacity:"1"},
   {offset:"85%", color: "#999999", opacity:"1"}
	
]	
],

element_001: [
[
   {typeOf: "circle", r: 0.8, cx : 0, cy: 0, style: "fill:#00ccff;stroke:#895577;stroke-width:0.025px;"}
],

[
   {typeOf: "circle", r: 1.0, cx : 0, cy: 0, style: "fill:none;stroke:#895577;stroke-width:0.05px;"}
],
[
   {typeOf: "text", x : 0, y: 0.45, style: "stroke:none; fill:#ff0000;font-size: 1pt; text-anchor: middle;"},
   {data: "1"}
]	
],

element_002: [
[
{typeOf: "circle", r: 1, cx : 0, cy: 0, style: "fill:#cccccc;stroke:#999999;stroke-width:0.10px;"}
],
[
{typeOf: "animateTransform", attributeType: 'XML', attributeName: 'transform', type: 'translate', from:'5,0', to:'15,0', begin: 0, dur:5, repeatCount: 1}
]
],

element_003: [
[
   {typeOf: "circle", r: 1.2, cx : 0, cy: 0, style: "fill:#fe88ff;"}
],
[
   {typeOf: "circle", r: 1.0, cx : 0, cy: 0, style: "fill:#ffffcc;"}
],
[
   {typeOf: "text", x : 0, y: 0.45, style: "stroke:none; fill:#ff0000;font-size: 1pt; text-anchor: middle;"},
   {data: "1"}
]	
],


// M 1,1 v-1.50 a1.50,1.50 0 1,1 -1.50,1.50
// M5,5 C5,1 0,0 0,0 S0,0 
// M15,25 C5,25 0.5,20 0.5,15 C0.5,5 5,0.5 15,0.5 C20,0.5 25,5 25,15 C25,20 20,25 15,25 z
// M0,0 5,5
// M0,0 0,5 5,5 5,0

// arc top
// M 0,5 A5,5 0 1,1 10,5

// arc buttom
// M 0,5 A5,5 0 1,0 10,5

element_004: [
[
   {typeOf: "path", d: "M 0,1 A1,1 0 1,1 2,1", style: "fill:none;stroke:#000000;stroke-width:0.025px;"}
                                       
],
[
   {typeOf: "path", d: "M 0,1 A1,1 0 1,0 2,1", style: "fill:none;stroke:#0000ff;stroke-width:0.025px;"}
                                       
]
],

element_005: [
[
   {typeOf: "rect", x : 0, y: 0, width:1, height:1, rx:0.0, ry:0.0, style: "fill:none;stroke:#999999;stroke-width:0.01px;"}
],
[
   {typeOf: "path", d: "M 0,0 A1,1 0 1,1 2,1", style: "fill:none;stroke:#000000;stroke-width:0.01px;"}
// {typeOf: "path", d: "M 0,1 A1,1 0 1,1 2,1", style: "fill:none;stroke:#000000;stroke-width:0.01px;", transform: "translate(0.5,-0.5)"}                                       
]
],

element_006: [

[
   {typeOf: "path", d: "M 0,0 A1,1 0 1,1 4,0", style: "fill:none;stroke:#000000;stroke-width:0.01px;"}
                              
],

[
   {typeOf: "path", d: "M 0,0 A1,1 0 1,0 4,0", style: "fill:none;stroke:#000000;stroke-width:0.01px;"}
                              
]

],

element_007: [
[	
{ typeOf: "animateMotion", path: "M 0,0 A1,1 0 1,1 4,0", dur:2,}
]
],	

// circle as path
element_008: [
[
   {typeOf: "path", d: "M-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0", style: "fill:none;stroke:#0000ff;stroke-width:0.02px;"}
    
	                 // M-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0  
                     // M-1,0 a1,1 0 1,0 2,0 a1,1 0 1,0 -2,0                    
]
],

element_009: [

[
   {typeOf: "path", d: "M 0,0 A-1,-1 0 0,1 0,4", style: "fill:none;stroke:#000000;stroke-width:0.01px;"}
            
			// M 0,0 A-1,-1 0 0,1 0,4 (vertical right, from:top, to: buttom)
            
			
			// M 0,0 A-1,-1 0 1,0 0,4 (vertical left, from:top, to: buttom)
                              
]

],

animateExchange: [

[
	{d: "M 0,0 A1,1 0 1,1 4,0"}, // 0
	{d: "M 0,0 A-1,-1 0 1,0 0,4"},
    {block:"element_009", transform:"translate(0,0)"}, // 1. Arc, layer: canvas.id,  style["element_009"][0][0].d = {0};   
                              
],


[
	//{d: "M 0,0 A1,1 0 1,1 4,0"}, // 0
    //{block:"element_009", transform:"translate(0,0)"}, // 1. Arc, layer: canvas.id,  style["element_009"][0][0].d = {0};
    {transform:"translate(0,0), rotate(0)"}, // 2. group, layer: canvas.id,
    {block:"element_001", data: "1", transform:"rotate(0)"}, // 3. Node, Child of 2
    {dur:3, rotate:0}, // 4. Child of 3
    {values:"4,0;0,0", dur:1, repeatCount: 1}, // 5. Child of 3
    {attributeType:"CSS", attributeName:"visibility", from:"visible", to:"hidden",dur:3}, // 6. Child of 3    1
    {attributeType:"CSS", attributeName:"visibility", from:"hidden",  to:"visible",dur:3}	 // 7. Child of 3	
                              
],

[
	//{d: "M 0,0 A-1,-1 0 1,0 0,4"}, // 0
    //{block:"element_009", transform:"translate(0,0)"}, // 1. Arc, layer: canvas.id,  style["element_009"][0][0].d = {0};
    {transform:"translate(4,0), rotate(90)", style:"visibility:hidden"}, // 2. group, layer: canvas.id,
    {block:"element_001", data: "1", transform:"rotate(270)"}, // 3. Node, Child of 2
    {dur:3, rotate:0}, // 4. Child of 3
    {values:"0,0;4,0", dur:1, repeatCount: 1}, // 5. Child of 3
    {attributeType:"CSS", attributeName:"visibility", from:"hidden",  to:"visible",dur:3}, // 6. Child of 3    1 
    {attributeType:"CSS", attributeName:"visibility", from:"visible", to:"hidden",dur:3}	 // 7. Child of 3	
                              
]

],

animateExchange_001: [

[
	{d: "M 0,0 A1,1 0 1,1 4,0"}, // 0
	{d: "M 0,0 A-1,-1 0 1,0 0,4"},
    {block:"element_009", transform:"translate(0,0)"}, // 1. Arc, layer: canvas.id,  style["element_009"][0][0].d = {0};   
                              
],


[
	//{d: "M 0,0 A1,1 0 1,1 4,0"}, // 0
    //{block:"element_009", transform:"translate(0,0)"}, // 1. Arc, layer: canvas.id,  style["element_009"][0][0].d = {0};
    {transform:"translate(0,0), rotate(0)"}, // 2. group, layer: canvas.id,
    {block:"element_001", data: "1", transform:"rotate(0)"}, // 3. Node, Child of 2
    {dur:3, rotate:0}, // 4. Child of 3
    {values:"4,0;0,0", dur:1, repeatCount: 1}, // 5. Child of 3
    {attributeType:"CSS", attributeName:"visibility", from:"visible", to:"hidden",dur:3}, // 6. Child of 3    1
    {attributeType:"CSS", attributeName:"visibility", from:"hidden",  to:"visible",dur:3}	 // 7. Child of 3	
                              
],

[
	//{d: "M 0,0 A-1,-1 0 1,0 0,4"}, // 0
    //{block:"element_009", transform:"translate(0,0)"}, // 1. Arc, layer: canvas.id,  style["element_009"][0][0].d = {0};
    {transform:"translate(4,0), rotate(90)", style:"visibility:hidden"}, // 2. group, layer: canvas.id,
    {block:"element_001", data: "1", transform:"rotate(270)"}, // 3. Node, Child of 2
    {dur:3, rotate:0}, // 4. Child of 3
    {values:"0,0;4,0", dur:1, repeatCount: 1}, // 5. Child of 3
    {attributeType:"CSS", attributeName:"visibility", from:"hidden",  to:"visible",dur:3}, // 6. Child of 3    1 
    {attributeType:"CSS", attributeName:"visibility", from:"visible", to:"hidden",dur:3}	 // 7. Child of 3	
                              
]

],
button_001: [
[
   {typeOf: "circle", r: 0.8, cx : 0, cy: 0, style: "fill:#cccccc"}
],

[
   {typeOf: "text", x : 0, y: 0.2, style: "fill:#999999;font-size: 0.4pt; text-anchor: middle;"},
   {data: "1"}
]	
]


// EOF
});
