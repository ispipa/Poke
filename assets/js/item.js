
var baseUrl = (window.location).href;
var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);

const img = document.querySelector('.item__img')
const h2 = document.querySelector('.item__h2')
const itemAbilities = document.querySelector('.item__abilities')

axios.get("https://pokeapi.co/api/v2/pokemon/"+koopId+"/").then((response) => {

    console.log(response.data)
    h2.innerHTML = response.data.forms[0].name;
    img.src = response.data.sprites.front_default;

    response.data.abilities.forEach(x => {
        const ability = x.ability.name;
        itemAbilities.innerHTML += `<p>${ability}</p>`
    })

}).catch((error) => {})