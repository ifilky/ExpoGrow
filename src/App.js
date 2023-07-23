import { useState } from 'react';
import Carrossel from './componentes/Carrossel/index.js';
import Formulario from './componentes/Formulário/index.js';
import Menu from './componentes/Menu/index.js';
import Time from './componentes/Time/index.js';

function App() {

  const categorias = [
    {
      nome: 'Frutas e Vegetais',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Hortaliças e Folhas Verdes',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Produtos Lácteos',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Ovos',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Carnes e Aves',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Produtos de Panificação',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]) //concatenando todos os colaboradores anteriores com o novo colaborador recebido e alterando (atualizando) o state do array colaboradores
  }


  return (
    <div className="App">
      <Menu />
      <Carrossel />
      <Formulario
      times={categorias.map(categoria => categoria.nome)} // Passando como props para o componente Formulário apenas o nome de cada objeto do array categorias
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}
      />

      {categorias.map(categoria => {
        return <Time colaboradores={colaboradores.filter(colaborador => colaborador.categoria === categoria.nome)} key={categoria.nome} nome={categoria.nome} corPrimaria={categoria.corPrimaria} corSecundaria={categoria.corSecundaria} />
      })}

    </div>
  );
}

export default App;
