import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './Pages/Home'
import Footer from './components/Footer'
import ProductListing from './Pages/ProductListing'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path={"/"} exact={true} element={<Home/>} />
    <Route path={"/productListing"} exact={true} element={<ProductListing/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
