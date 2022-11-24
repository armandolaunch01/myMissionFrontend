//Find HTML elements

var title = document.getElementById("title");
const paragraph = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");

//Change HTML values

title.innerHTML = "Changed TITLE";

document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + paragraph[0].innerHTML;

links[0].href = "google.com";

//Change styles

title.style.color = "red";

//Events

function changeText(obj) {
    obj.innerHTML = "Clicked text"
}

function mOver(obj) {
    console.log(obj.innerHTML = "Mouse over now");
}

function mOut(obj) {
    console.log(obj.innerHTML = "Mouse out");
}

function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5"
    console.log(obj.innerHTML = "Onclick me");
}

function mUp(obj) {
    obj.style.backgroundColor = "#d94a38"
    console.log(obj.innerHTML = "Thanks");
}

//addEventListener

const button = document.getElementById("button");
button.addEventListener("click", alerta);

function alerta() {
    alert("alerta");
}