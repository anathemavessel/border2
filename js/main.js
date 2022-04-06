// Slider Width
var Input = document.querySelector('#input1');
var etq = document.querySelector('.etiqueta');
var etiqueta = document.querySelector('.etiqueta2');
var allRadius=document.getElementById('allRadius');
var inputCP=document.getElementById('inputCP');
var estiloAlmacenado="solid";



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
		txtArea.style.borderColor = "rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
		// "rgba"+(inputColor.value).convertToRGB()+", "+valorColor.value+
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
		allRadius=document.getElementById('allRadius');
		if(allRadius.checked==true)
		{
			document.getElementById("inputSI").value = rangeSI.value;
			txtArea.style.borderRadius=rangeSI.value+"px";
		}else
		{
			document.getElementById("inputSI").value = rangeSI.value;
			txtArea.style.borderTopLeftRadius =rangeSI.value+"px ";
			txtArea.style.borderTopRightRadius ="0px ";
			txtArea.style.borderBottomLeftRadius ="0px ";
			txtArea.style.borderBottomRightRadius ="0px ";
		}
		
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
	txtArea.style.borderColor = "rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
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
var btnDouble=document.getElementById('btnDouble');
var btnGroove=document.getElementById('btnGroove');
var btnRidge=document.getElementById('btnRidge');
var btnInset=document.getElementById('btnInset');
var btnOutset=document.getElementById('btnOutset');
var btnHidden=document.getElementById('btnHidden');
var btnNone=document.getElementById('btnNone');

btnSolid.onclick=function(){
	txtArea.style.border=input1.value+"px solid "+inputCP.value;
	valorColor.value=1;
	valorColor.style.setProperty("--value", (valorColor.value*100));
	etiqueta.innerHTML = valorColor.value; 
	etiqueta.style.left = ((valorColor.value * 100) - 15) + 'px';
	etiqueta.innerHTML = valorColor.value;
	etiqueta.style.left = ((valorColor.value * 100) - 15) + 'px';
	estiloAlmacenado="solid";
}
btnDotted.onclick=function(){
	estiloAlmacenado="dotted";
	txtArea.style.border=input1.value+"px dotted rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
}
btnDashed.onclick=function(){
	estiloAlmacenado="dashed";
	txtArea.style.border=input1.value+"px dashed rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
}
btnDouble.onclick=function(){
	estiloAlmacenado="double";
	txtArea.style.border=input1.value+"px double rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
}
btnGroove.onclick=function(){
	estiloAlmacenado="groove";
	txtArea.style.border=input1.value+"px groove rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
}
btnRidge.onclick=function(){
	estiloAlmacenado="ridge";
	txtArea.style.border=input1.value+"px ridge rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
}
btnInset.onclick=function(){
	estiloAlmacenado="inset";
	txtArea.style.border=input1.value+"px inset rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
}
btnOutset.onclick=function(){
	estiloAlmacenado="outset";
	txtArea.style.border=input1.value+"px outset rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
}
btnHidden.onclick=function(){
	estiloAlmacenado="hidden";
	txtArea.style.border=input1.value+"px hidden rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
}
btnNone.onclick=function(){
	estiloAlmacenado="none";
	txtArea.style.border="none";
}


// COLOR
String.prototype.colorRGB = function(){
	var hex_code = inputCP.value.split("");
	var red = parseInt(hex_code[1]+hex_code[2],16);
	var green = parseInt(hex_code[3]+hex_code[4],16);
	var blue = parseInt(hex_code[5]+hex_code[6],16);
	var rgb = red+","+green+","+blue;
	return rgb;
}


inputCP.onchange = function(){
	txtArea.style.border=input1.value+"px "+estiloAlmacenado+" rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";;
}

//Botones Position
var btnAll=document.getElementById('btnAll');
var btnTop=document.getElementById('btnTop');
var btnRight=document.getElementById('btnRight');
var btnBotton=document.getElementById('btnBotton');
var btnLeft=document.getElementById('btnLeft');

btnAll.onclick=function(){
	txtArea.style.border=input1.value+"px "+estiloAlmacenado+" rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
}
btnTop.onclick=function(){
	txtArea.style.borderTop=input1.value+"px "+estiloAlmacenado+" rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
	txtArea.style.borderBottom="none";
	txtArea.style.borderLeft="none";
	txtArea.style.borderRight="none";
}
btnRight.onclick=function(){
	txtArea.style.borderTop="none";
	txtArea.style.borderBottom="none";
	txtArea.style.borderLeft="none";
	txtArea.style.borderRight=input1.value+"px "+estiloAlmacenado+" rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
}
btnBotton.onclick=function(){
	txtArea.style.borderTop="none";
	txtArea.style.borderBottom=input1.value+"px "+estiloAlmacenado+" rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
	txtArea.style.borderLeft="none";
	txtArea.style.borderRight="none";
}
btnLeft.onclick=function(){
	txtArea.style.borderTop="none";
	txtArea.style.borderBottom="none";
	txtArea.style.borderLeft=input1.value+"px "+estiloAlmacenado+" rgba("+(inputCP.value).colorRGB()+", "+valorColor.value+")";
	txtArea.style.borderRight="none";
}
