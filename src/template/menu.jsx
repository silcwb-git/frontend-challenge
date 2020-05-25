import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-github-alt' > </i>  Challenge Front End | Pokédex
                </a>
            </div> 

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href='#/pokedex'>Pokédex</a></li>
                </ul>
            </div>
        </div>
    </nav>
)