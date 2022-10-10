const pokemonList = [
    { id: 1, name: "Bulbasaur", imgUrl: "http://img.pokemondb.net/artwork/bulbasaur.jpg", pokemonTypes: ["Grass", "Poison"] },
    { id: 2, name: "Ivysaur", imgUrl: "http://img.pokemondb.net/artwork/ivysaur.jpg", pokemonTypes: ["Grass", "Poison"] },
    { id: 3, name: "Venusaur", imgUrl: "http://img.pokemondb.net/artwork/venusaur.jpg", pokemonTypes: ["Grass", "Poison"] },
    { id: 4, name: "Charmander", imgUrl: "http://img.pokemondb.net/artwork/charmander.jpg", pokemonTypes: ["Fire"] },
    { id: 5, name: "Charmeleon", imgUrl: "http://img.pokemondb.net/artwork/charmeleon.jpg", pokemonTypes: ["Fire"] },
    { id: 6, name: "Charizard", imgUrl: "http://img.pokemondb.net/artwork/charizard.jpg", pokemonTypes: ["Fire", "Flying"] },
    { id: 7, name: "Squirtle", imgUrl: "http://img.pokemondb.net/artwork/squirtle.jpg", pokemonTypes: ["Water"] },
    { id: 8, name: "Wartortle", imgUrl: "http://img.pokemondb.net/artwork/wartortle.jpg", pokemonTypes: ["Water"] },
    { id: 9, name: "Blastoise", imgUrl: "http://img.pokemondb.net/artwork/blastoise.jpg", pokemonTypes: ["Water"] },
    { id: 10, name: "Caterpie", imgUrl: "http://img.pokemondb.net/artwork/caterpie.jpg", pokemonTypes: ["Bug"] },
    { id: 11, name: "Metapod", imgUrl: "http://img.pokemondb.net/artwork/metapod.jpg", pokemonTypes: ["Bug"] },
    { id: 12, name: "Butterfree", imgUrl: "http://img.pokemondb.net/artwork/butterfree.jpg", pokemonTypes: ["Bug", "Flying"] },
    { id: 13, name: "Weedle", imgUrl: "http://img.pokemondb.net/artwork/weedle.jpg", pokemonTypes: ["Bug", "Poison"] },
    { id: 14, name: "Kakuna", imgUrl: "http://img.pokemondb.net/artwork/kakuna.jpg", pokemonTypes: ["Bug", "Poison"] },
    { id: 15, name: "Beedrill", imgUrl: "http://img.pokemondb.net/artwork/beedrill.jpg", pokemonTypes: ["Bug", "Poison"] },
    { id: 16, name: "Pidgey", imgUrl: "http://img.pokemondb.net/artwork/pidgey.jpg", pokemonTypes: ["Normal", "Flying"] },
    { id: 17, name: "Pidgeotto", imgUrl: "http://img.pokemondb.net/artwork/pidgeotto.jpg", pokemonTypes: ["Normal", "Flying"] },
    { id: 18, name: "Pidgeot", imgUrl: "http://img.pokemondb.net/artwork/pidgeot.jpg", pokemonTypes: ["Normal", "Flying"] },
    { id: 19, name: "Rattata", imgUrl: "http://img.pokemondb.net/artwork/rattata.jpg", pokemonTypes: ["Normal"] },
    { id: 20, name: "Raticate", imgUrl: "http://img.pokemondb.net/artwork/raticate.jpg", pokemonTypes: ["Normal"] },
    { id: 21, name: "Spearow", imgUrl: "http://img.pokemondb.net/artwork/spearow.jpg", pokemonTypes: ["Normal", "Flying"] },
    { id: 22, name: "Fearow", imgUrl: "http://img.pokemondb.net/artwork/fearow.jpg", pokemonTypes: ["Normal", "Flying"] },
    { id: 23, name: "Ekans", imgUrl: "http://img.pokemondb.net/artwork/ekans.jpg", pokemonTypes: ["Poison"] },
    { id: 24, name: "Arbok", imgUrl: "http://img.pokemondb.net/artwork/arbok.jpg", pokemonTypes: ["Poison"] },
    { id: 25, name: "Pikachu", imgUrl: "http://img.pokemondb.net/artwork/pikachu.jpg", pokemonTypes: ["Electric"] },
    { id: 26, name: "Raichu", imgUrl: "http://img.pokemondb.net/artwork/raichu.jpg", pokemonTypes: ["Electric"] },
    { id: 27, name: "Sandshrew", imgUrl: "http://img.pokemondb.net/artwork/sandshrew.jpg", pokemonTypes: ["Ground"] },
    { id: 28, name: "Sandslash", imgUrl: "http://img.pokemondb.net/artwork/sandslash.jpg", pokemonTypes: ["Ground"] },
    { id: 29, name: "Nidoran♀", imgUrl: "http://img.pokemondb.net/artwork/nidoran-f.jpg", pokemonTypes: ["Poison"] },
    { id: 30, name: "Nidorina", imgUrl: "http://img.pokemondb.net/artwork/nidorina.jpg", pokemonTypes: ["Poison"] },
    { id: 31, name: "Nidoqueen", imgUrl: "http://img.pokemondb.net/artwork/nidoqueen.jpg", pokemonTypes: ["Poison", "Ground"] },
    { id: 32, name: "Nidoran♂", imgUrl: "http://img.pokemondb.net/artwork/nidoran-m.jpg", pokemonTypes: ["Poison"] },
    { id: 33, name: "Nidorino", imgUrl: "http://img.pokemondb.net/artwork/nidorino.jpg", pokemonTypes: ["Poison"] },
    { id: 34, name: "Nidoking", imgUrl: "http://img.pokemondb.net/artwork/nidoking.jpg", pokemonTypes: ["Poison", "Ground"] },
    { id: 35, name: "Clefairy", imgUrl: "http://img.pokemondb.net/artwork/clefairy.jpg", pokemonTypes: ["Fairy"] },
    { id: 36, name: "Clefable", imgUrl: "http://img.pokemondb.net/artwork/clefable.jpg", pokemonTypes: ["Fairy"] },
    { id: 37, name: "Vulpix", imgUrl: "http://img.pokemondb.net/artwork/vulpix.jpg", pokemonTypes: ["Fire"] },
    { id: 38, name: "Ninetales", imgUrl: "http://img.pokemondb.net/artwork/ninetales.jpg", pokemonTypes: ["Fire"] },
    { id: 39, name: "Jigglypuff", imgUrl: "http://img.pokemondb.net/artwork/jigglypuff.jpg", pokemonTypes: ["Normal", "Fairy"] },
    { id: 40, name: "Wigglytuff", imgUrl: "http://img.pokemondb.net/artwork/wigglytuff.jpg", pokemonTypes: ["Normal", "Fairy"] },
    { id: 41, name: "Zubat", imgUrl: "http://img.pokemondb.net/artwork/zubat.jpg", pokemonTypes: ["Poison", "Flying"] },
    { id: 42, name: "Golbat", imgUrl: "http://img.pokemondb.net/artwork/golbat.jpg", pokemonTypes: ["Poison", "Flying"] },
    { id: 43, name: "Oddish", imgUrl: "http://img.pokemondb.net/artwork/oddish.jpg", pokemonTypes: ["Grass", "Poison"] },
    { id: 44, name: "Gloom", imgUrl: "http://img.pokemondb.net/artwork/gloom.jpg", pokemonTypes: ["Grass", "Poison"] },
    { id: 45, name: "Vileplume", imgUrl: "http://img.pokemondb.net/artwork/vileplume.jpg", pokemonTypes: ["Grass", "Poison"] },
    { id: 46, name: "Paras", imgUrl: "http://img.pokemondb.net/artwork/paras.jpg", pokemonTypes: ["Bug", "Grass"] },
    { id: 47, name: "Parasect", imgUrl: "http://img.pokemondb.net/artwork/parasect.jpg", pokemonTypes: ["Bug", "Grass"] },
    { id: 48, name: "Venonat", imgUrl: "http://img.pokemondb.net/artwork/venonat.jpg", pokemonTypes: ["Bug", "Poison"] },
    { id: 49, name: "Venomoth", imgUrl: "http://img.pokemondb.net/artwork/venomoth.jpg", pokemonTypes: ["Bug", "Poison"] },
    { id: 50, name: "Diglett", imgUrl: "http://img.pokemondb.net/artwork/diglett.jpg", pokemonTypes: ["Ground"] },
    { id: 51, name: "Dugtrio", imgUrl: "http://img.pokemondb.net/artwork/dugtrio.jpg", pokemonTypes: ["Ground"] },
    { id: 52, name: "Meowth", imgUrl: "http://img.pokemondb.net/artwork/meowth.jpg", pokemonTypes: ["Normal"] },
    { id: 53, name: "Persian", imgUrl: "http://img.pokemondb.net/artwork/persian.jpg", pokemonTypes: ["Normal"] },
    { id: 54, name: "Psyduck", imgUrl: "http://img.pokemondb.net/artwork/psyduck.jpg", pokemonTypes: ["Water"] },
    { id: 55, name: "Golduck", imgUrl: "http://img.pokemondb.net/artwork/golduck.jpg", pokemonTypes: ["Water"] },
    { id: 56, name: "Mankey", imgUrl: "http://img.pokemondb.net/artwork/mankey.jpg", pokemonTypes: ["Fighting"] },
    { id: 57, name: "Primeape", imgUrl: "http://img.pokemondb.net/artwork/primeape.jpg", pokemonTypes: ["Fighting"] },
    { id: 58, name: "Growlithe", imgUrl: "http://img.pokemondb.net/artwork/growlithe.jpg", pokemonTypes: ["Fire"] },
    { id: 59, name: "Arcanine", imgUrl: "http://img.pokemondb.net/artwork/arcanine.jpg", pokemonTypes: ["Fire"] },
    { id: 60, name: "Poliwag", imgUrl: "http://img.pokemondb.net/artwork/poliwag.jpg", pokemonTypes: ["Water"] },
    { id: 61, name: "Poliwhirl", imgUrl: "http://img.pokemondb.net/artwork/poliwhirl.jpg", pokemonTypes: ["Water"] },
    { id: 62, name: "Poliwrath", imgUrl: "http://img.pokemondb.net/artwork/poliwrath.jpg", pokemonTypes: ["Water", "Fighting"] },
    { id: 63, name: "Abra", imgUrl: "http://img.pokemondb.net/artwork/abra.jpg", pokemonTypes: ["Psychic"] },
    { id: 64, name: "Kadabra", imgUrl: "http://img.pokemondb.net/artwork/kadabra.jpg", pokemonTypes: ["Psychic"] },
    { id: 65, name: "Alakazam", imgUrl: "http://img.pokemondb.net/artwork/alakazam.jpg", pokemonTypes: ["Psychic"] },
    { id: 66, name: "Machop", imgUrl: "http://img.pokemondb.net/artwork/machop.jpg", pokemonTypes: ["Fighting"] },
    { id: 67, name: "Machoke", imgUrl: "http://img.pokemondb.net/artwork/machoke.jpg", pokemonTypes: ["Fighting"] },
    { id: 68, name: "Machamp", imgUrl: "http://img.pokemondb.net/artwork/machamp.jpg", pokemonTypes: ["Fighting"] },
    { id: 69, name: "Bellsprout", imgUrl: "http://img.pokemondb.net/artwork/bellsprout.jpg", pokemonTypes: ["Grass", "Poison"] },
    { id: 70, name: "Weepinbell", imgUrl: "http://img.pokemondb.net/artwork/weepinbell.jpg", pokemonTypes: ["Grass", "Poison"] },
    { id: 71, name: "Victreebel", imgUrl: "http://img.pokemondb.net/artwork/victreebel.jpg", pokemonTypes: ["Grass", "Poison"] },
    { id: 72, name: "Tentacool", imgUrl: "http://img.pokemondb.net/artwork/tentacool.jpg", pokemonTypes: ["Water", "Poison"] },
    { id: 73, name: "Tentacruel", imgUrl: "http://img.pokemondb.net/artwork/tentacruel.jpg", pokemonTypes: ["Water", "Poison"] },
    { id: 74, name: "Geodude", imgUrl: "http://img.pokemondb.net/artwork/geodude.jpg", pokemonTypes: ["Rock", "Ground"] },
    { id: 75, name: "Graveler", imgUrl: "http://img.pokemondb.net/artwork/graveler.jpg", pokemonTypes: ["Rock", "Ground"] },
    { id: 76, name: "Golem", imgUrl: "http://img.pokemondb.net/artwork/golem.jpg", pokemonTypes: ["Rock", "Ground"] },
    { id: 77, name: "Ponyta", imgUrl: "http://img.pokemondb.net/artwork/ponyta.jpg", pokemonTypes: ["Fire"] },
    { id: 78, name: "Rapidash", imgUrl: "http://img.pokemondb.net/artwork/rapidash.jpg", pokemonTypes: ["Fire"] },
    { id: 79, name: "Slowpoke", imgUrl: "http://img.pokemondb.net/artwork/slowpoke.jpg", pokemonTypes: ["Water", "Psychic"] },
    { id: 80, name: "Slowbro", imgUrl: "http://img.pokemondb.net/artwork/slowbro.jpg", pokemonTypes: ["Water", "Psychic"] },
    { id: 81, name: "Magnemite", imgUrl: "http://img.pokemondb.net/artwork/magnemite.jpg", pokemonTypes: ["Electric", "Steel"] },
    { id: 82, name: "Magneton", imgUrl: "http://img.pokemondb.net/artwork/magneton.jpg", pokemonTypes: ["Electric", "Steel"] },
    { id: 83, name: "Farfetch'd", imgUrl: "http://img.pokemondb.net/artwork/farfetchd.jpg", pokemonTypes: ["Normal", "Flying"] },
    { id: 84, name: "Doduo", imgUrl: "http://img.pokemondb.net/artwork/doduo.jpg", pokemonTypes: ["Normal", "Flying"] },
    { id: 85, name: "Dodrio", imgUrl: "http://img.pokemondb.net/artwork/dodrio.jpg", pokemonTypes: ["Normal", "Flying"] },
    { id: 86, name: "Seel", imgUrl: "http://img.pokemondb.net/artwork/seel.jpg", pokemonTypes: ["Water"] },
    { id: 87, name: "Dewgong", imgUrl: "http://img.pokemondb.net/artwork/dewgong.jpg", pokemonTypes: ["Water", "Ice"] },
    { id: 88, name: "Grimer", imgUrl: "http://img.pokemondb.net/artwork/grimer.jpg", pokemonTypes: ["Poison"] },
    { id: 89, name: "Muk", imgUrl: "http://img.pokemondb.net/artwork/muk.jpg", pokemonTypes: ["Poison"] },
    { id: 90, name: "Shellder", imgUrl: "http://img.pokemondb.net/artwork/shellder.jpg", pokemonTypes: ["Water"] },
    { id: 91, name: "Cloyster", imgUrl: "http://img.pokemondb.net/artwork/cloyster.jpg", pokemonTypes: ["Water", "Ice"] },
    { id: 92, name: "Gastly", imgUrl: "http://img.pokemondb.net/artwork/gastly.jpg", pokemonTypes: ["Ghost", "Poison"] },
    { id: 93, name: "Haunter", imgUrl: "http://img.pokemondb.net/artwork/haunter.jpg", pokemonTypes: ["Ghost", "Poison"] },
    { id: 94, name: "Gengar", imgUrl: "http://img.pokemondb.net/artwork/gengar.jpg", pokemonTypes: ["Ghost", "Poison"] },
    { id: 95, name: "Onix", imgUrl: "http://img.pokemondb.net/artwork/onix.jpg", pokemonTypes: ["Rock", "Ground"] },
    { id: 96, name: "Drowzee", imgUrl: "http://img.pokemondb.net/artwork/drowzee.jpg", pokemonTypes: ["Psychic"] },
    { id: 97, name: "Hypno", imgUrl: "http://img.pokemondb.net/artwork/hypno.jpg", pokemonTypes: ["Psychic"] },
    { id: 98, name: "Krabby", imgUrl: "http://img.pokemondb.net/artwork/krabby.jpg", pokemonTypes: ["Water"] },
    { id: 99, name: "Kingler", imgUrl: "http://img.pokemondb.net/artwork/kingler.jpg", pokemonTypes: ["Water"] },
    { id: 100, name: "Voltorb", imgUrl: "http://img.pokemondb.net/artwork/voltorb.jpg", pokemonTypes: ["Electric"] },
    { id: 101, name: "Electrode", imgUrl: "http://img.pokemondb.net/artwork/electrode.jpg", pokemonTypes: ["Electric"] },
    { id: 102, name: "Exeggcute", imgUrl: "http://img.pokemondb.net/artwork/exeggcute.jpg", pokemonTypes: ["Grass", "Psychic"] },
    { id: 103, name: "Exeggutor", imgUrl: "http://img.pokemondb.net/artwork/exeggutor.jpg", pokemonTypes: ["Grass", "Psychic"] },
    { id: 104, name: "Cubone", imgUrl: "http://img.pokemondb.net/artwork/cubone.jpg", pokemonTypes: ["Ground"] },
    { id: 105, name: "Marowak", imgUrl: "http://img.pokemondb.net/artwork/marowak.jpg", pokemonTypes: ["Ground"] },
    { id: 106, name: "Hitmonlee", imgUrl: "http://img.pokemondb.net/artwork/hitmonlee.jpg", pokemonTypes: ["Fighting"] },
    { id: 107, name: "Hitmonchan", imgUrl: "http://img.pokemondb.net/artwork/hitmonchan.jpg", pokemonTypes: ["Fighting"] },
    { id: 108, name: "Lickitung", imgUrl: "http://img.pokemondb.net/artwork/lickitung.jpg", pokemonTypes: ["Normal"] },
    { id: 109, name: "Koffing", imgUrl: "http://img.pokemondb.net/artwork/koffing.jpg", pokemonTypes: ["Poison"] },
    { id: 110, name: "Weezing", imgUrl: "http://img.pokemondb.net/artwork/weezing.jpg", pokemonTypes: ["Poison"] },
    { id: 111, name: "Rhyhorn", imgUrl: "http://img.pokemondb.net/artwork/rhyhorn.jpg", pokemonTypes: ["Ground", "Rock"] },
    { id: 112, name: "Rhydon", imgUrl: "http://img.pokemondb.net/artwork/rhydon.jpg", pokemonTypes: ["Ground", "Rock"] },
    { id: 113, name: "Chansey", imgUrl: "http://img.pokemondb.net/artwork/chansey.jpg", pokemonTypes: ["Normal"] },
    { id: 114, name: "Tangela", imgUrl: "http://img.pokemondb.net/artwork/tangela.jpg", pokemonTypes: ["Grass"] },
    { id: 115, name: "Kangaskhan", imgUrl: "http://img.pokemondb.net/artwork/kangaskhan.jpg", pokemonTypes: ["Normal"] },
    { id: 116, name: "Horsea", imgUrl: "http://img.pokemondb.net/artwork/horsea.jpg", pokemonTypes: ["Water"] },
    { id: 117, name: "Seadra", imgUrl: "http://img.pokemondb.net/artwork/seadra.jpg", pokemonTypes: ["Water"] },
    { id: 118, name: "Goldeen", imgUrl: "http://img.pokemondb.net/artwork/goldeen.jpg", pokemonTypes: ["Water"] },
    { id: 119, name: "Seaking", imgUrl: "http://img.pokemondb.net/artwork/seaking.jpg", pokemonTypes: ["Water"] },
    { id: 120, name: "Staryu", imgUrl: "http://img.pokemondb.net/artwork/staryu.jpg", pokemonTypes: ["Water"] },
    { id: 121, name: "Starmie", imgUrl: "http://img.pokemondb.net/artwork/starmie.jpg", pokemonTypes: ["Water", "Psychic"] },
    { id: 122, name: "Mr. Mime", imgUrl: "http://img.pokemondb.net/artwork/mr-mime.jpg", pokemonTypes: ["Psychic", "Fairy"] },
    { id: 123, name: "Scyther", imgUrl: "http://img.pokemondb.net/artwork/scyther.jpg", pokemonTypes: ["Bug", "Flying"] },
    { id: 124, name: "Jynx", imgUrl: "http://img.pokemondb.net/artwork/jynx.jpg", pokemonTypes: ["Ice", "Psychic"] },
    { id: 125, name: "Electabuzz", imgUrl: "http://img.pokemondb.net/artwork/electabuzz.jpg", pokemonTypes: ["Electric"] },
    { id: 126, name: "Magmar", imgUrl: "http://img.pokemondb.net/artwork/magmar.jpg", pokemonTypes: ["Fire"] },
    { id: 127, name: "Pinsir", imgUrl: "http://img.pokemondb.net/artwork/pinsir.jpg", pokemonTypes: ["Bug"] },
    { id: 128, name: "Tauros", imgUrl: "http://img.pokemondb.net/artwork/tauros.jpg", pokemonTypes: ["Normal"] },
    { id: 129, name: "Magikarp", imgUrl: "http://img.pokemondb.net/artwork/magikarp.jpg", pokemonTypes: ["Water"] },
    { id: 130, name: "Gyarados", imgUrl: "http://img.pokemondb.net/artwork/gyarados.jpg", pokemonTypes: ["Water", "Flying"] },
    { id: 131, name: "Lapras", imgUrl: "http://img.pokemondb.net/artwork/lapras.jpg", pokemonTypes: ["Water", "Ice"] },
    { id: 132, name: "Ditto", imgUrl: "http://img.pokemondb.net/artwork/ditto.jpg", pokemonTypes: ["Normal"] },
    { id: 133, name: "Eevee", imgUrl: "http://img.pokemondb.net/artwork/eevee.jpg", pokemonTypes: ["Normal"] },
    { id: 134, name: "Vaporeon", imgUrl: "http://img.pokemondb.net/artwork/vaporeon.jpg", pokemonTypes: ["Water"] },
    { id: 135, name: "Jolteon", imgUrl: "http://img.pokemondb.net/artwork/jolteon.jpg", pokemonTypes: ["Electric"] },
    { id: 136, name: "Flareon", imgUrl: "http://img.pokemondb.net/artwork/flareon.jpg", pokemonTypes: ["Fire"] },
    { id: 137, name: "Porygon", imgUrl: "http://img.pokemondb.net/artwork/porygon.jpg", pokemonTypes: ["Normal"] },
    { id: 138, name: "Omanyte", imgUrl: "http://img.pokemondb.net/artwork/omanyte.jpg", pokemonTypes: ["Rock", "Water"] },
    { id: 139, name: "Omastar", imgUrl: "http://img.pokemondb.net/artwork/omastar.jpg", pokemonTypes: ["Rock", "Water"] },
    { id: 140, name: "Kabuto", imgUrl: "http://img.pokemondb.net/artwork/kabuto.jpg", pokemonTypes: ["Rock", "Water"] },
    { id: 141, name: "Kabutops", imgUrl: "http://img.pokemondb.net/artwork/kabutops.jpg", pokemonTypes: ["Rock", "Water"] },
    { id: 142, name: "Aerodactyl", imgUrl: "http://img.pokemondb.net/artwork/aerodactyl.jpg", pokemonTypes: ["Rock", "Flying"] },
    { id: 143, name: "Snorlax", imgUrl: "http://img.pokemondb.net/artwork/snorlax.jpg", pokemonTypes: ["Normal"] },
    { id: 144, name: "Articuno", imgUrl: "http://img.pokemondb.net/artwork/articuno.jpg", pokemonTypes: ["Ice", "Flying"] },
    { id: 145, name: "Zapdos", imgUrl: "http://img.pokemondb.net/artwork/zapdos.jpg", pokemonTypes: ["Electric", "Flying"] },
    { id: 146, name: "Moltres", imgUrl: "http://img.pokemondb.net/artwork/moltres.jpg", pokemonTypes: ["Fire", "Flying"] },
    { id: 147, name: "Dratini", imgUrl: "http://img.pokemondb.net/artwork/dratini.jpg", pokemonTypes: ["Dragon"] },
    { id: 148, name: "Dragonair", imgUrl: "http://img.pokemondb.net/artwork/dragonair.jpg", pokemonTypes: ["Dragon"] },
    { id: 149, name: "Dragonite", imgUrl: "http://img.pokemondb.net/artwork/dragonite.jpg", pokemonTypes: ["Dragon", "Flying"] },
    { id: 150, name: "Mewtwo", imgUrl: "http://img.pokemondb.net/artwork/mewtwo.jpg", pokemonTypes: ["Psychic"] },
    { id: 151, name: "Mew", imgUrl: "http://img.pokemondb.net/artwork/mew.jpg", pokemonTypes: ["Psychic"] }
]

