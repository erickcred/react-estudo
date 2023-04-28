import Display from "./Display"

const DivPassoForm = (props) => {
    return (
        <div>
            <Display
                texto={props.tituloForm}
            />
            <input
                type={props.tipo}
                value={props.inputValue}
                onChange={(e) => props.eventoChange(+e.target.value)}
            />
        </div>
    )
}

export default DivPassoForm