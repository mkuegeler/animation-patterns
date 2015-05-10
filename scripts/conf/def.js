// default values
// changing these values take effect globally!
var root_name = "embedded_svg";
var svg_name = "my_medigeist_template";
var default_style = "fill:#cccccc;stroke:#999999;stroke-width:0.10px;";

define({

// the parent element of the svg node
root: root_name, 

// the default element if no element type is defined
// type: "text",

// svg root element	
svg: [
{
	
xmlns: "http://www.w3.org/2000/svg", // mandatory
xlinkNS: "http://www.w3.org/1999/xlink", // mandatory
id: "medigeist_svg",	
preserveAspectRatio: "xMidYMid meet",
// preserveAspectRatio: "none",
viewBox: "-1 -1 60 40",

name: svg_name,


// style: "background-image: url(background.svg)"
style: "background-color:#e8e8e8;"
}
],

// placeholder for group element
g: [{type:"g"}], 

	
// default element structure (example)

element: [
// 1. primary attributes of the element
{r: 2, cx : 5, cy: 5, style: "fill:#00ffff;stroke:#000000;stroke-width:0.10px;"},
// X. Optional additional attributes or sub elements (multiple elements allowed)
{type:"circle", r: 0.8, cx : 1, cy: 1, style: "fill:#ff0000;stroke:#000000;stroke-width:0.10px;"},
{type:"circle", r: 0.9, cx : 1, cy: 1, style: "fill:#00ffff;stroke:#000000;stroke-width:0.10px;"}
],

// core svg elements
circle: [
	{r: 1, cx : 0, cy: 0, style: default_style}
],

rect: [
{x : 0, y: 0, width:1, height:1, rx:0.1, ry:0.1, style: default_style}
],

line: [
{x1 : 0, y1: 0, x2: 1, y2:0, style: "stroke:#000000;stroke-width:0.10px;"}
],

polygon: [
{points: "0,0 1,1 2,0", style: default_style}
],

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
]


});
