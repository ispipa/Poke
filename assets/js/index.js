var parentIndex = document.getElementById("parent");
var pokes = [];


const getPokes = async () =>{
    for (let i = 1; i <=12; i++) {
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
    parentIndex.innerHTML +=  `
        <div class=card>
        <img class=card-img-top src="${poke.sprites.front_default}" alt=Card image cap>
        <div class='card-body text-center'>
            <h5 class=card-title>${poke.name}</h5>
        </div>
        </div>
        `;
    });
}

getPokes();