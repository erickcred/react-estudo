import If, { Else } from './If'

const UsuarioInfo = (props) => {
    const { usuario } = props

    return (
        <div>
            {/* <If test={usuario.nome !== undefined}>
                Seja bem vindo <strong>{ usuario.nome }!</strong>
            </If>
            <If test={usuario.nome === undefined}>
                Seja bem vindo!
            </If> */}

            <If test={usuario.nome !== undefined}>
                Seja bem vindo <strong>{ usuario.nome }</strong>!

                <Else test={usuario.nome === undefined}>
                    Seja bem vindo <strong>amigão</strong>!
                </Else>
            </If>
        </div>
    )
}

export default UsuarioInfo