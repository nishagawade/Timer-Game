import React from 'react'

export default function ResultModal({result, targetTime}) {
  return (
   <dialog className = 'result-modal' open>
     <h2>You {result}</h2>
     <p>The TargetTime was strong <strong>{targetTime} seconds</strong></p>
     <p>You Stopped the timer with <strong>X seconds left</strong></p>
     <form method = 'dialog'>
        <button>close</button>
     </form>
   </dialog>
  )
}
