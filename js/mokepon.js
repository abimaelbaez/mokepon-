const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataquesDelJugador')
const ataquesDelEnemigo = document.getElementById('ataquesDelEnemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador 
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let inputLangostelvis
let inputTucapalma 
let inputPydos
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra 
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

let langostelvis = new Mokepon('Langostelvis', './assets/kisspng-lobster-chef-cartoon-5aef593a249586.9266995015256353861499.png', 5)

let tucapalma = new Mokepon('Tucapalma', './assets/kindpng_2584280.png', 5)

let pydos = new Mokepon('Pydos', './assets/pinpng.com-ducks-png-1410209.png', 5)

hipodoge.ataques.push(
    { nombre: '💦 ', id: 'boton-agua'},
    { nombre: '💦 ', id: 'boton-agua'},
    { nombre: '💦 ', id: 'boton-agua'},
    { nombre: '🔥 ', id: 'boton-fuego'},
    { nombre: '🌱 ', id: 'boton-tierra'},
)

capipepo.ataques.push(
    { nombre: '🔥 ', id: 'boton-fuego'},
    { nombre: '🔥 ', id: 'boton-fuego'},
    { nombre: '🔥 ', id: 'boton-fuego'},
    { nombre: '💦 ', id: 'boton-agua'},
    { nombre: '🌱 ', id: 'boton-tierra'},
)

ratigueya.ataques.push(
    { nombre: '🌱 ', id: 'boton-tierra'},
    { nombre: '🌱 ', id: 'boton-tierra'},
    { nombre: '🌱 ', id: 'boton-tierra'},
    { nombre: '💦 ', id: 'boton-agua'},
    { nombre: '🔥 ', id: 'boton-fuego'},
)

langostelvis.ataques.push(
    { nombre: '💦 ', id: 'boton-agua'},
    { nombre: '💦 ', id: 'boton-agua'},
    { nombre: '💦 ', id: 'boton-agua'},
    { nombre: '🌱 ', id: 'boton-tierra'},
    { nombre: '🔥 ', id: 'boton-fuego'},
)

tucapalma.ataques.push(
    { nombre: '🔥 ', id: 'boton-fuego'},
    { nombre: '💦 ', id: 'boton-agua'},
    { nombre: '🔥 ', id: 'boton-fuego'},
    { nombre: '🌱 ', id: 'boton-tierra'},
    { nombre: '🔥 ', id: 'boton-fuego'},
)

pydos.ataques.push(
    { nombre: '🌱 ', id: 'boton-tierra'},
    { nombre: '🌱 ', id: 'boton-tierra'},
    { nombre: '🌱 ', id: 'boton-tierra'},
    { nombre: '💦 ', id: 'boton-agua'},
    { nombre: '💦 ', id: 'boton-agua'},
)

mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)

function iniciarJuego (){

    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-mokepon" for=${mokepon.nombre}>
           <p>${mokepon.nombre}</p>
           <img src=${mokepon.foto} alt=${mokepon.nombre}>
         </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones 


     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya')
     inputLangostelvis = document.getElementById('Langostelvis')
     inputPydos = document.getElementById('Pydos')
     inputTucapalma = document.getElementById('Tucapalma')


    })

    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}   
function seleccionarMascotaJugador () {

    
    sectionSeleccionarMascota.style.display = 'none'

    
    sectionSeleccionarAtaque.style.display = 'flex'

    

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya,id
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else {
        alert('Selecciona una de las Mascotas')
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo ()
}
    function extraerAtaques(mascotaJugador) {
        let ataques
        for (let i = 0; i < mokepones.length; i++) {
            if (mascotaJugador === mokepones[i].nombre) {
                ataques = mokepones[i].ataques
            }
        }
        mostrarAtaques(ataques)
    }

    function mostrarAtaques(ataques) {
        ataques.forEach((ataque) =>  {
            ataquesMokepon = `
            <button id=${ataque.id} class="boton-de-ataque">${ataque.nombre} </button>
            `
            contenedorAtaques.innerHTML += ataquesMokepon
        })

         botonFuego = document.getElementById('boton-fuego')
         botonAgua = document.getElementById('boton-agua')
         botonTierra = document.getElementById('boton-tierra') 

         botonFuego.addEventListener('click', ataqueFuego)
         botonAgua.addEventListener('click', ataqueAgua)
         botonTierra.addEventListener('click', ataqueTierra)
    }

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)
    

    spanMascotaEnemigo.innerHTML = mokepones [mascotaAleatoria].nombre
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo () {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'Tierra'
    }
    conbate()
}

function conbate() {

    

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje('Empate')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje('Perdiste')
        vidasJugador-- 
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}
function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones! GANASTE")
    } else if (vidasJugador == 0){
        crearMensajeFinal("Lo siento perdiste")
    }       
}

function crearMensaje(resultado) {
    

   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    //let parrafo = document.createElement('p')
    //parrafo.innerHTML = 'Tu mascota atacó con ' +  ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo +'- ' + resultado 

   
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML =  resultadoFinal

    

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)