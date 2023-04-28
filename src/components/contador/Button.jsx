import './Button.css'

const Button = (props) => {
    return (
            <button
                type="text"
                onClick={props.eventoClick}
            >
                {props.texto}
            </button>
    )
}

export default Button