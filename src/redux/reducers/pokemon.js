import {POKEMON_LOAD, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL } from "../constants/pokemonActionType";


const initialState ={
    poke:[],
    isLoading:false,
    errors:null,

}
export const pokemon = (state=initialState, {type, payload}) =>{
    switch (type) {
        case POKEMON_LOAD:
            return{...state,isLoading:true}; 
        case GET_POKEMON_SUCCESS:
            return{...state, poke:payload, isLoading:false}; 
        case GET_POKEMON_FAIL:
            return{...state, errors:payload, isLoading:false};    
        default:
            return state;
    }
}
