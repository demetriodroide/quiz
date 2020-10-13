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


// array pregunta y respuesta
/*
let mipregunta = [
	{
		pregunta: "En el mundo de Dragones y Mazmorras, ¿Quién es Elminster?",
		respuestas: {
			a: 'Un bardo',
			b: 'Un mercader',
            c: 'Un mago',
            d: "Un marinero"
		},
		respuestacorrecta: 'c'
	}
];*/

let a = document.querySelector("#submit");

function prevenir(event) {
    event.preventDefault();
}
a.addEventListener("click", prevenir );

// evita el refresco de submit
