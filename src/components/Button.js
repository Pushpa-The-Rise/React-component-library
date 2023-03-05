import React from 'react'

export const Button = () => {
  const [count, setCount] = React.useState(0)

  const onCount = () => {
    setCount(count + 1)
  }

  const onMinues = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={onCount}>Add</button>
      <h1>{count}</h1>
      <button onClick={onMinues}>Minus</button>
    </div>
  )
}
