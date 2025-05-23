import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProducts from './pages/CompareProducts';
import Wishlist from './pages/Wishlist';
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';
import Login from './pages/login';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="product" element={<OurStore/>}/>
            <Route path="product/:id" element={<SingleProduct/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="blogs" element={<Blog/>}/>
            <Route path="blog/:id" element={<SingleBlog/>}/>
            <Route path="compare-product" element={<CompareProducts/>}/>
            <Route path="wishlist" element={<Wishlist/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="forgot-password" element={<Forgotpassword/>}/>         
            <Route path="reset-password" element={<Resetpassword/>}/> 
            <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="refund-policy" element={<RefundPolicy/>}/>
            <Route path="shipping-policy" element={<ShippingPolicy/>}/>
            <Route path="term-conditions" element={<TermAndConditions/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
