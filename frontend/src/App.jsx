import { useState } from 'react'
import { BrowserRouter, Route ,Routes,useNavigate} from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
import SendMoney from './components/SendMoney'
import Home from './components/Home'
import './App.css'
import { Footer } from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/send' element={<SendMoney></SendMoney>}></Route>
      <Route path='/signin' element={<Signin></Signin>}></Route>
      
     </Routes>
    <Footer></Footer>
    
     </BrowserRouter>
      
    </>
  )
}

export default App
