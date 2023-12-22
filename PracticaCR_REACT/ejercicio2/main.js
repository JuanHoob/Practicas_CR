const TituloPractica = (
  <h1 className="main-header">Mi primer componente React con JSX</h1>
);

const Paragraph = <p className="paragraph">JSX es mi amigo</p>;

const Name = "Juan";

const Paragraph2 = <p className="paragraph">Mi nombre es: {Name}</p>;

const rootDiv = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootDiv);

reactRoot.render([TituloPractica, Paragraph, Paragraph2]);
