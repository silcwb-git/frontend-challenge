import React from 'react'
import { connect } from 'react-redux'

const Lista = props => {

    const renderRows = () => {

        const list = props.list || []
        return list.map(pokedex => (
            <tr key={pokedex._id}>
                <td>
                    {pokedex.name}
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.pokedex.list})
export default connect(mapStateToProps)(Lista)
   



