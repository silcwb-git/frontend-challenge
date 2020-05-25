import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { clear, changeName, search } from './pokedexActions'

class Formulario extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const{ clear, search, name } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : this.props.handleChange()
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const {search, name} = this.props
        return(
            <div role='form' className='pokedexForm' > 
                 <Grid cols='12 9 10'>
                    <input id='name' className='form-control'
                         placeholder='Digite o nome do Pokémon'
                         onChange={this.props.changeName}
                         onKeyUp={this.keyHandler}
                         value={this.props.name}></input>
                 </Grid>
                 <Grid cols='12 3 1' >
                    <IconButton style='info' icon='search' 
                        onClick={search} ></IconButton>
                    <IconButton style='default' icon='close' 
                        onClick={this.props.clear}></IconButton>
                 </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({name: state.pokedex.name})
const mapDispatchToProps = dispatch =>
      bindActionCreators({clear, changeName, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Formulario)
   
