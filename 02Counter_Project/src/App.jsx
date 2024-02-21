import './App.css'

function App() {
  let counter = 5
  const AddValue = ()=>{
    console.log("Value Added", counter);
    counter++
    
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={AddValue}>Add Value</button>
      <br />
      <button>Remove Value</button>
    </>
  )
}

export default App
