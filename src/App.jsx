import './App.css'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProduto from './components/repeticao/TabelaProduto'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/controlado/formulario/Input'
import Contador from './components/contador/Contador'
import Megasena from './components/Mega/Megasena'

const App = () => {
    return (
        <>
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card
                    titulo="#12 - TEste"
                    color="#b88542"
                >
                    <Megasena />
                </Card>

                <Card
                    titulo="#11 - Contador"
                    color="#23ddaf"
                >
                    <Contador numeroInicial={10} />
                </Card>

                <Card
                    titulo="#10 - Componente Controlado (Input)"
                    color="#a1a1a1"
                >
                    <Input />
                </Card>

                <Card
                    titulo="#09 - Comunicação direta"
                    color="#191233"
                >
                    <IndiretaPai />
                </Card>
                
                <Card
                    titulo="#09 - Comunicação direta"
                    color="#332412"
                >
                    <DiretaPai />
                </Card>

                <Card
                    titulo="#08 - Sudação Condicional"
                    color="#9932ee"
                >
                    <h2>Saudação Condicional</h2>
                    <UsuarioInfo usuario={{ nome: "Erick" }} />
                    <UsuarioInfo usuario={{  }} />
                    <UsuarioInfo usuario={{ nome: "Jessica" }} />
                </Card>

                <Card
                    titulo="#07 - Par ou Import Condicional"
                    color="#cbee32"
                >
                    <ParOuImpar num={1}></ParOuImpar>
                </Card>

                <Card
                    titulo="#06 - Repetição Tabela de Produtos"
                    color="#b00022"
                >
                    <TabelaProduto></TabelaProduto>
                </Card>

                <Card
                    titulo="#05 - Repetiçaão Lista Alunos"
                    color="#6cd344"
                >
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card
                    titulo="#04 - Components com Filhos"
                    color="#00f0f0"
                >
                    <Familia sobrenome="Rodrigues de">
                        <FamiliaMembro nome="Erick" />
                        <FamiliaMembro nome="Jessica" />
                        <FamiliaMembro nome="Maily" />
                    </Familia>
                </Card>

                <Card
                    titulo="#03 - Desafio Aleatório"
                    color="#006188"
                >
                    <Aleatorio min={1} max={10}/>
                </Card>

                <Card 
                    titulo="#02 - Componente com Paramentros"
                >
                    <ComParametro
                        titulo="Segundo componente Titulo"
                        subtitulo="sub titulo"
                    />
                </Card>
                
                <Card
                    titulo="#01 - Primeiro Componente"
                    color="#680088"
                >
                    <Primeiro></Primeiro>
                </Card>
            </div>
            
        </>
    )
}

export default App