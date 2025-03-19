import React from 'react' 
import Navbar from "./components/Navbar/navbar"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/PlaceOrder/Placeorder'
import Footer from './components/Footer/Footer'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'; 
import Services from './pages/Services/Services'
import ContactUs from './pages/Contactus/ContactUs'

const App = () => {
  return (
    <>
    <div  className='app'> 
      <Navbar />
      <Routes>
          <Route name='home' path='/' element={<Home />} />
          <Route path='/menu' element={<FoodDisplay category="All" />} />
          <Route name='cart' path='/cart' element={<Cart />} />
          <Route name='placeorder' path='/order' element={<Placeorder />} />
          <Route name='services' path='/services' element={<Services />} /> 
          <Route name='contact' path='/contact' element={<ContactUs />} />

      </Routes>
    </div>
      <Footer />
      
    </>
  )
}

export default App
