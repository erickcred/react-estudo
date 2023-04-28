const IndiretaFilho = (props) => {
    return (
        <div>
            <div>
                Filho
            </div>

            <button
                type="button"
                onClick={() => props.quandoClicar('João', 30, true)}>
                    Fornercer Informações
            </button>
        </div>
    )
}

export default IndiretaFilho