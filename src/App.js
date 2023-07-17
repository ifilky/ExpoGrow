import { useState } from 'react';
import Carrossel from './componentes/Carrossel/index.js';
import Formulario from './componentes/Formulário/index.js';
import Menu from './componentes/Menu/index.js';
import Time from './componentes/Time/index.js';

function App() {

  const times = [
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
    {
      nome: 'Produtos Naturais e Cosméticos',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]) //concatenando todos os colaboradores anteriores com o novo colaborador recebido e alterando (atualizando) o state do array colaboradores
  }


  return (
    <div className="App">
      <Menu />
      <Carrossel />
      <Formulario
      times={times.map(time => time.nome)} // Passando como props para o componente Formulário apenas o nome de cada objeto do array times
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}
      />

      {times.map(time => {
        return <Time colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />
      })}

    </div>
  );
}

export default App;
