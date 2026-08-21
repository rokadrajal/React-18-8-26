import Foot from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'

const cssStyle = {
  fontSize : "100px",
  backgroundColor : "pink",
  paddingTop : "100px",
  marginLeft : "200px"
 
}
const name = "ram";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Foot />
      <h1 style={{color:"red" , fontFamily :"Ariel" , backgroundColor : "blue" , paddingTop : "100px",}}onMouseEnter={(e) => (e.currentTarget.style.color = "blue")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "red")}>Hello</h1>
      <b style={cssStyle} onMouseEnter={(e) => (e.currentTarget.style.color = "blue")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "red")} >world</b>

      <h1>Hello {name}</h1>

    </>

  );
}



export default App;
