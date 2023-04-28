import { useState } from "react"

import Button from "../contador/Button"
import DivPassoForm from '../contador/DivPassoForm'

const Megasena = () => {
    const [numeros, setNumeros] = useState([])
    const [quantidade, setQuantidade] = useState(5)
    
    const gerarNumeroUnitario = () => {
        const max = quantidade + 1
        const numeroAleatorio = parseInt(Math.random() * (1 - max) + max)
        if (!numeros.includes(numeroAleatorio)) {
            setNumeros([...numeros, numeroAleatorio])
        }
    }
    
    
    const [quantidadeMega, setQuantidadeMega] = useState(6)
    const [nMega, setNMega] = useState(Array(quantidadeMega).fill(0))

    const gerarMegasena = (min, max, array) => {
        const aleatorio = parseInt(Math.random() * (max - min) + min)

        return array.includes(aleatorio) ? 
            gerarMegasena(min, max, array) :
            aleatorio
    }

    const gerarNumerosMaga = () => {
        const numeros = Array(quantidadeMega)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarMegasena(1, 60, nums)
                return [ ...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)
        return numeros
    }

    return (
        <>
            <div>
                <h3>Sorteador Unitário</h3>
                <DivPassoForm
                    tituloForm="Qtn de números a ser gerada"
                    tipo="number"
                    inputValue={quantidade}
                    eventoChange={(e) => setQuantidade(e)}
                />
                <Button
                    texto="+"
                    eventoClick={() => gerarNumeroUnitario()}
                />
                <br />
                {numeros.map((item) => 
                    (<span key={item}>{item + ', '}</span>)
                )}
            </div>

            <br /><hr /><br />
            
            <div>
                <h3>Sorteador MegaSena</h3>
                <DivPassoForm
                    tituloForm="Qtn de números a ser gerada"
                    tipo="number"
                    inputValue={quantidadeMega}
                    eventoChange={(e) => setQuantidadeMega(e)}
                />
                <Button
                    texto="+"
                    eventoClick={() => setNMega(gerarNumerosMaga())}
                />
                <br />
                {nMega.join(', ')}
            </div>
        </>
    )
}

export default Megasena