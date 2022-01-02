import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


  const ul = document.querySelector("ul");
  const myPokemons = async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(data => {
     for(let i = 0; i < 10; i++){
       let p = data.results[i].name;
       let el = document.createElement("li");
       el.innerText = p;
       ul.appendChild(el);
     }
    })
    .catch(err => console.log(err))
  }
  myPokemons();

});
