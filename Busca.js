import React, {Component} from 'react'
import Cartao from './Cartao'
export default class Busca extends Component {

    constructor(props){
        super(props)
        this.state = { 
            dados: [],
        }
        this.buscar = this.buscar.bind(this)
        
    }

     buscar(){
        
        let url = 'https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL' 
        fetch(url)
        .then( (resultado) => {
            
        return resultado.json()
            
        })
        .then((resultado) => {
            var values = Object.values(resultado)
          this.setState({dados: values})
            console.log(this.state.dados)
        })
    }

    render(){
        return(
            <div>
                <input type='button' onClick={this.buscar} value="Mostrar" />
                <div style={container}>
                {
                           this.state.dados.map((item) => {
                               return(
                               <Cartao nome={item.name} valor={item.high} />)
                           })
                    
                }
                    
                </div>
            </div>
        )
    }
}

const container = {
    display: 'flex',
    flexDirection: 'row'
}