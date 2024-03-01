import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="#" target="_blank">
              <img src="/img/fb.png" alt="logo facebook" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="/img/tw.png" alt="logo twitter" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="/img/ig.png" alt="logo instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section className="footer-marca">
        <img src="/img/logotipo.png" alt="logo da expogrow" />
        <h2>ExpoGrow</h2>
      </section>
      <section>
        <p>Desenvolvido por Ilky André</p>
      </section>
    </footer>
  );
};

export default Rodape;
