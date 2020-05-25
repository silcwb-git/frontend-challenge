import React from 'react'
 
import PageHeader from '../template/pageHeader'
import PokedexForm from './pokedexForm'
import PokedexList from './pokedexList'

export default props => (
    <div>
         <PageHeader name='Pokédex' small='Pokémons List'></PageHeader>
         <PokedexForm/>
         <PokedexList/>
    </div>
)

