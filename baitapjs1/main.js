// Bài 1
var text = document.getElementById('text');
var txtCyber = document.getElementById('txtCyber');
document.getElementById('btnDisplay').onclick = function () {
    text.style.display = 'none';
    txtCyber.style.opacity = '0.5';
    txtCyber.style.fontSize = '30px';
    txtCyber.style.border = '1px solid black';
    txtCyber.style.backgroundColor = 'pink';
}
// console.log(text);

//Bài 2
var imgSRC = document.getElementById('imgSRC');
document.getElementById('btnOn').onclick = function () {
    imgSRC.src = "./img/pic_bulbon.gif";
}
document.getElementById('btnOff').onclick = function () {
    imgSRC.src = "./img/pic_bulboff.gif";
}
// console.log(imgSRC);