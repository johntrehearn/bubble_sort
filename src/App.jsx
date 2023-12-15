import { useState } from 'react';
import Word from './wordEntry';
import Output from './output';



function App() {
  const [wordEnt, setWordEnt] = useState(" ")

  function handleEntry(event) {
    setWordEnt(event.target.value);
  }

  console.log(wordEnt);

  return (
    <>
    <div>

     <h1>JT Palindrome Checker</h1>
     <h3>Please enter the word to check:</h3>
     <Word wordEnt={wordEnt} checkPal={handleEntry}/>
     <Output wordEnt={wordEnt}/>
      

    </div>

    </>
  )
}

export default App
