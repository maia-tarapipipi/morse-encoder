'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import { FaMinusSquare } from 'react-icons/fa'

function Counter() {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
  }

  function subtract() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className="h-1/2 w-1/2 flex justify-center">
      <h1>Counter</h1>
      <BsPlusSquareFill size={42} onClick={() => add()} />
      <FaMinusSquare size={42} onClick={() => subtract()} />
      <button onClick={() => reset()}>Reset</button>
      <p>{count}</p>
    </div>
  )
}
export default Counter
