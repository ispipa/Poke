var parent = document.getElementById("parent");
var pokes = [];


const getPokes = async () =>{
    for (let i = 1; i <=10; i++) {
        await axios.get("https://pokeapi.co/api/v2/pokemon/"+i+"/").then((response) => {
        pokemon = response.data;
        pokes.push(response.data);
        }).catch((error) => {
            console.log(error);
        });

    }
    printPokes();
}

const printPokes =  async(name,url) => {
    console.log(pokes);
   pokes.map((poke) => {
        parent.innerHTML +=  `
        <div class=card>
        <img class=card-img-top src="${poke.sprites.front_default}" alt=Card image cap>
        <div class=card-body>
            <h5 class=card-title>${poke.name}</h5>
            <p class=card-text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class=card-footer>
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
        </div>
        `;
    });
}

getPokes();