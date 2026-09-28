import './App.css'
import About from './components/About'
import Home from "./components/Home"

function App() {
  return (
    <>
      <h1>hello</h1>
      <Home data1 = "data1"  data3 = "data3"/>
      <About fname = "Ram" lname = "patel" age = {5}/>
    </>
  )
}

export default App
