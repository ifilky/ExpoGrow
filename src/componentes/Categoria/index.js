import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Categoria.css";

const Categoria = ({ categoria, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {

  return (
    colaboradores.length > 0 && (
      <section className="time" style={{ backgroundColor: hexToRgba(categoria.cor, "0.6")}}>
        <input value={categoria.cor} onChange={(event) => mudarCor(event.target.value, categoria.id)} type="color" className="input-color"/>
        <h3 style={{ borderColor: categoria.cor }}>{categoria.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.id}
                id={colaborador.id}
                colaborador={colaborador}
                nome={colaborador.nome}
                contato={colaborador.contato}
                produto={colaborador.produto}
                imagem={colaborador.imagem}
                corCard={categoria.cor}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Categoria;
