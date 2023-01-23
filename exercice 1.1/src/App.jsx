import React, { useState } from "react";
import PeopleList from "./components/PeopleList";
import peopleData from "./peopleData";

function App() {
  const [data, setData] = useState(peopleData);
  return (
    <>
      <h1 className="text-3xl bold">
        Voici une liste de {data.length} personnes :
      </h1>
      <button className="bg-blue" onClick={() => setData([])}>
        Vider la liste
      </button>
      <PeopleList data={data} />
    </>
  );
}

export default App;
