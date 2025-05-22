//get data from the url
//format: www.example.com/asdf?content=page_title
//where content = the name of a .html file without the ".html"
var url_string = window.location; 
var url = new URL(url_string);
var content = url.searchParams.get("c");

if(content!=null){
  var newURL = content + ".html" //add ".html" back to the end
  newURL = "/pages/" + newURL;
}else{
  newURL = "/pages/home.html"
}

var contentarea = document.getElementById("contentarea");
contentarea.setAttribute('data', newURL);

//var container = document.getElementById("content");
//container.innerHTML = container.innerHTML; //force redraw