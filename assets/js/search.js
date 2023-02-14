const url = "https://pokeapi.co/api/v2/pokemon/"
const pokemonToSearch = document.querySelector("#inputToSearch")
const parent = document.getElementById("parent");

document.querySelector("#searchForm").addEventListener("submit", (e)=>{
    e.preventDefault()
    axios.get(url+pokemonToSearch.value).then((response) => {
        console.log(response.data.abilities)

        parent.innerHTML = /*html*/ `
        <div class="card" style="max-width: 300px;">
        <img class="card-img-top" src="${response.data.sprites.front_default}" alt="Card image cap">
        <div class="card-body text-center">
            <h5 class="card-title">${response.data.name}</h5>
        </div>
        </div>
        `;

    })
})