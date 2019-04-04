const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opt =  { crossDomain:true }


function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opt, callback)
    .fail(() => {
        console.log(`error en ${id}`)
    })
}

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(2, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)
 
            obtenerPersonaje(3, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)
            })
    })
})

