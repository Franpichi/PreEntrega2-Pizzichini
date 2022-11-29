// Programa de busqueda de vuelos
// Informacion de vuelos


let bienvenidos = "Bienvenidos a Cordoba Viaja"
let buscarDestino = "Desde Córdoba a todo el país"
let destinoAElegir = "Elija el destino"
let vuelosDisponibles = "Esta es la información de los vuelos disponibles"
let listoViaje = "Listo para bucar tu viaje?"
let despedida = "Feliz viaje!"
let vuelos = [
    { destino: 'Buenos Aires', id: 1, compania: "Flybondi", precio: 100, imgUrl:"./imagenes/buenos.JPG", stock: 5},
    { destino: 'Tierra del Fuego', id: 2, compania: 'Aerolineas Argentinas', precio: 135, imgUrl: "./imagenes/tierra.jpg", stock: 5},
    { destino: "Mendoza", id: 3, compania: "Flybondi", precio: 90, imgUrl: "./imagenes/mendoza.jpg", stock: 5},
    { destino: "Bariloche", id: 4, compania: "Aerolineas Argentinas", precio: 150, imgUrl: "./imagenes/bariloche.jpg", stock: 5},
]

function infoViajes (){
    alert (bienvenidos)
    alert (buscarDestino)
    alert (vuelosDisponibles)

    vuelos.forEach(function(informaViaje){
    console.log(informaViaje.destino)
    console.log(informaViaje.precio)
})
    return (listoViaje)
}

function buscarViaje (){

    alert(destinoAElegir)
    alert("1- Buenos Aires \n2- Tierra del Fuego \n3- Mendoza \n4- Bariloche")

    let destinoElegido = parseInt(prompt("Elige el destino al cual quieres ir"))

    for (let i = 0; i < vuelos.length; i++) {
        if (destinoElegido === 1) {
            console.log("Eligio Buenos Aires");
            break
        } else if (destinoElegido === 2) {
            console.log("Eligio Tierra del Fuego");
            break
        } else if (destinoElegido === 3) {
            console.log("Eligio Mendoza");
            break
        } else if (destinoElegido === 4) {
            console.log("Eligio Bariloche");
            break
        } else {
            console.log("No eligio destino valido");
            break
        }
        
    }
    return despedida
}

let contenedorVuelos = document.getElementById("vueloEspecifico")
let carrito = document.getElementById("carrito")
let arrayCarrito = []

renderVuelos(vuelos)

function renderVuelos (arrayVuelos) {
    contenedorVuelos.innerHTML = ''
    for (const vuelo of vuelos) {
        let tarjetaVuelos = document.createElement("div")

    if (vuelos.stock < 5) {
            tarjetaVuelos.className = "TuVueloEs:"
        } else {
            tarjetaVuelos.className ="producto"
    }
    tarjetaVuelos.innerHTML = `
    <h2 class="destinoVVuelo"> ${vuelo.destino} </h2>
    <img class="imagenDestino" src=${vuelo.imgUrl}>
    <h4 class="precioViaje"> ${vuelo.precio} </h4>
    <button class="botonProducto" id=${vuelo.id}> "Elegir Destino" </button>
    `
    contenedorVuelos.append(tarjetaVuelos)
    }
        let botones = document.getElementsByClassName("botonProducto")
        for (const boton of botones) {
        boton.addEventListener("click", agregarVuelo)
    }
}
let input = document.getElementById("input")
input.addEventListener("input", fnInput)

function fnInput (event) {
    console.log(event)
    let productosFiltrados = vuelos.filter(vuelo => vuelo.destino.includes(input.value))
    renderVuelos(productosFiltrados)
}
function agregarVuelo(e) {
    let productoBuscado = vuelos.find(vuelo => vuelo.id == e.target.id)
    let positionProducto = arrayCarrito.findIndex(vuelo => vuelo.id == e.target.id)

    if (positionProducto != -1) { 
        arrayCarrito[positionProducto] = {
            id: arrayCarrito[positionProducto].id, destino: arrayCarrito[positionProducto].destino, precio: arrayCarrito[positionProducto].precio, unidades: arrayCarrito[positionProducto].unidades + 1, subtotal: arrayCarrito[positionProducto].precio * (arrayCarrito[positionProducto].unidades + 1)
        } 
    } else {
        arrayCarrito.push ({
            id: productoBuscado.id, destino: productoBuscado.destino, precio: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio
        })
    } 
    renderCarrito()
    }
    function renderCarrito () {
        carrito.innerHTML = ""
        for (const itemCarrito of arrayCarrito) {
            carrito.innerHTML += `
            <div class="itemCarrito">
            <h4>${itemCarrito.destino}</h4>
            <h4>${itemCarrito.precio}</h4>
            <h4>${itemCarrito.subtotal}</h4>
          </div>
            `
        }
        }


let vuelosFuturos = [
    { destino: 'Neuquen', id: 5, compania: "Flybondi", precio: 100, imgUrl:"./imagenes/buenos.JPG", stock: 5},
    { destino: 'Misiones', id: 6, compania: 'Aerolineas Argentinas', precio: 135, imgUrl: "./imagenes/tierra.jpg", stock: 5},
    { destino: "Salta", id: 7, compania: "Flybondi", precio: 90, imgUrl: "./imagenes/mendoza.jpg", stock: 5},
    { destino: "Uruguay", id: 8, compania: "Aerolineas Argentinas", precio: 150, imgUrl: "./imagenes/bariloche.jpg", stock: 5},
]
        

let vuelosJSON = JSON.stringify(vuelosFuturos)
console.log(vuelosJSON)
localStorage.setItem("destino", vuelosJSON)

let vuelosJS = JSON.parse (vuelosFuturos)
console.log(vuelosJS)
localStorage.getItem("compania", vuelosJS)
