import { useState } from 'react'
import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Login from "./pages/login/Login.jsx";
import Rack from "./components/rack/Rack.jsx";

function App() {
  const [rack, setRack] = useState(0)
  const [shelf, setShelf] = useState(0)
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/rack/:id" element={<Rack/>}></Route>}
      </Routes>
    </>
  )
}

export default App
