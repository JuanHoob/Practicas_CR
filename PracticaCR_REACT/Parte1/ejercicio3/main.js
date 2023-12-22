const Greeting = (props) => {
  return <p>Hola, soy {props.userName}</p>;
};
const userName1 = "Juan";
const userName2 = "Maria";
const UserName3 = "Pello";

const rootDiv = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootDiv);
reactRoot.render(
  <>
    <Greeting userName={userName1} />
    <Greeting userName={userName2} />
    <Greeting userName={UserName3} />
  </>
);
