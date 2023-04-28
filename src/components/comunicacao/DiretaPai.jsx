import DiretaFilho from './DiretaFilho'

const DiretaPai = () => {
    return (
        <div>
            <DiretaFilho
                nome="Julia"
                idade={10}
                nerd={true}
            />

            <DiretaFilho
                nome="Gabriel"
                idade={10}
                nerd={false}
            />
        </div>
    )
}

export default DiretaPai