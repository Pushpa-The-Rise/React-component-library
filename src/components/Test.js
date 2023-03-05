import React from 'react'

export const Test = () => {
  const refText = React.useRef()

  const handleClick = () => {
    refText.current.innerHTML = 'Milan!'
  }

  return (
    <div>
      <h1 ref={refText}>Sachani</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}
