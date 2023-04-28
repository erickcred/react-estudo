const Aleatorio = (props) => {
    const { min, max } = props
    const ale = Math.floor(
        Math.random() * (max - min) + min
    )

    return (
        <>
            <h2>Valor Aleatório</h2>
            <p>Valor Mínimo: {min}</p>
            <p>Valor Máximo: {max}</p>
            <hr />
            <p>O número aleatorio é {ale}</p>
        </>
    )
}

export default Aleatorio