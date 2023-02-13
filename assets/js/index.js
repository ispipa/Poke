var names = [];
var img=[];

var parent = document.getElementById("parent");
console.log(parent);
axios.get("https://pokeapi.co/api/v2/pokemon/1/").then((response) => {

    names.push(response.data.name);
    img.push(response.data.sprites.front_default);

    parent.innerHTML +=  `
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
    console.log(response);
    console.log(response.data.name);
}).catch((error) => {
    console.log(error);
});