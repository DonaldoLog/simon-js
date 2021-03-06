const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opt =  { crossDomain:true }


function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opt, function (person) {
        console.log(`Hola, yo soy ${person.name}`)
        if (callback) {
            callback()
        }
    })
}

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3)
    })
})

