const url = "https://pokeapi.co/api/v2/pokemon/"
const pokemonToSearch = document.querySelector("#inputToSearch")
const parent = document.getElementById("parent")

document.querySelector("#searchForm").addEventListener("submit", (e)=>{
    e.preventDefault()
    location.href = `./search.html?search=${pokemonToSearch.value}`;
})

const urlParams = new URLSearchParams(window.location.search);
const searchPokemon = urlParams.get('search');
if (searchPokemon) {
     axios.get(url+searchPokemon).then((response) => {
        parent.innerHTML = /*html*/ `
        <div class="card" style="max-width: 300px;">
        <img class="card-img-top" src="${response.data.sprites.front_default}" alt="Card image cap">
        <div class="card-body text-center">
            <h5 class="card-title">${response.data.name}</h5>
        </div>
        </div>
        `;
    })
}