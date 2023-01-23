import React, { useState } from "react";
import PeopleList from "./components/PeopleList";
import peopleData from "./peopleData";

function App() {
  const [data, setData] = useState(peopleData);
  return (
    <div style={{ height: 50 }}>
      <h1 className='text-3xl bold p2'>
        Voici une liste de {data.length} personnes :
      </h1>
      <PeopleList data={data} />{" "}
      <button
        className=' bg-slate-300 p-4 text-2xl rounded-lg'
        onClick={() => setData([])}
      >
        Vider la liste
      </button>
    </div>
  );
}

export default App;
