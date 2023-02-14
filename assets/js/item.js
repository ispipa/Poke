
var baseUrl = (window.location).href;
var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);

const img = document.querySelector('.item__img')
const h2 = document.querySelector('.item__h2')
const p = document.querySelector('.item__p')

axios.get("https://pokeapi.co/api/v2/pokemon/"+koopId+"/").then((response) => {

    console.log(response.data)
    h2.innerHTML = response.data.forms[0].name;
    img.src = response.data.sprites.front_default;
    p.innerHTML = response.data.stats.base_stat;
}).catch((error) => {})