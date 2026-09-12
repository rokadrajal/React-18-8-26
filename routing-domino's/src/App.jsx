import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Components/Homepage';
import Pizza from './components/Pizza';
import Garlic from './components/Garlic';
import Desserts from './components/Desserts';
import Deals from './components/Deals';
import Cheese from './components/Cheese-volcano';

function App() {
  return (
    <section className='app'>
      <Header />
      <div className='dominos'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza' element={<Pizza/>}/>
          <Route path='/garlic' element={<Garlic/>}/>
          <Route path='/desserts' element={<Desserts/>}/>
          <Route path='/deals' element={<Deals/>}/>
          <Route path='/cheese' element={<Cheese/>}/>
        </Routes>
      </div>

    </section>
  )
}

export default App
