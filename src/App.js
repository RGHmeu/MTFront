import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import Menu from './components/Menu'
import ProductDetails from './pages/ProductDetails'
import MyContext from './components/myContext'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Menu' element={<Menu />}></Route>
          <Route path='/products/' element={<Products />}></Route>
          <Route path='/products/:texto/:nome/' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

