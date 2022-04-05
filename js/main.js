// Slider Width
var Input = document.querySelector('#input1');
var etq = document.querySelector('.etiqueta');
var etiqueta = document.querySelector('.etiqueta2');

Input.style.setProperty("--value", (Input.value*3));
if (Input) {
	var w = parseInt(window.getComputedStyle(Input, null).getPropertyValue('width'));
	Input.addEventListener("input", function(evt) {
		Input.style.setProperty("--value", (Input.value*3));
		txtArea.style.borderWidth=Input.value+"px";
	},false);
	//para la etiqueta
	
	if (etq) {
		etq.innerHTML = Input.value; 
		etq.style.left = ((Input.value * 4) - 15) + 'px';
		Input.addEventListener('input', function() {
			etq.innerHTML = Input.value;
			etq.style.left = ((Input.value * 4) - 15) + 'px';
		}, false);
	}
}
// Slider Color
var valorColor = document.querySelector('#valorColor');
valorColor.style.setProperty("--value", (valorColor.value*100));
if(valorColor)
{
	var width = parseInt(window.getComputedStyle(valorColor, null).getPropertyValue('width'));
	valorColor.addEventListener("input", function(evt) {
		valorColor.style.setProperty("--value", (valorColor.value*100));
		txtArea.style.borderColor = "rgba(28, 110, 164, "+valorColor.value+")";
	},false);
	if(etiqueta){
		etiqueta.innerHTML = valorColor.value; 
		etiqueta.style.left = ((valorColor.value * 100) - 15) + 'px';
		valorColor.addEventListener('input', function() {
			etiqueta.innerHTML = valorColor.value;
			etiqueta.style.left = ((valorColor.value * 100) - 15) + 'px';
		}, false);
	}
}





// textArea inicial
let txtArea=document.getElementById('txtArea');
txtArea.innerHTML = "-webkit-border-radius: 0px;\n-moz-border-radius: 0px;\nborder-radius: 0px;";

// Radius textArea
let rangeSI=document.getElementById('rangeSI');
let rangeSD=document.getElementById('rangeSD');
let rangeII=document.getElementById('rangeII');
let rangeID=document.getElementById('rangeID');

let inputSI=document.getElementById('inputSI');
let inputSD=document.getElementById('inputSD');
let inputII=document.getElementById('inputII');
let inputID=document.getElementById('inputID');


if(rangeSI){
	rangeSI.addEventListener("input", function(evt) {
		document.getElementById("inputSI").value = rangeSI.value;
		txtArea.style.borderTopLeftRadius =rangeSI.value+"px ";
	},false);
}
if(rangeSD){
	rangeSD.addEventListener("input", function(evt) {
		document.getElementById("inputSD").value = rangeSD.value;
		txtArea.style.borderTopRightRadius =rangeSD.value+"px ";
	},false);
}
if(rangeII){
	rangeII.addEventListener("input", function(evt) {
		document.getElementById("inputII").value = rangeII.value;
		txtArea.style.borderBottomLeftRadius =rangeII.value+"px ";
	},false);
}
if(rangeID){
	rangeID.addEventListener("input", function(evt) {
		document.getElementById("inputID").value = rangeID.value;
		txtArea.style.borderBottomRightRadius =rangeID.value+"px ";
	},false);
}


function submitSI() {
    if(event.keyCode == 13) {
		rangeSI.value=inputSI.value;
		txtArea.style.borderTopLeftRadius =inputSI.value+"px ";
    }
}
function submitSD() {
    if(event.keyCode == 13) {
		rangeSD.value=inputSD.value;
		txtArea.style.borderTopRightRadius =inputSD.value+"px ";
    }
}
function submitII() {
    if(event.keyCode == 13) {
		rangeII.value=inputII.value;
		txtArea.style.borderBottomLeftRadius =inputII.value+"px ";
    }
}
function submitID() {
    if(event.keyCode == 13) {
		rangeID.value=inputID.value;
		txtArea.style.borderBottomRightRadius =inputID.value+"px ";
    }
}


// botones reset
var btnResetW=document.getElementById('btnResetW');
var btnResetC=document.getElementById('btnResetC');

btnResetW.onclick=function(){
	Input.value=1;
	Input.style.setProperty("--value", (Input.value*3));
		txtArea.style.borderWidth=Input.value+"px";
	if (etq) {
		etq.innerHTML = Input.value; 
		etq.style.left = ((Input.value * 4) - 15) + 'px';
		etq.innerHTML = Input.value;
		etq.style.left = ((Input.value * 4) - 15) + 'px';
	}
}
btnResetC.onclick=function(){
	valorColor.value=1;
	valorColor.style.setProperty("--value", (valorColor.value*100));
	txtArea.style.borderColor = "rgba(28, 110, 164, "+valorColor.value+")";
	if(etiqueta){
		etiqueta.innerHTML = valorColor.value; 
		etiqueta.style.left = ((valorColor.value * 100) - 15) + 'px';
		etiqueta.innerHTML = valorColor.value;
		etiqueta.style.left = ((valorColor.value * 100) - 15) + 'px';
	}
}

// Botones tipo borde
var btnSolid=document.getElementById('btnSolid');
var btnDotted=document.getElementById('btnDotted');
var btnDashed=document.getElementById('btnDashed');
var btnSolid=document.getElementById('btnSolid');
var btnSolid=document.getElementById('btnSolid');
var btnSolid=document.getElementById('btnSolid');
