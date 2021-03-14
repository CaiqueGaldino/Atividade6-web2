import React, {Component} from 'react'

class Cartao extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={cartaoEstilo}>
                <p>Nome: {this.props.nome}</p>
                <p>Valor: {this.props.valor}</p>
            </div>
        )
    }
}

const cartaoEstilo ={
    backgroundColor: '#665',
    border: '1px solid',
    textAling: 'center',
    color: 'white',
    width: '300px',
    heigth: '220px',
    margin: '30px'
}

export default Cartao