const INITIAL_STATE = { name: '', list:[] }
   /*  name: 'teste fixo',
    list: [{
        _id: '1',
        name: 'Bulbasauro'
    }, {
        _id: '2',
        name: 'Pikachú'
    }, {
        _id: '3',
        name: 'Charmander'
    }]
} */

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NAME_CHANGED':
            return{ ...state, name: action.payload }
        case 'NAME_SEARCHED':
            return{ ...state, list: action.payload }
        case 'NAME_CLEAR':
            return{ ...state, name: ''}
        default:
            return state
    }
}