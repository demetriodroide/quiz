// 1 label e input
let l = document.createElement("label");
l.setAttribute('for',"bard-field");

let i = document.createElement("input");
i.id = "bard-field";
i.type = "radio";
i.name = "elminster";
i.value = "bardo";

// 2 label e input
let k = document.createElement("label");
k.setAttribute('for',"merchant-field");

let u = document.createElement("input");
u.id = "merchant-field";
u.type = "radio";
u.name = "elminster";
u.value = "mercader";

// 3 label e input
let j = document.createElement("label");
j.setAttribute('for',"sorcerer-field");

let y = document.createElement("input");
y.id = "sorcerer-field";
y.type = "radio";
y.name = "elminster";
y.value = "mago";

// 4 label e input
let h = document.createElement("label");
h.setAttribute('for',"sailor-field");

let t = document.createElement("input");
t.id = "sailor-field";
t.type = "radio";
t.name = "elminster";
t.value = "marinero";

// fin respuestas

let f = document.createElement("form");
f.setAttribute('name',"dnd");

let b = document.createElement("button");
b.setAttribute("id","submit");
b.innerHTML = "enviar";

document.getElementsByClassName("caja2")[0].appendChild(l);
document.getElementsByClassName("caja2")[0].appendChild(i);

document.getElementsByClassName("caja3")[0].appendChild(k);
document.getElementsByClassName("caja3")[0].appendChild(u);

document.getElementsByClassName("caja4")[0].appendChild(j);
document.getElementsByClassName("caja4")[0].appendChild(y);

document.getElementsByClassName("caja5")[0].appendChild(h);
document.getElementsByClassName("caja5")[0].appendChild(t);

document.getElementsByClassName("caja6")[0].appendChild(b);

// array pregunta y respuesta

const mipregunta = [
	{
		pregunta: "En el mundo de Dragones y Mazmorras, ¿Quién es Elminster?",
		respuestas: [
			 "Un bardo",
			 "Un mercader",
             "Un mago",
             "Un marinero"
		],
		respuestacorrecta: 'c'
	},
];

///////////////////////////////// funcion pintar 

function pintar(preguntaPintar){
	let variablepregunta = document.createElement("h3");
	document.getElementsByClassName("caja1")[0].appendChild(variablepregunta);
	variablepregunta.innerText = preguntaPintar.pregunta;
}
pintar(mipregunta[0]);

////// respuesta 1

function pintar1(respuestaPintar){
	let variablerespuesta1 = document.createElement("h4");
	document.getElementsByClassName("caja2")[0].appendChild(variablerespuesta1);
	variablerespuesta1.innerText = respuestaPintar.respuestas[0];

}
pintar1(mipregunta[0]);

////// respuesta 2

function pintar2(respuestaPintar1){
	let variablerespuesta2 = document.createElement("h4");
	document.getElementsByClassName("caja3")[0].appendChild(variablerespuesta2);
	variablerespuesta2.innerText = respuestaPintar1.respuestas[1];
}
pintar2(mipregunta[0]);

////// respuesta 3

function pintar3(respuestaPintar2){
	let variablerespuesta3 = document.createElement("h4");
	document.getElementsByClassName("caja4")[0].appendChild(variablerespuesta3);
	variablerespuesta3.innerText = respuestaPintar2.respuestas[2];
}
pintar3(mipregunta[0]);

////// respuesta 4

function pintar4(respuestaPintar3){
	let variablerespuesta4 = document.createElement("h4");

	document.getElementsByClassName("caja5")[0].appendChild(variablerespuesta4);

	variablerespuesta4.innerText = respuestaPintar3.respuestas[3];
}
pintar4(mipregunta[0]);

////

let a = document.querySelector("#submit");

let otrarespuesta = document.querySelectorAll("input");



function prevenir(event) {
	
event.preventDefault();
	if ( y.checked ){
		alert("acierto")
	}
	else { 
		alert("error");
	}
}
a.addEventListener("click", prevenir );