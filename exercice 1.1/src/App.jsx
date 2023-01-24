import React, { useState } from "react";
import PeopleList from "./components/PeopleList";
import Title from "./components/Title";
import peopleData from "./peopleData";

function App() {
  const [data, setData] = useState(peopleData);
  return (
    <div>
      <Title />
      <div className='my-5'>
        <h2 className='text-3xl bold p2'>
          Voici une liste de {data.length} personnes :
        </h2>
        <PeopleList data={data} />{" "}
        <button
          className=' bg-slate-300 p-4 text-2xl rounded-lg'
          onClick={() => setData([])}
        >
          Vider la liste
        </button>
      </div>
    </div>
  );
}

export default App;
