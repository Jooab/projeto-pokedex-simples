const pokemonSelectionList = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon-card')

pokemonSelectionList.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
        
        const pokemonOpenCard = document.querySelector('.open')
        pokemonOpenCard.classList.remove('open')

        const pokemonSelectedId = pokemon.attributes.id.value

        const pokemonCardSelectedId =  'card-' + pokemonSelectedId

        const pokemonCardToOpen = document.getElementById(pokemonCardSelectedId)
        pokemonCardToOpen.classList.add('open')

        const pokemonListColorSelected = document.querySelector('.active')
        pokemonListColorSelected.classList.remove('active')
        pokemon.classList.add('active')
        

    })
})