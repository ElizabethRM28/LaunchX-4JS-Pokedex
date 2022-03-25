const fetchPokemon = () => {

   const pokeNameInput = document.getElementById("pokeName");
   let pokeName = pokeNameInput.value;
   let ResPokemonName = document.getElementById('ResPokeName')
   let ResPokemonTipo = document.getElementById('ResPokeTipo')
   let ResPokemonEsta = document.getElementById('ResPokeEsta')
   let ResPokemonHabi = document.getElementById('ResPokeHabi')
   
   pokeName = pokeName.toLowerCase();

    

   const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
   fetch(url).then((res) => {
       if (res.status != "200") {
           console.log(res);
           pokeImage("./pokemon-sad.gif")
       }
       else {
           return res.json();
       }
   }).then((data) => {

       if (data) {
           console.log(data);
           let pokeImg = data.sprites.front_default;
           pokeImage(pokeImg);
           console.log(pokeImg);

           let Pokemonname = data.forms[0].name;
           ResPokemonName.innerHTML = Pokemonname;
           console.log(Pokemonname);

           let Pokemontipo = data.types[0].type.name;
           ResPokemonTipo.innerHTML = Pokemontipo;
           console.log(Pokemontipo);

           let PokemonEsta = data.stats;
           extraerEsta(PokemonEsta);
           ResPokemonEsta.innerHTML = extraerEsta(PokemonEsta);
           //console.log(PokemonEsta) 

           let PokemonHabi = data.abilities;
           extraerHabi(PokemonHabi);
           ResPokemonHabi.innerHTML = extraerHabi(PokemonHabi);
           //console.log(PokemonHabi)

       }
   });
}

const pokeImage = (url) => {
   const pokePhoto = document.getElementById("pokeImg");
   pokePhoto.src = url;
}

const extraerEsta = (cajaDeEstadisticas) => {
    let cadena;
    for (let esta = 0; esta < cajaDeEstadisticas.length; esta++) {
        console.log(cajaDeEstadisticas[esta].stat.name);
        if (esta == 0) {
            cadena = cajaDeEstadisticas[esta].stat.name + ' ' + cajaDeEstadisticas[esta].base_stat + '   ';
        }
        else {cadena = cadena + cajaDeEstadisticas[esta].stat.name + ' ' + cajaDeEstadisticas[esta].base_stat + ' ';}

        
    }
    return cadena
}

const extraerHabi = (cajaDeHabilidades) => {
    let cadena2;
    for(let habi = 0; habi < cajaDeHabilidades.length; habi++) {
        console.log(cajaDeHabilidades[habi].ability.name)
        if (habi == 0) {
            cadena2 = cajaDeHabilidades[habi].ability.name + ' ';
            
        }
        else {cadena2 = cadena2 + cajaDeHabilidades[habi].ability.name + ' ';}
    }
    return cadena2
}