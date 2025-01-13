

async function PokemonData(){
    let number=document.querySelector("#number")
    let value=number.value;
    let type=document.querySelector("#category").value;
    let pokedetail=document.querySelector("#pokedetail");
    let allpoke=[];
    pokedetail.innerHTML="";

 
    for(let i=0;i<value;i++){
        let pokemon=await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        
        let data=await pokemon.json();
        // console.log(data)
allpoke.push({name:data.pokemon[i].pokemon.name,url:data.pokemon[i].pokemon.url});
console.log(allpoke[i].url)

    }
    
    for(let i=0;i<allpoke.length;i++){
        let name= await fetch(allpoke[i].url);
        let data=await name.json();
        let getele=document.createElement("div");

    getele.innerHTML=`<div class="card" style="width: 20rem; background-color:rgb(75, 142, 210)">
    <img src=${data.sprites.front_default} class="card-img-top" alt="image" style="margin:10px;"></img>
    <div class="card-body ">
      <p class="card-text " style="font-size:20px";><b>${data.forms[0].name}</b></p>
    </div>
  </div>
  <br>`;

    pokedetail.appendChild(getele); 
    }
     
    
     
}

