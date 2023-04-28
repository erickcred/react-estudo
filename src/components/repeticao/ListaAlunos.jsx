import alunos from '../../data/alunos'

const ListaAlunos = () => {
    return (
        <div>
            <h2>Lista Aluno notas</h2>
            <ul style={{listStyle: 'none'}}>
            {alunos.map((aluno) => (
                <li key={aluno.id}>
                    #{aluno.id} - {aluno.nome} - {aluno.nota}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ListaAlunos