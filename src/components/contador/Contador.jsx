import { Component } from "react"

import './Contador.css'
import Button from "./Button"
import Display from './Display'
import DivPassoForm from './DivPassoForm'

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    incrementar = () =>  {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementar() {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {

        return (
            <div className="Contador">
                <h2>Contador</h2>
                <DivPassoForm 
                    tituloForm="Valor para incremento/decremento"
                    tipo="number"
                    inputValue={this.state.passo}
                    eventoChange={this.setPasso}/>

                <Display texto={this.state.numero} />
                
                <Button
                    texto="-"
                    eventoClick={() => this.decrementar()}
                />
                <Button
                    texto="+"
                    eventoClick={this.incrementar}
                />
            </div>
        )
    }
}

export default Contador