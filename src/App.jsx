import React from 'react' 
import Navbar from "./components/Navbar/navbar"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/PlaceOrder/Placeorder'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <div  className='app'> 
      <Navbar />
      <Routes>
        <Route name='home' path='/' element={<Home />} />
        <Route name='cart' path='/cart' element={<Cart />} />
        <Route name='placeorder' path='/order' element={<Placeorder />} />
      </Routes>
    </div>
      <Footer />
    </>
  )
}

export default App
