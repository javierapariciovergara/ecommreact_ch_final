import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBarRB from './components/NavBarRB.jsx'
import ItemListContainer from './components/itemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { CartContext, CartProvider } from './context/CartContext.jsx'
import CartContainer from './components/CartContainer.jsx'
import CheckoutUseForm from './components/CheckoutUseForm.jsx'


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarRB />
        <Routes>
          
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Ecommerce" />} ></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoria: " />} ></Route>
          <Route path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>} ></Route>
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/checkout' element={<CheckoutUseForm />} />

        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
