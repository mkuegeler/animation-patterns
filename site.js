var source = document.getElementById("myTemplate").innerHTML;
var template = Handlebars.compile(source);
var data = {
    names: [
    { "name": "mmm" },
    { "name": "bar" },
    { "name": "baz" }
    ]
};
document.getElementById("placeholder").innerHTML = template(data);