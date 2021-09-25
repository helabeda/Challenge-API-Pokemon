import {POKEMON_LOAD, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL } from "../constants/pokemonActionType";
import axios from "axios";


export const getPokemon = (query) => async dispatch =>{
    dispatch ({type:POKEMON_LOAD})
    try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${query}`
          );
        dispatch({type:GET_POKEMON_SUCCESS, payload:response.data.results})
      } catch (error) {
        dispatch({type:GET_POKEMON_FAIL, payload:error})
      }
}