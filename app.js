// Inicializa ScrollReveal.js
ScrollReveal().reveal('.titulo-seccion', {
    origin: 'left', // Establece el origen de la animación
    distance: '200px', // Establece la distancia del desplazamiento
    duration: 2000, // Establece la duración de la animación en milisegundos
    easing: 'ease', // Establece la función de interpolación de la animación
    reset: true, // Restablece la animación en cada desplazamiento
    viewFactor: 0.3 // Define la proporción de elemento visible antes de activar la animación
});

function mostrar(elem){
    //oculto todos los detalles
    detalles = document.getElementsByClassName("detalle");
    for(i=0; i < detalles.length; i++){
        detalles[i].style.display = "none";
    }

    links = document.querySelectorAll(".habilidades .menu li");
    for(i=0; i < detalles.length; i++){
        links[i].classList = "";
    }

    //visualizo el que corresponde en base al id
    id_skill = "info" + elem.id;
    document.getElementById(id_skill).style.display = "block";
    document.getElementById(elem.id).classList = "selected";
}

const testimonios = [
    {
        foto:"cliente1.png",
        titulo:"Excelente trabajo!!",
        texto:"El tiempo de la entrega se cumplio, los parameros visuales y tecnicos cumplieron con lo esperado y la asesoria fue muy buena, se recomienda bastante.",
        nombre:"Natalia Ochoa.",
        puesto:"Fundadora Divinas uñas Spa",
    },
    {
        foto:"cliente2.png",
        titulo:"Cumpliendo siempre a tiempo.",
        texto:"Tomar el servicio de MacNiaco fue una gran idea de parte de mi equipo de trabajo, la verdad tener una persona con esos conocimientos dentro de la nomina es fundamental para un crecimiento potencial de mi negocio, muy agradecido",
        nombre:"Carlos Ochoa.",
        puesto:"Empresario, Dueño Parranda de la 70",
    },
    {
        foto:"cliente3.png",
        titulo:"Trabajos de excelente calidad",
        texto:"Sentia que tenia todo bajo control, pero en el momento que conoci a Jhojan me di cueta que habian muchas cosas que podian potenciar mi trabajo y darme a conocer mejor, le agradezco por su buen desarrollo web y espero podamos trabajar en futuros proyectos.",
        nombre:"Pedro Paredes.",
        puesto:"CEO, Tatuador",
    },
    {
        foto:"cliente4.png",
        titulo:"Calidad garantizada",
        texto:"En la universidad aprendi muchas cosas sobre ventas, pero la innovación me obligo a cambiar y sumergirme en un mundo nuevo que desconocia totalmente, gracias a jhojan por darme la asesoria para poder iniciar en el mundo digital y poder abrir mi primera tienda virtual.",
        nombre:"David zuñiga.",
        puesto:"Licenciado en mercadotecnia",
    }
]

//Variable que controla la ubicación del testimonio actual.
var pos = 0;
//Función para avaznar al siguiente testimonio
function siguiente(){
    pos++;
    document.getElementById("imgCliente").src = "img/" + testimonios[pos].foto;
    document.getElementById("tituloCliente").innerText =testimonios[pos].titulo;
    document.getElementById("txtCliente").innerText = testimonios[pos].texto;
    document.getElementById("nombreCliente").innerText = testimonios[pos].nombre;
    document.getElementById("puestoCliente").innerText = testimonios[pos].puesto;

    if(pos==3){
        pos= -1;
    }
}
//Función para cerrar el menu
function cerrar(){
    document.getElementsByClassName("nav-menu")[0].style.top ="-100%";
}
//Función para abrir el menu
function verMenu(){
    document.getElementsByClassName("nav-menu")[0].style.top ="0";
}






