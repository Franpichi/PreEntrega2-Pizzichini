// Programa de busqueda de vuelos
// Informacion de vuelos
let bienvenidos = "Bienvenidos a Cordoba Viaja"
let buscarDestino = "Desde Córdoba a todo el país"
let destinoAElegir = "Elija el destino"
let vuelosDisponibles = "Esta es la información de los vuelos disponibles"
let listoViaje = "Listo para bucar tu viaje?"
let despedida = "Feliz viaje!"
let vuelos = [
    {
        destino: 'Buenos Aires',
        id: 1,
        compania: "Flybondi",
        precio: "100 USD"
    },
    {
        destino: 'Tierra del Fuego',
        id: 2,
        compania: 'Aerolineas Argentinas',
        precio: '135 USD'
    },
    {
        destino: "Mendoza",
        id: 3,
        compania: "Flybondi",
        precio: "90 USD"        
    },
    {
        destino: "Bariloche",
        id: 4,
        compania: "Aerolineas Argentinas",
        precio: "150 USD"
    },
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
