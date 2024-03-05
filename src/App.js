import { useState } from "react";
import Carrossel from "./componentes/Carrossel/index.js";
import Formulario from "./componentes/Formulário/index.js";
import Menu from "./componentes/Menu/index.js";
import Categoria from "./componentes/Categoria/index.js";
import Rodape from "./componentes/Rodape/index.js";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [categorias, setCategorias] = useState([
    {
      id: uuidv4(),
      nome: "Frutas e Vegetais",
      cor: "#57C278"
    },
    {
      id: uuidv4(),
      nome: "Hortaliças e Folhas Verdes",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Produtos Lácteos",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Ovos",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "Carnes e Aves",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Produtos de Panificação",
      cor: "#FFBA05",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      contato: "(82) 94002-8922",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      categoria: categorias[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      contato: "(79) 99934-0923",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      categoria: categorias[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      categoria: categorias[0].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      categoria: categorias[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      contato: "(82) 40028922",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      categoria: categorias[1].nome,
    },
    {
      id: uuidv4(),
      nome: "DANIEL ARTINE",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      categoria: categorias[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      categoria: categorias[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      categoria: categorias[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      contato: "(82) 40028922",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      categoria: categorias[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      categoria: categorias[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      categoria: categorias[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      categoria: categorias[2].nome,
    },
    {
      id: uuidv4(),
      nome: "JULIANA AMOASEI",
      contato: "(82) 40028922",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      categoria: categorias[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      categoria: categorias[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      categoria: categorias[3].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      categoria: categorias[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      contato: "(82) 40028922",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      categoria: categorias[4].nome,
    },
    {
      id: uuidv4(),
      nome: "DANIEL ARTINE",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      categoria: categorias[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      categoria: categorias[4].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      categoria: categorias[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      contato: "(82) 40028922",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      categoria: categorias[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      categoria: categorias[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      categoria: categorias[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      contato: "(11) 98155-6783",
      produto: "Produto",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      categoria: categorias[5].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]); //concatenando todos os colaboradores anteriores com o novo colaborador recebido e alterando (atualizando) o state do array colaboradores
  };

  function deletarColaborador(id){
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
      )
  }

  function mudarCor(cor, id){
    setCategorias(categorias.map(categoria => {
      if(categoria.id === id){
        categoria.cor = cor
      }
      return categoria;
    }))
  }

  function cadastrarCategoria(novaCategoria){
    setCategorias([ ...categorias, {... novaCategoria, id: uuidv4()}]) 
  }

  return (
    <div className="App">
      <Menu />
      <Carrossel />
      <Formulario
        cadastrarCategoria={cadastrarCategoria}
        categorias={categorias.map((categoria) => categoria.nome)} // Passando como props para o componente Formulário apenas o nome de cada objeto do array categorias
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorCadastrado(colaborador)
        }
      />

      {categorias.map((categoria) => {
        return (
          <Categoria
          key={categoria.id}
          categoria={categoria}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.categoria === categoria.nome
          )}
          />
        );
      })}
      <Rodape />
    </div>
  );
}

export default App;
