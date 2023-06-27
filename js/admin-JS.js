const abrir = document.querySelector(".abrir")

const cerrar = document.querySelector('.cerrar')

const modal = document.querySelector('#modal')

const guardar = document.querySelector('.guardar')


abrir.addEventListener('click',() => {
    modal.showModal()
})

cerrar.addEventListener('click',()=>{
    modal.close()
})

guardar.addEventListener('click',()=>{
    modal.close()
})

/* Menu desplegable de Ventana Emergente */
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach ( dropdown =>{
    const select = dropdown.querySelector('.select')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelectorAll('.menu li')
    const selected = dropdown.querySelector('.selected')

    select.addEventListener('click', () =>{
        select.classList.toggle('select-clicked')
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu-open')
    })
    options.forEach(option=>{
        option.addEventListener('click', ()=>{
            selected.innerText= option.innerText

            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')

            options.forEach(option=>{
                option.classList.remove('activo')
            })
            option.classList.add('activo')
        })
    })
})






const formd = document.getElementById('form1')
formd.addEventListener('submit', function (event) {
    event.preventDefault()

    formd.reset()
})




function createTable(fordata){

   
    

    let tabla = document.getElementById('table1')
    let filanueva = tabla.insertRow(-1)

    let celdanew = filanueva.insertCell(0)
    
    

    celdanew = filanueva.insertCell(1)
    celdanew.textContent = document.createTextNode('hola').value

    celdanew = filanueva.insertCell(2)
    celdanew.textContent = document.querySelector('#i1').value

    celdanew = filanueva.insertCell(3)
    celdanew.textContent = document.querySelector('#i2').value

    celdanew = filanueva.insertCell(4)
    celdanew.textContent = document.querySelector('#i3').value

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
        buttonchange = document.querySelector('#form1').value
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