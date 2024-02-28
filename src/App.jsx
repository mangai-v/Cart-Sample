import React, { createContext, useState } from 'react'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
export const cartContext = createContext()
const App = () => {
  const [cart,setCart] = useState([])
  return (
   <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
        <Header cart={cart}></Header>
        <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        </div>
      </BrowserRouter>
    
   </cartContext.Provider>
  )
}

export default App