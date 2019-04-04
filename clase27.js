const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opt =  { crossDomain:true }

const onPeopleResponse = function (person) {
    console.log(`Hola, yo soy ${person.name}`)
}
$.get(lukeUrl, opt, onPeopleResponse)