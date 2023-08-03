import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  function add(){
    setCount(count + 1)
  }

  function subtract() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return <main>
    <div>
      <p>Counter</p>
      
    </div>
  </main>
}
