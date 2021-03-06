const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opt =  { crossDomain:true }


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opt, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un erro en ${id}`);
}

obtenerPersonaje(1)
.then (function (personaje) {
    console.log(`El persona 1 es ${personaje.name}`);
})
.catch(onError)

