
import Header from "./components/Header"
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Products from "./pages/Products";
import ProductDescription from "./pages/ProductDescription";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<ProductDescription/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>

      </Routes>
      
    </>
  )
}

export default App  
