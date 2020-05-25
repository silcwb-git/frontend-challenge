import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Pokemon from '../pokedex/pokedex'

export default props => (
    <Router history={hashHistory}>
        <Route path='/pokedex' component={Pokemon} />
        <Redirect from='*' to='/pokedex' />
    </Router>
)