const typeColors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

const pokemonCardContainer = document.getElementById("pokemonCardContainer")

pokemonList.forEach(pokemon => {
    const pokemonCard = document.createElement("div")
    pokemonCard.classList.add("cardContainer")
    pokemonCard.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${pokemon.imgUrl}" class="card-img-top" alt="${pokemon.name}">
    <div class="card-body">
        <h5 class="card-title">${pokemon.id}: ${pokemon.name}</h5>
        <p class="card-text">${pokemon.pokemonTypes}</p>
    </div>
    `
    pokemonCardContainer.appendChild(pokemonCard)
})

const findPokemon = () => {
    const searchPokemon = prompt("Enter the name or number of the Pokemon you want")
    if (!searchPokemon) return
    const resultByName = pokemonList.filter((el) => el.name.toLowerCase().includes(searchPokemon.toLowerCase()))
    let resultString = 'Pokemon found:\n'
    resultByName.forEach(pokemon => {
        resultString = resultString + `${pokemon.id}.- ${pokemon.name} \n \t ${pokemon.pokemonTypes} \n`
    })
    const resultByNumber = pokemonList.filter((el) => el.id == searchPokemon)
    resultByNumber.forEach((pokemon) => {
        resultString = resultString + `${pokemon.id}.- ${pokemon.name} \n \t ${pokemon.pokemonTypes} \n`
    })
    if (resultByName.length < 1 && resultByNumber.length < 1) {
        alert("We couldn't find any results with " + searchPokemon)
        console.log("We couldn't find any results with " + searchPokemon)
    }else{
        alert(resultString)
        console.log(resultString)
    }
}

// Ver resultados por consola
const filterTypes = () => {
    const search = document.getElementById("filterByType").value.toLowerCase()
    if (!search) return
    const searchType = search.charAt(0).toUpperCase() + search.substr(1)
    const resultByType = pokemonList.filter((el) => el.pokemonTypes.includes(searchType))
    if(resultByType.length < 1) {
        console.log(
            `%c We couldn't find any results with: ${search}`,
            `font-weight: bold; font-size: 15px; color: red`
        )
    }
    let results = resultByType.forEach((pokemon) => {
        console.log(
            `%c \t${pokemon.id}.- ${pokemon.name}\n`,
            `font-weight: bold; font-size: 15px; color: ${typeColors[search]}`
        );
    })
}
