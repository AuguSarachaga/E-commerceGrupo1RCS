const abrir = document.querySelector(".abrir")

/* const cerrar = document.querySelector('.cerrar') */

const modal = document.querySelector('#modal')



abrir.addEventListener('click',() => {
    modal.showModal()
})

/* cerrar.addEventListener('click',()=>{
    modal.close()
}) */



/* const formd = document.getElementById('form1')
formd.addEventListener('submit', function (event) {
    event.preventDefault()

    formd.reset()
}) */
 /* funcion nueva */

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	prenda: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	talle: /^[a-zA-Z0-9\_\-]{1,5}$/, // Letras, numeros, guion y guion_bajo
    color:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    descripcion:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    precio:/^\d{1,14}$/ // 7 a 14 numeros.
}


const campos = {
	prenda: false,
	talle: false,
    color: false,
	descripcion: false,
    precio: false,
    onclick:false
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        case 'prenda':
           validarCampo( expresiones.prenda, e.target, 'prenda')
        break;
        case 'talle':
            validarCampo(expresiones.talle, e.target, 'talle')
        break;
        case 'color':
            validarCampo(expresiones.color, e.target, 'color')
        break;
        case 'descripcion':
            validarCampo(expresiones.descripcion, e.target, 'descripcion')
        break;
        case 'precio':
            validarCampo(expresiones.precio, e.target, 'precio')
        break;

    }
}

const validarCampo = ( expresion, input, campo)=>{
    if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.prenda && campos.talle && campos.color && campos.descripcion && campos.precio){
		formulario.reset()

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
		}, 5000)

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		})
        onclick(true)
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
        onclick(false)
	}
})




/* creacion de tabla */
function createTable(){


    let tabla = document.getElementById('table1')
    let filanueva = tabla.insertRow(-1)

    let celdanew = filanueva.insertCell(0)
    celdanew.textContent = document.querySelector('#prenda')

    celdanew = filanueva.insertCell(1)
    celdanew.textContent = document.querySelector('#talle')

    celdanew = filanueva.insertCell(2)
    celdanew.textContent = document.querySelector('#color')

    celdanew = filanueva.insertCell(3)
    celdanew.textContent = document.querySelector('#descripcion')

    celdanew = filanueva.insertCell(4)
    celdanew.textContent = document.querySelector('#precio')

    let deletecell = filanueva.insertCell(5)
    let deletebutton = document.createElement('button')
    deletebutton.textContent = 'Eliminar'

    deletecell.appendChild(deletebutton)

    deletebutton.addEventListener('click', (event) =>{
        event.target.parentNode.parentNode.remove()
    })

    let changebtn = filanueva.insertCell(5)
    let buttonchange= document.createElement('button')
    buttonchange.textContent='Modificar'
    changebtn.appendChild(buttonchange)
    
    
 
    buttonchange.addEventListener('click', (event) =>{
        buttonchange = document.getElementById('table1').row
        modal.showModal()

    })

}








  /*  let inp = filanueva.insertCell(5)
    let inpt= document.createElement('input')
    let chek = document.createAttribute('type')
    chek.value = "checkbox"
    inpt.setAttributeNode(chek)

    inp.appendChild(inpt) */

/* let button = document.querySelector('.eliminar')
let elementos = this.inpt
let new1 = []
const t1 = document.querySelector('#table1')
 

button.addEventListener('click', (event) =>{
Array.from(t1.rows).forEach(() => {
    let t2 = document.querySelectorAll('tbody tr td input:checked')
    if(t2){
        console.log(2)
        t2 =''
    }
}); */
    /* (this.t2).event.remove() */
/* }) */




    





/* Local Storage */


/* let  li = document.querySelector('ul#ulm1 li[class="activo"]')
    
    console.log(li) */