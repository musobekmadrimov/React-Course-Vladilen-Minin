import React, {useState} from 'react';


function App() {

  let [counter, setCounter] = useState(0)

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  function updateTitle(){
    setState((prevState) => {
      return {
        ...prevState,
        title: 'New Name'
      }
    })
  }

  return (
    <div>
     <h1 className="display-4">Counter</h1>
     <h3 className="display-4">{counter}</h3>

     <button className="btn btn-success" onClick={() => setCounter(++counter)}>Increment</button>
     <button className="btn btn-danger" onClick={() => setCounter(--counter)}>Decrement</button>
     <button className="btn btn-info" onClick={updateTitle}>Edit</button>

     <pre>
       {JSON.stringify(state, null, 2)}
     </pre>
    </div>
  );
}

export default App;
