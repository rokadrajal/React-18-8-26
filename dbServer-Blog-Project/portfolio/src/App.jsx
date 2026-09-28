import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skills'
import Project from './components/Projects'
import Certificate from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import './App.css'



function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/certificate' element={<Certificate/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
