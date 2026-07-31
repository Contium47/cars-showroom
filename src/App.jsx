import { Routes } from 'react-router';
import { Route } from 'react-router';

import HomePage from './pages/HomePage';
import VehiclePage from './pages/VehiclePage';

import './App.css'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/vehicles/:id' element={<VehiclePage />}></Route>
      </Routes>
    </div>
  )
}

export default App
