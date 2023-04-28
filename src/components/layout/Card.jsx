import './Card.css'

const Card = (props) => {
    const style = {
        'backgroundColor': props.color || '#ff7300',
        'borderColor': props.color || '#ff7300'
    }

    return (
        <div className="Card" style={style}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

export default Card