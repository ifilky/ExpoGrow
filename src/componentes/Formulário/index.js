import { useState } from 'react'
import Botao from '../Botão'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [contato, setContato] = useState('')
    const [produto, setProduto] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoEnviar = (evento) =>  {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            contato,
            produto,
            imagem,
            categoria
        })
        setNome('')
        setContato('')
        setProduto('')
        setImagem('')
        setCategoria('')
    }

    return (
        <section id='form' className='formulario'>
            <form onSubmit={aoEnviar}>
                <h2>Preencha os campos para criar os dados da exposição</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome da empresa ou pessoa responsável"
                    placeholder="Digite o seu nome ou da sua empresa"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Contato do vendedor"
                    placeholder="Informe o seu número de contato"
                    valor={contato}
                    aoAlterado={valor => setContato(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Produto"
                    placeholder="Digite o nome do produto"
                    valor={produto}
                    aoAlterado={valor => setProduto(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Informe o URL da imagem do produto"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Categoria"
                    itens={props.times}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario