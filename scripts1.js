/*
//create a form
let f = document.createElement("form");
f.setAttribute('name',"dnd");

let field = document.createElement("fieldset");
*/
// pregunta

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
/*
document.getElementsByClassName("quizclass")[0].appendChild(f);
f.appendChild(field);
*/
document.getElementsByClassName("caja2")[0].appendChild(l);
document.getElementsByClassName("caja2")[0].appendChild(i);
//field.appendChild(l);
//field.appendChild(i);
document.getElementsByClassName("caja3")[0].appendChild(k);
document.getElementsByClassName("caja3")[0].appendChild(u);

document.getElementsByClassName("caja4")[0].appendChild(j);
document.getElementsByClassName("caja4")[0].appendChild(y);

document.getElementsByClassName("caja5")[0].appendChild(h);
document.getElementsByClassName("caja5")[0].appendChild(t);

document.getElementsByClassName("caja6")[0].appendChild(b);

////////////
/*
const questions = [
    {
		pregunta: "En el mundo de Dragones y Mazmorras, ¿Quién es Elminster?",
      image: 'img/question1.jpg',
      answers: [
        'Jack Napier',
        'Joe Wayne',
        'Arthur Fleck',
        'No se sabe realmente'
      ],
      correct: 3
	}
]
*/
// array pregunta y respuesta

const mipregunta = [
	{
		pregunta: "En el mundo de Dragones y Mazmorras, ¿Quién es Elminster?",
		respuestas: {
			 a: "Un bardo",
			 b: "Un mercader",
             c: "Un mago",
             d: "Un marinero"
		},
		respuestacorrecta: 'c'
	},
];

/*

var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];

*/


///////////////////////////////// funcion pintar 

function pintar(preguntaPintar){
	let variablepregunta = document.createElement("h3");
	document.getElementsByClassName("caja1")[0].appendChild(variablepregunta);
	variablepregunta.innerText = preguntaPintar.pregunta;
}
pintar(mipregunta[0]);

/*

function pintar(preguntaPintar){
	document.getElementsByClassName("caja1").innerText = preguntaPintar.pregunta;
	
}
pintar(mipregunta[0]);

*/

////// respuesta 1

function pintar1(respuestaPintar){
	let variablerespuesta1 = document.createElement("h4");
	document.getElementsByClassName("caja2")[0].appendChild(variablerespuesta1);
	variablerespuesta1.innerText = respuestaPintar.respuestas;

}
pintar1(mipregunta[0]);

/*

////// respuesta 2

function pintar2(respuestaPintar1){
	let variablerespuesta2 = document.createElement("h6");
	document.getElementsByClassName("caja3")[0].appendChild(variablerespuesta2);
	variablerespuesta2.innerText = respuestaPintar1.respuestas;
}
pintar2(mipregunta[1]);

////// respuesta 3

function pintar3(respuestaPintar2){
	let variablerespuesta3 = document.createElement("h6");
	document.getElementsByClassName("caja4")[0].appendChild(variablerespuesta3);
	variablerespuesta3.innerText = respuestaPintar2.respuestas;
}
pintar3(mipregunta[2]);

////// respuesta 4

function pintar4(respuestaPintar3){
	let variablerespuesta4 = document.createElement("h6");
	document.getElementsByClassName("caja5")[0].appendChild(variablerespuesta4);
	variablerespuesta4.innerText = respuestaPintar3.respuestas;
}
pintar4(mipregunta[3]);

*/








/*
function pintar(preguntaPintar){
	let variablepregunta = document.getElementsByClassName("caja1");
	variablepregunta.innerText = preguntaPintar.pregunta;
	
}
pintar(mipregunta[0]);
*/

/*
function pintar(preguntaPintar){
	document.getElementsByClassName("caja1").innerText = preguntaPintar.pregunta;
}
pintar(mipregunta[0]);
*/







let a = document.querySelector("#submit");

function prevenir(event) {
    event.preventDefault();
}
a.addEventListener("click", prevenir );

// evita el refresco de submit
