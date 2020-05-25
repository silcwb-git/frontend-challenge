import axios from 'axios'

const URL = 'http://pokeapi.co/api/v2/pokemon/'

export const changeName = event => ({
    type: 'NAME_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return(dispatch, getState) => {
        const name = getState().pokedex.name
        const search = name ? `&name__regex=/${name}/` : ''
        const request = axios.get(`${URL} ${search}`)
         .then(resp => dispatch({type: 'NAME_SEARCHED', payload: resp.data}))
    }
}

export const clear = () => {
    return [{type: 'NAME_CLEAR'}, search()]
}