import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './Components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/sign-in' element={<SignIn/>}/>
        <Route exact path='/sign-up' element={<SignUp/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
