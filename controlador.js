//MODELO::::::::::::::::::::::::::::::::::::::::::

//nave padre
class VehiculosEspaciales{ 
    #velocidadInicial = 0
    constructor(nombre, empuje, destino, pais){
        this.nombre = nombre
        this.empuje = empuje
        this.destino = destino
        this.pais = pais
    }
    velocidad(){
        return `la velocidad de la nave es:  ${this.empuje * this.#velocidadInicial } `
    }
    viaje(){
        return `Actualmente esta viajando la nave ${this.nombre}`
    }
}

//nave # 1
class NaveUno extends VehiculosEspaciales{
    //sobre escritura 
    constructor(nombre,empuje, destino, pais, combustible){
        super(nombre, empuje, destino, pais)
        this.combustible = combustible
        
    }
    //sobrecarga del metodo
    crear(nave){
        if(this.combustible != 0){
            let parametros = {nombre : this.nombre,
                              empuje : this.empuje,
                              destino : this.destino,
                              pais : this.pais,
                              datoNuevo : this.combustible,
                              tipo: nave
                            }
                            
            fetch('modelo/insertar.php',{
                    method : 'post',
                    body: JSON.stringify(parametros),
                    headers : {
                        'Accept': 'application/json',
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => res.json())
                .then(dato=>{
                    
                })
            return `se ha creado la nave ${this.nombre} `
            
         }else{
            return `imposible crear la nave ${this.nombre} sin combustible `
         }
       
    }
}

//nave # 2
class NaveDos extends VehiculosEspaciales{
    //sobre escritura 
    constructor(nombre,empuje, destino, pais, altura){
        super(nombre, empuje, destino, pais)
        this.altura = altura
        
    }
    //sobrecarga del metodo
    crear(nave){
        if(this.altura != 0){
            let parametros = {nombre : this.nombre,
                              empuje : this.empuje,
                              destino : this.destino,
                              pais : this.pais,
                              datoNuevo : this.altura,
                              tipo: nave
                            }
                            
            fetch('modelo/insertar.php',{
                    method : 'post',
                    body: JSON.stringify(parametros),
                    headers : {
                        'Accept': 'application/json',
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => res.json())
                .then(dato=>{
                    
                })
            return `se ha creado la nave ${this.nombre}`
            
         }else{
            return `imposible crear la nave ${this.nombre} sin altura `
         }
       
    }
}

//nave # 3
class NaveTres extends VehiculosEspaciales{
    //sobre escritura 
    constructor(nombre,empuje, destino, pais, peso){
        super(nombre, empuje, destino, pais)
        this.peso = peso
        
    }
    //sobrecarga del metodo
    crear(nave){
        if(this.peso != 0){
            let parametros = {nombre : this.nombre,
                              empuje : this.empuje,
                              destino : this.destino,
                              pais : this.pais,
                              datoNuevo : this.peso,
                              tipo: nave
                            }
                            
            fetch('modelo/insertar.php',{
                    method : 'post',
                    body: JSON.stringify(parametros),
                    headers : {
                        'Accept': 'application/json',
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => res.json())
                .then(dato=>{
                    
                })
            return `se ha creado la nave ${this.nombre}  `
            
         }else{
            return `imposible crear la nave ${this.nombre} sin peso `
         }
       
    }
}

//nave # 4
class NaveCuatro extends VehiculosEspaciales{
    //sobre escritura 
    constructor(nombre,empuje, destino, pais, tipo){
        super(nombre, empuje, destino, pais)
        this.tipo = tipo
        
    }
    //sobrecarga del metodo
    crear(nave){
        if(this.tipo != 0){
            let parametros = {nombre : this.nombre,
                              empuje : this.empuje,
                              destino : this.destino,
                              pais : this.pais,
                              datoNuevo : this.tipo,
                              tipo: nave
                            }
                            
            fetch('modelo/insertar.php',{
                    method : 'post',
                    body: JSON.stringify(parametros),
                    headers : {
                        'Accept': 'application/json',
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => res.json())
                .then(dato=>{
                    
                })
            return `se ha creado la nave ${this.nombre}  `
            
         }else{
            return `imposible crear la nave ${this.nombre} sin tipo `
         }
       
    }
}


// Clase mostrar naves y sus respectivos metodos de JSON
class mostrarNavesModelo {
    constructor(url){
        this.url = url
    }
    Lanzaderas(){

        return fetch(this.url)
        .then(res => res.json())
        .then(dato =>{
            const barra2 = document.querySelector('.barra2-der')

            dato.lanzadera.forEach(element => {   
                barra2.innerHTML += `
                        <div class="navesJSON">
                            <div class="navesJSON-head">
                                <img src="${element.img}" alt="">
                            </div>
                            <div class="navesJSON-body">
                                <div>${element.nombre}</div>
                                <div>${element.destino}</div>
                                <div>${element.id}</div>
                            </div>
                        </div>
                    `   
            })
            
        })
    }



    NoTripuladas(){

        return fetch(this.url)
        .then(res => res.json())
        .then(dato =>{
            const barra2 = document.querySelector('.barra2-der')
            
            dato.notripuladas.forEach(element => {
                barra2.innerHTML += `
                        <div class="navesJSON">
                            <div class="navesJSON-head">
                                <img src="${element.img}" alt="">
                            </div>
                            <div class="navesJSON-body">
                                <div>${element.nombre}</div>
                                <div>${element.destino}</div>
                                <div>${element.id}</div>
                            </div>
                        </div>
                    `
            })
        })
    }



    Tripuladas(){

        return fetch(this.url)
        .then(res => res.json())
        .then(dato =>{
            const barra2 = document.querySelector('.barra2-der')
           
            dato.tripuladas.forEach(element => {
                barra2.innerHTML += `
                        <div class="navesJSON">
                            <div class="navesJSON-head">
                                <img src="${element.img}" alt="">
                            </div>
                            <div class="navesJSON-body">
                                <div>${element.nombre}</div>
                                <div>${element.destino}</div>
                                <div>${element.id}</div>
                            </div>
                        </div>
                    `
            })
        })
    }
}


// Clase mostrar naves y sus metodos BASE DE DATOS 

class navesBD extends mostrarNavesModelo{
    
    mostrar(){
        return fetch(this.url)
        .then(res => res.json())
        .then(dato =>{

        if(dato=='no'){
            return 'no hay naves'
        }else{
            const myNaves = document.querySelector('.my-naves')
            dato.forEach(element => {

                //valor aleatorio posición
                    function rotar1(min, max) {
                        min = Math.ceil(min)
                        max = Math.floor(max)
                        return Math.floor(Math.random() * (max - min + 1) + min)
                    }
                
                    function aleatorio1(min, max) {
                        min = Math.ceil(min)
                        max = Math.floor(max)
                        return Math.floor(Math.random() * (max - min + 1) + min)
                    }
                    function aleatorio2(min, max) {
                        min = Math.ceil(min)
                        max = Math.floor(max)
                        return Math.floor(Math.random() * (max - min + 1) + min)
                    }
                  const posicionX = aleatorio1(10,70)
                  const posicionY = aleatorio2(10,30)
                  const rotar = rotar1(45,90)

                  
                    myNaves.innerHTML += `
                    <div class="nave" style="transform: translate(${posicionX}vw,${posicionY}vw) rotate(${rotar}deg);">
                        <div class="nave-head">
                            ( X: ${posicionX}vw, Y:${posicionY}vw )

                            <svg name="${element.id}" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" id="eliminar"  class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path name="${element.id}" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </svg>

                            <div class="nave-head-cerrar" >Eliminar</div>
                        </div>
                        <div class="nave-cuerpo">
                            <div class="nave-cuerpo-dato">${element.nombre}</div>
                            <div class="nave-cuerpo-dato">${element.destino}</div>
                            <div class="nave-cuerpo-dato">${element.tipo}</div>
                        </div>
                        <div class="aletas">
                            <div class="aleta1"></div>
                            <div class="fuego"></div>
                            <div class="aleta3"></div>
                        </div>
                    </div>
                `

                //eliminar
                const naveHeadCerrar = document.querySelectorAll('#eliminar')
                naveHeadCerrar.forEach(element => {
                    element.addEventListener('click', e =>{
                        console.log(e.target.attributes[0].value)
                        let id = e.target.attributes[0].value
                        eliminar(id)
                    })
                    
                })
                
            }) //fin foreach

        }

        })//fin then

    }
}

//Clase para buscar 
class classBuscar extends mostrarNavesModelo{
    
    resultado(nombre,destino){
        let parametros = {nombre : nombre, destino : destino}
        
        return fetch(this.url,{
            method : "post",
            body: JSON.stringify(parametros),
            headers : {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(dato =>{
            const myBuscadorBody = document.querySelector('.myBuscadorBody')
            if(dato== 0){
                
                myBuscadorBody.textContent = 'No se encontraron resultados para la busqueda...'

            }else{
                myBuscadorBody.innerHTML = '' 
                dato.forEach(element => {
                    console.log(element)
                    
                    myBuscadorBody.innerHTML += `
                            <div class="nave" style="position: relative; transform: none">
                                <div class="nave-cuerpo">
                                    <div class="nave-cuerpo-dato">${element.nombre}</div>
                                    <div class="nave-cuerpo-dato">${element.destino}</div>
                                    <div class="nave-cuerpo-dato">${element.empuje}</div>
                                </div>
                                <div class="aletas">
                                    <div class="aleta1"></div>
                                    <div class="fuego"></div>
                                    <div class="aleta3"></div>
                                </div>
                            </div>
                        `
                })
                
            }
        
        })

    }
}











//CONTROLADOR::::::::::::::::::::::::::::::::::::::

//controlador para mostrar las naves JSONS
const mostrarNavesControlador = (opcion) =>{
    let url = 'modelo/inventarioNaves.json'
    const naves = new mostrarNavesModelo(url)
    const barra2 = document.querySelector('.barra2-der')

    if(opcion == 1){
        barra2.innerHTML= ""
        naves.Lanzaderas()
    }else if(opcion == 2){
        barra2.innerHTML= ""
        naves.NoTripuladas()
    }else if(opcion == 3){
        barra2.innerHTML= ""
        naves.Tripuladas()
    }else if(opcion == 4){
        barra2.innerHTML= ""
        naves.Lanzaderas()
        naves.Tripuladas()
        naves.NoTripuladas()
    }
    
}


//controlador para crear naves
const controladorNaves = (nombre,empuje,destino,pais,datoNuevo,nave) =>{
    console.log(nombre,nave)
      if(nave == 'nave1'){
           const nave1 = new NaveUno(nombre,empuje,destino,pais,datoNuevo)
           //Mostrar las naves de la BASE DE DATOS
           
            setTimeout(() => {
                document.getElementById('alert').style.display = 'flex'
                document.querySelector('.alert').innerHTML = `
                <strong>${nave1.crear(nave)} </strong> en el espacio.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `
                
            }, "1000")
            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
                
            }, "4000")
            setTimeout(() => {
                window.location.href="index.html"
            }, "4100")
           

      }else if(nave == 'nave2'){
            const nave2 = new NaveDos(nombre,empuje,destino,pais,datoNuevo)

            setTimeout(() => {
                document.getElementById('alert').style.display = 'flex'
                document.querySelector('.alert').innerHTML = `
                <strong>${nave2.crear(nave)} </strong>  en el espacio.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `
            }, "1000")
            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
                
            }, "4000")
            setTimeout(() => {
                window.location.href="index.html"
            }, "4100")
        
      }else if(nave == 'nave3'){
            const nave3 = new NaveTres(nombre,empuje,destino,pais,datoNuevo)

            setTimeout(() => {
                document.getElementById('alert').style.display = 'flex'
                document.querySelector('.alert').innerHTML = `
                <strong>${nave3.crear(nave)} </strong> en el espacio.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `
            }, "1000")
            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, "4000")
            setTimeout(() => {
                window.location.href="index.html"
            }, "4100")
        
      }else if(nave == 'nave4'){
            const nave4 = new NaveCuatro(nombre,empuje,destino,pais,datoNuevo)
    

            setTimeout(() => {
                document.getElementById('alert').style.display = 'flex'
                document.querySelector('.alert').innerHTML = `
                <strong>${nave4.crear(nave)}  </strong> en el espacio.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `
            }, "1000")
            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, "4000")
            setTimeout(() => {
                window.location.href="index.html"
            }, "4100")
      }
}


//controlador para mostrar las naves BASE DE DATOS
const mostrarNavesBD = () =>{
    let url = 'modelo/mostrarNavesBD.php'
    const naves = new navesBD(url)
    naves.mostrar()
    
}


//controlador para buscar
const buscador = (nombre,destino) =>{
    let url = 'modelo/buscar.php'
    const b = new classBuscar(url)
    b.resultado(nombre,destino)
    
}


//eliminar
const eliminar = (id) =>{
    let parametros = {id: id}
    fetch('modelo/eliminar.php',{
        method : "post",
        body: JSON.stringify(parametros),
        headers : {
            'Accept': 'application/json',
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(dato =>{
        const alertID = document.getElementById('alert')
        const alertClass = document.querySelector('.alert')


        if(dato =='si'){
            setTimeout(() => {
                alertID.style.display = "flex"
                alertClass.innerHTML = `Se ha <strong>ELIMINADO</strong> la nave :(
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `

            }, 1000);
            setTimeout(() => {
                alertID.style.display = "none"
                window.location.href="index.html"

            }, 5000);
            
        }
    })
     
}

















//VISTA::::::::::::::::::::::::::::::::::::::::::::::::::::::


//Mostrar las naves de la BASE DE DATOS
mostrarNavesBD()


//estilo de active en los botones
const active = () =>{
    let arrayUl = document.querySelectorAll('.btn-boton')
     
    for(let i=0; i< arrayUl.length; i++){
        arrayUl[i].addEventListener('click', ()=>{
            console.log(arrayUl[i])
            let current = document.getElementsByClassName("active")
            if (current.length > 0) { 
                current[0].className = current[0].className.replace(" active", "")
            }
                arrayUl[i].className += " active"
         })

    }  

}
active()



// detectar la acción del boton para el invetario JSON
const bTodo = document.getElementById('b-todo')
const bLanza = document.getElementById('b-lanza')
const bnT = document.getElementById('b-n-tripu')
const bT = document.getElementById('b-tripu')

bTodo.addEventListener('click', detectarBoton)
bLanza.addEventListener('click', detectarBoton)
bnT.addEventListener('click', detectarBoton)
bT.addEventListener('click', detectarBoton)


mostrarNavesControlador(4)


function detectarBoton(event){
    if(event.target.id === "b-todo"){
      console.log('todo')
      mostrarNavesControlador(4)
    }else if(event.target.id === "b-lanza"){
        console.log('lanza')
        mostrarNavesControlador(1)
    }else if(event.target.id === "b-n-tripu"){
        console.log('no tripu')
        mostrarNavesControlador(2)
    }else if(event.target.id === "b-tripu"){
        console.log('tripu')
        mostrarNavesControlador(3)
    }
}



// detectar la acción del boton para crear las naves

//BOTONES
const nv = document.getElementById('nv')
const na = document.getElementById('na')
const np = document.getElementById('np')
const nt = document.getElementById('nt')

nv.addEventListener('click', detectarBotonNaves)
na.addEventListener('click', detectarBotonNaves)
np.addEventListener('click', detectarBotonNaves)
nt.addEventListener('click', detectarBotonNaves)


//CAJA FORMULARIOS
const formularioNV = document.querySelector('.formularioNV')
const formularioNA = document.querySelector('.formularioNA')
const formularioNP = document.querySelector('.formularioNP')
const formularioNT = document.querySelector('.formularioNT')


// FORMULARIOS
const formNV = document.querySelector('.formNV')
const formNA = document.querySelector('.formNA')
const formNP = document.querySelector('.formNP')
const formNT = document.querySelector('.formNT')

const cerrarNV = document.querySelector('.formularioNV svg')
const cerrarNA = document.querySelector('.formularioNA svg')
const cerrarNP = document.querySelector('.formularioNP svg')
const cerrarNT = document.querySelector('.formularioNT svg')



function detectarBotonNaves (evento){
    if(evento.target.id== 'nv'){
        formularioNV.style.display  ="flex"
        formularioNA.style.display  ="none"
        formularioNP.style.display  ="none"
        formularioNT.style.display  ="none"
    }else if(evento.target.id== 'na'){
        formularioNV.style.display  ="none"
        formularioNA.style.display  ="flex"
        formularioNP.style.display  ="none"
        formularioNT.style.display  ="none"
    }else if(evento.target.id== 'np'){
        formularioNV.style.display  ="none"
        formularioNA.style.display  ="none"
        formularioNP.style.display  ="flex"
        formularioNT.style.display  ="none"
    }else if(evento.target.id== 'nt'){
        formularioNV.style.display  ="none"
        formularioNA.style.display  ="none"
        formularioNP.style.display  ="none"
        formularioNT.style.display  ="flex"
    }
}


cerrarNV.addEventListener('click', ()=>{
    formularioNV.style.display  ="none"
})
cerrarNA.addEventListener('click', ()=>{
    formularioNA.style.display  ="none"
})
cerrarNP.addEventListener('click', ()=>{
    formularioNP.style.display  ="none"
})
cerrarNT.addEventListener('click', ()=>{
    formularioNT.style.display  ="none"
})


//acción para crear nave # 1
formNV.addEventListener('submit', e =>{
    e.preventDefault()
    const nombre = document.getElementById('nombre1').value
    const empuje = document.getElementById('empuje1').value
    const destino = document.getElementById('destino1').value
    const pais = document.getElementById('pais1').value
    const datoNuevo = document.getElementById('combustible1').value
    const nave = document.getElementById('nave1').value


    //mandamos por parametros al controlador los datos
    controladorNaves(nombre,empuje,destino,pais,datoNuevo,nave)

    formularioNV.style.display  ="none"

    e.stopPropagation()
})

//acción para crear nave # 2
formNA.addEventListener('submit', e =>{
    e.preventDefault()
    const nombre = document.getElementById('nombre2').value
    const empuje = document.getElementById('empuje2').value
    const destino = document.getElementById('destino2').value
    const pais = document.getElementById('pais2').value
    const datoNuevo = document.getElementById('altura').value
    const nave = document.getElementById('nave2').value


    //mandamos por parametros al controlador los datos
    controladorNaves(nombre,empuje,destino,pais,datoNuevo,nave)

    formularioNA.style.display  ="none"

    e.stopPropagation()
})

//acción para crear nave # 3
formNP.addEventListener('submit', e =>{
    e.preventDefault()
    const nombre = document.getElementById('nombre3').value
    const empuje = document.getElementById('empuje3').value
    const destino = document.getElementById('destino3').value
    const pais = document.getElementById('pais3').value
    const datoNuevo = document.getElementById('peso').value
    const nave = document.getElementById('nave3').value


    //mandamos por parametros al controlador los datos
    controladorNaves(nombre,empuje,destino,pais,datoNuevo,nave)

    formularioNP.style.display  ="none"

    e.stopPropagation()
})

//acción para crear nave # 4
formNT.addEventListener('submit', e =>{
    e.preventDefault()
    const nombre = document.getElementById('nombre4').value
    const empuje = document.getElementById('empuje4').value
    const destino = document.getElementById('destino4').value
    const pais = document.getElementById('pais4').value
    const datoNuevo = document.getElementById('tipo').value
    const nave = document.getElementById('nave4').value


    //mandamos por parametros al controlador los datos
    controladorNaves(nombre,empuje,destino,pais,datoNuevo,nave)

    formularioNT.style.display  ="none"

    e.stopPropagation()
})



const btnBuscador = document.getElementById('botonBuscador')
const myBuscador = document.querySelector('.myBuscador')
const cerrarMyBuscador = document.querySelector('.myBuscador svg')
const buscarForm = document.querySelector('.buscar')




btnBuscador.addEventListener('click', ()=>{
      myBuscador.style.display = "flex"
})

cerrarMyBuscador.addEventListener('click', ()=>{
    myBuscador.style.display = "none"
})

buscarForm.addEventListener('submit', e =>{
    e.preventDefault()
    const nombre = document.getElementById('nombre').value
    const destino = document.getElementById('destino').value


    //mandamos por parametros al controlador los datos
    buscador(nombre,destino)

    e.stopPropagation()
})




    
  



