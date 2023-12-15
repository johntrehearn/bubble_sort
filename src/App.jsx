import { useState } from 'react';
import Output from './output';
import ArrayEnter from './arrayEntry';



function App() {
  const [arrayEnt, setArrayEnt] = useState(" ")

  function handleEntry(event) {
    setArrayEnt(event.target.value);
  }

  console.log(arrayEnt);

  return (
    <>
    <div className='main'>

    <div className='mainBoard'>

     <h1>JT Bubble Sorter</h1>
     <ArrayEnter arrayEnt={arrayEnt} checkArray={handleEntry}/>
     <Output arrayEnt={arrayEnt}/>
      

    </div>
    </div>

    </>
  )
}

export default App
