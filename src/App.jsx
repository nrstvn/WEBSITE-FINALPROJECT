import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import About from './component/About/About'
import VisiMisi from './component/Visi/VisiMisi';
import TenagaPengajar from './component/Pengajar/TenagaPengajar';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Header />
      <Home />
      <About />
      <VisiMisi />
      <TenagaPengajar />
      </div>
  )
}

export default App
