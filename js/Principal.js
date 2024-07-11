/*Sea el nombre y el sexo de varias personas (F-M). 
Se necesita un programa que lea estos datos y reporte al final la cantidad de hombres y la cantidad de mujeres
 procesadas.
Se tienen las siguientes personas: Luis, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo;*/


import Cl_personas from "./Cl_personas.js";
import Cl_datos from "./Cl_datos.js";

let personas= new Cl_personas();

let dat = new Cl_datos('Luisa','F');
let dat2 = new Cl_datos('Ana','F');
let dat3 = new Cl_datos('Jose','M');
let dat4 = new Cl_datos('Carmen','F');
let dat5 = new Cl_datos('Rosa','F');
let dat6 = new Cl_datos('Jose','M');
let dat7 = new Cl_datos('Maria','F');
let dat8 = new Cl_datos('Luz','F');
let dat9 = new Cl_datos('Rafael','M');
let dat10 = new Cl_datos('Liz','F');
let dat11 = new Cl_datos('Marcos','M');
let dat12 = new Cl_datos('Leo','M');

personas.procesarDatos(dat);
personas.procesarDatos(dat2);
personas.procesarDatos(dat3);
personas.procesarDatos(dat4);
personas.procesarDatos(dat5);
personas.procesarDatos(dat6);
personas.procesarDatos(dat7);
personas.procesarDatos(dat8);
personas.procesarDatos(dat9);
personas.procesarDatos(dat10);
personas.procesarDatos(dat11);
personas.procesarDatos(dat12);

let salida = document.getElementById('resultado');
salida.innerHTML = `La cantidad de Hombres es: ${personas.contHombres} <br> La cantidad de Mujeres es: ${personas.contMujeres}`