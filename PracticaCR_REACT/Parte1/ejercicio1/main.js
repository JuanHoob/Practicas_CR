const TituloPractica = React.createElement(
  "h1",
  { class: "main-header" },
  "Mi primer componente React"
);

const rootDiv = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootDiv);
reactRoot.render(TituloPractica);
