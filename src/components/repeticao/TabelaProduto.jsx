import './TabelaProduto.css'
import produtos from '../../data/produto'

const TabelaProduto = () => {
    return (
        <div>
            <h2>Tabela Produtos</h2>
            <table className="TabelaProduto">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>
                                R$ {
                                    produto.preco.toFixed(2)
                                            .toString()
                                            .replace(".", ",")
                                    }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaProduto