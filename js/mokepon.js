const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const inputLangostelvis = document.getElementById('langostelvis')
const inputPydos = document.getElementById('pydos')
const inputTucapalma = document.getElementById('tucapalma')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataquesDelJugador')
const ataquesDelEnemigo = document.getElementById('ataquesDelEnemigo')

let mokepones = []
let ataqueJugador 
let ataqueEnemigo
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

function iniciarJuego (){

    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}   
function seleccionarMascotaJugador () {

    
    sectionSeleccionarMascota.style.display = 'none'

    
    sectionSeleccionarAtaque.style.display = 'flex'

    

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = 'Pydos'
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = 'Tucapalma'
    } else {
        alert('Selecciona una de las Mascotas')
    }
    seleccionarMascotaEnemigo ()
}
function seleccionarMascotaEnemigo () {
    let mascotaAleatorio = aleatorio(1,6)
    

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'langostelvis'
    } else if (mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'Pydos'
    } else if (mascotaAleatorio == 6){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    }
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