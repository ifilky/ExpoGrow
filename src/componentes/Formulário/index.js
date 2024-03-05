import { useState } from "react";
import Botao from "../Botão";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [produto, setProduto] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [corCategoria, setCorCategoria] = useState("");

  const aoEnviar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      contato,
      produto,
      imagem,
      categoria,
    });
    setNome("");
    setContato("");
    setProduto("");
    setImagem("");
    setCategoria("");
  };

  return (
    <section id="form" className="formulario">
      <form onSubmit={aoEnviar}>
        <h2>Preencha os dados para criar os dados da exposição</h2>
        <Campo
          type="text"
          obrigatorio={true}
          label="Nome da empresa ou pessoa responsável"
          placeholder="Digite o seu nome ou da sua empresa"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          type="text"
          obrigatorio={true}
          label="Contato do vendedor"
          placeholder="Informe o seu número de contato"
          valor={contato}
          aoAlterado={(valor) => setContato(valor)}
        />
        <Campo
          type="text"
          obrigatorio={true}
          label="Produto"
          placeholder="Digite o nome do produto"
          valor={produto}
          aoAlterado={(valor) => setProduto(valor)}
        />
        <Campo
          type="text"
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe o URL da imagem do produto"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Categoria"
          itens={props.categorias}
          valor={categoria}
          aoAlterado={(valor) => setCategoria(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.cadastrarCategoria({ nome: nomeCategoria, cor: corCategoria });
          setNomeCategoria("");
          setCorCategoria("");
        }}
      >
        <h2>Preencha os dados para criar uma nova categoria</h2>
        <Campo
          type="text"
          obrigatorio={true}
          label="Nome da categoria a ser adicionada"
          placeholder="Digite o nome da categoria"
          valor={nomeCategoria}
          aoAlterado={(valor) => setNomeCategoria(valor)}
        />
        <Campo
          type="color"
          obrigatorio={true}
          label="Cor"
          placeholder="Escolha a cor"
          valor={corCategoria}
          aoAlterado={(valor) => setCorCategoria(valor)}
        />
        <Botao>Criar categoria</Botao>
      </form>
    </section>
  );
};

export default Formulario;
