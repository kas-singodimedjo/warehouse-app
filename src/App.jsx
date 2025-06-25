import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
