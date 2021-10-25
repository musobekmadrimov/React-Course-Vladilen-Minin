import React, { useState, useEffect, useRef } from "react";

function App() {

  const [value, setvalue] = useState('Some Text')
  const initialState = useRef(0)
  const inputRef = useRef(null)
  const prevValue = useRef('');

  useEffect(() => {
    initialState.current++
    
  })

  useEffect(() => {
    prevValue.current = value

  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Page is rendered {initialState.current} times!</h1>
      <h1>Last value: {prevValue.current}</h1>
      <input ref={inputRef} type="text" onChange={e => setvalue(e.target.value)} value={value}/>
      <button className="btn btn-success" onClick={focus}>OK</button>
    </div>
  );
}

export default App;
