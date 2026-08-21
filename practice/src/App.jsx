import "./App.css"
import Home from './components/Home'

const StudentDetails = [
  {
    studentName : "Rajal",
    collageName : "Shree Saurasta Collage of MGT & Computer Science",
    gender : "Female",
    age : "18",
  },

  {
    studentName : "Ansi",
    collageName : "Shree Saurasta Collage of MGT & Computer Science",
    gender : "Female",
    age : "18",
  },

  {
    studentName : "Sruti",
    collageName : "Shree Saurasta Collage of MGT & Computer Science",
    gender : "Female",
    age : "18",
  },

  {
    studentName : "Hiral",
    collageName : "Shree Saurasta Collage of MGT & Computer Science",
    gender : "Female",
    age : "18",
  },
  
  {
    studentName : "Krimal",
    collageName : "Shree Saurasta Collage of MGT & Computer Science",
    gender : "Female",
    age : "19",
  },
]

function App() {
  return (
    <Home data = {StudentDetails}/>
  )
}

export default App
