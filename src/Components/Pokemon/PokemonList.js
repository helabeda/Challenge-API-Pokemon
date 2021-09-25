import React, {useEffect, useState} from 'react';
import PokemonCard from './PokemonCard';
import {getPokemon} from "../../redux/actions/pokemonAction";
import { useDispatch,  useSelector} from 'react-redux';


const PokemonList = () => {
    const dispatch = useDispatch()
    const pok = useSelector(state => state.pokemon.poke)
    const [query, setQuery] = useState("100")
    const loading = useSelector(state => state.pokemon.isLoading)
    const [search, setSearch] = useState("")
    useEffect(() => {
        dispatch(getPokemon(query))
    }, [query])
    return (
        <div className="PokeList">
        <img src="https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=e365-w600" alt="pokemon go"  className="pokemonGo"/>
        <br/>
        <input className="input" type="text" placeholder="Search by Name ..." onChange={e => setSearch(e.target.value)}/>
        <br/>
        <input className="input" type="number" min="0" placeholder="Choose a Number ..." onChange={e => setQuery(e.target.value)}/>
        {loading?
        <div>
            <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" alt="Loading" className="rotate"/>
        </div>:
        <div className="pokemonList">
            {pok.filter((el=>
                el.name.toLowerCase().includes(search.toLowerCase())
            )).map(el => <PokemonCard el={el} id={el.url.replace("https://pokeapi.co/api/v2/pokemon/","")}/>)}
        </div>}
        </div>
    )
}

export default PokemonList
