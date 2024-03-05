import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({ corCard, imagem, produto, nome, contato, aoDeletar, id }) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)} />
            <div className='cabecalho' style={{ backgroundColor: corCard }}>
                <img src={imagem} alt={produto} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h4>Contato: {contato}</h4>
                <h5>{produto}</h5>
            </div>   
        </div>
    )
}

export default Colaborador