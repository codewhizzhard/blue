import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css"
import Layout from "./components/layout";
import LandingPage from "./pages/landingPage";
import { SignUp } from "./pages/signUp";
import ProtectedRoute from "./components/protectedRoute";
import Clothings from "./pages/product/clothings";
import Login from "./pages/Login";
import Interiors from "./pages/product/interiors";
import Bespoke from "./pages/product/bespoke";
import Contact from "./pages/contact";
import ProductDetail from "./pages/product/productDetail";
import Cart from "./pages/product/cart";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
            {/* protected Route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/clothings" element={<Clothings />}/>
            <Route path="/clothings/:id" element={<ProductDetail />}/>
            {/*  */}
            <Route path="/interiors" element={<Interiors />} />
            <Route path="/interiors/:id" element={<ProductDetail />} />
            {/*  */}
            <Route path="/bespoke" element={<Bespoke />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          {/* end of potected route*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
