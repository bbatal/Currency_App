function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var json_obj = JSON.parse(Get('https://api.exchangeratesapi.io/latest'));
console.log(JSON.stringify(json_obj.rates));



function function1() {
    for (var key in json_obj.rates) {
      
    var ul = document.getElementById("List");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(key, json_obj.rates));
    li.appendChild(document.createTextNode(" = "));
    li.appendChild(document.createTextNode(json_obj.rates[key]));
    ul.appendChild(li);
  }}

function myfunction() {
  document.getElementById("myList").innerHTML =  "";
  for (var key in json_obj.rates) {

  var x = document.getElementById("myNum").value;
  x *= json_obj.rates[key];
  var ull = document.getElementById("myList");
  var lii = document.createElement("Li");
  lii.appendChild(document.createTextNode("CAD = "));
  lii.appendChild(document.createTextNode(x));
  ull.appendChild(lii);
}};

function1();


