import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Cart from "./pages/cart"
import Navbar from "./componant/navbar"
import Singleproduct from "./pages/singleproduct"
import { Provider } from "react-redux"
import store from "./store/store"

function App() {

  return (
    <div className="App">
      <Provider store={store}> 
      <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
            <Route path="/cart" element={<Cart/>} />
         </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
