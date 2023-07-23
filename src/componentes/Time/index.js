import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const corFundo = { backgroundColor: props.corSecundaria }

    return (
            (props.colaboradores.length > 0) && <section className='time' style={corFundo}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} contato={colaborador.contato} produto={colaborador.produto} imagem={colaborador.imagem} corCard={props.corPrimaria} />)}
            </div>
    
        </section>
    )
}

export default Time