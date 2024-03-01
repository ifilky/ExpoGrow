import './Colaborador.css'

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: props.corCard }}>
                <img src={props.imagem} alt={props.produto} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h4>Contato: {props.contato}</h4>
                <h5>{props.produto}</h5>
            </div>   
        </div>
    )
}

export default Colaborador