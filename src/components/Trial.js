import React, { useState } from 'react'

const Trial = () => {
    const [count, setCount] = useState(10);
    const [name, setName] = useState("");
    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
    }
  return (
    <div>
     <p>current count value is {count}</p>
     <button onClick={increment} className='btn btn-primary'>+</button> 
     <button onClick={decrement} className='btn btn-danger'>-</button> 
    </div>
  )
}

export default Trial
