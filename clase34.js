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

// var promesas = ids.map(function (id) {
    //     return obtenerPersonaje(id)
    // })
    function onError(id) {
    console.log(`Sucedio un erro en ${id}`);
}

async function obtenerPersonajes () {
    var ids = [1, 2, 3, 4, 5]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()

