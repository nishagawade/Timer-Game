import { useState , useRef} from "react";

export default function Player() {

  const [enteredPlayerName, setEnteredPlayerName] = useState('')
 
  const playerName = useRef()



  function handleSubmit (){
    setEnteredPlayerName(playerName.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ? enteredPlayerName : 'Unknown Entitiy'}</h2>
      <p>
        <input type="text"  ref = {playerName}/>
        <button onClick = {handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
