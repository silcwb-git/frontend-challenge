import { combineReducers } from "redux"
import pokedexReducer from '../pokedex/pokedexReducer'

const rootReducer = combineReducers({
    pokedex: pokedexReducer

})

export default rootReducer