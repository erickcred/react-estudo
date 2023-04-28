import { useState } from "react"

import './Input.css'

const Input = () => {
    const [valor, setValor] = useState('')

    return (
        <div>
            <p>{valor}</p>
            <input
                type="text"
                className="Input"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
        </div>
    )
}

export default Input