 import React, { useState } from 'react';
  import './login.css';

 function Counter() {
   const [count, setCount] = useState(0);
   const increment = () => {
     if (count<5){
      setCount(count + 1)

     }

   }  
      return (
     <div>
       <h1>Counter App</h1>
     <h2>Count: {count}</h2>
      <button onClick={() => increment() }>Increment</button>
     <button onClick={() => setCount(count - 1)}>Decrement</button>
     </div>
   )
   ;
 }
export default Counter;