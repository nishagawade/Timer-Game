import React from 'react'
import {useState , useRef} from 'react'
import ResultModal from './ResultModal';
//Refs can manage any kind of value
//Refs will store the value and make sure it doesn"t gets lost when the component re-executes

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef()
   
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart(){
       timer.current =  setTimeout(() => {
            setTimerExpired(true)
        }, targetTime*1000);

        setTimerStarted(true)
    }

    function handleStop(){
        clearTimeout(timer.current)
    }

  return (
    <>
    {timerExpired && <ResultModal targetTime={targetTime} result="You lost"/>}
    <section className = 'challenge'> 
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className= 'challenge-time'>{targetTime} second{targetTime > 1  ? 's' : ''}</p>
       <p>
        <button onClick = {timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} challenge</button>
       </p>
       <p className = {timerStarted ? 'active' : undefined}>{timerStarted ? 'Timer is Running...' : 'Timer Inactive'}</p>
    </section>
    </>
    
  )
}
