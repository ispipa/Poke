var parent = document.getElementById("parent");


const getPokes = () =>{

    for (let i = 1; i <=10; i++) {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+i+"/").then((response) => {
        parent.innerHTML += /*html*/ `
        <div class=card>
        <img class=card-img-top src="${response.data.sprites.front_default}" alt=Card image cap>
        <div class=card-body>
            <h5 class=card-title>${response.data.name}</h5>
            <p class=card-text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class=card-footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
        </div>
        `;
        }).catch((error) => {
            console.log(error);
        });

    }
}

getPokes();