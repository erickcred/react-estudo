const ParOuImpar = (props) => {
    return (
        <div>
            <h2>Par/Impar Condicional</h2>
            
            {props.num % 2 === 0 ? (
                <span>{props.num} é Par</span>
            ) : (
                <span>{props.num} é Impar</span>
            )}
        </div>
    )
}

export default ParOuImpar