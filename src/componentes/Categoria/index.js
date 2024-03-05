import Colaborador from "../Colaborador";
import "./Categoria.css";

const Categoria = ({ categorias, colaboradores, corSecundaria, corPrimaria, nome, aoDeletar, mudarCor }) => {
  const corFundo = { backgroundColor: corSecundaria };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={corFundo}>
        <input value={corPrimaria} onChange={(event) => mudarCor(event.target.value, categorias.id)} type="color" className="input-color"/>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.id}
                id={colaborador.id}
                nome={colaborador.nome}
                contato={colaborador.contato}
                produto={colaborador.produto}
                imagem={colaborador.imagem}
                corCard={corPrimaria}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Categoria;
