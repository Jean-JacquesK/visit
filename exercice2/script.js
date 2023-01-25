import { createElement } from "react";

// const Pet = (props) => {
//   return (
//     <div className='pet'>
//       <h1>{props.name}</h1>
//       <h2>{props.animal}</h2>
//       <h3>{props.breed}</h3>
//     </div>
//   );
// };

// const App = () => {
//   return <Pet name='Jumpix' animal='Chien' breed='Cavalier King Charles' />;
// };

const Pet = (props) => {
  return createElement(
    "div",
    null,
    createElement("h1", null, props.name),
    createElement("h2", null, props.animal),
    createElement("h3", null, props.breed)
  );
};

const App = () => {
  return createElement(Pet, {
    name: "Jumpix",
    animal: "dog",
    breed: "Cavalier King Charles",
  });
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
