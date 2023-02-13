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
        <div class="card-body">
            <h5 class="card-title">${response.data.name}</h5>
            <p class="card-text" id="pokemonAbilities"></p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
        </div>
        `;

        let abilities = "";
        response.data.abilities.forEach(item => {
            abilities += `<p>Habilidad: ${item.ability.name}</p>`;
        })


        document.querySelector("#pokemonAbilities").innerHTML = abilities;
        }).catch((error) => {
            console.log(error);
        });
})