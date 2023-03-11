/*

PHUNG PHAN
CSC 196W - SPRING 23

*/

//Making font bigger 24pt
function makeBigger() {
    document.getElementById("id").style.fontSize = "24pt";
}

//Making font bold in style
function makeBold() {
    var str = document.getElementById("id");
    str.style.fontWeight = "bold";
    str.style.color = "blue";
    str.style.textDecoration = "underline";
}

//Making font into unBold
function makeBoring() {
    var str = document.getElementById("id");
    str.style.fontSize = "initial";
    str.style.fontWeight = "normal";
    str.style.color = "black";
    str.style.textDecoration = "none";
}

//Making font into uppercase and then add -Moo as suffix
function makeMoo() {
    var suffix = "-Moo"
    
    str = document.getElementById("id");
    str.style.textTransform = "uppercase";
    str.value = str.value.split(".").join("") + suffix;
}