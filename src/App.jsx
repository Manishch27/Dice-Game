import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Game from './components/Game';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path = "/game" element={<Game/>} />
    </Routes>
    </>
  )
}

export default App
