import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


/*****Start Frontend Route Links******** */
import FrontendLayout from './Components/Frontend/FrontendLayout';
import Home from './Components/Frontend/Pages/Home/Home';
import About from './Components/Frontend/Pages/About/About';
import Features from './Components/Frontend/Pages/Features/Features';
import Services from './Components/Frontend/Pages/Services/Services';
import Blog from './Components/Frontend/Pages/Blog/Blog';
import BlogDetails from './Components/Frontend/Pages/BlogDetails/BlogDetails';
import Product from './Components/Frontend/Pages/Product/Product';
import Cart from './Components/Frontend/Pages/Cart/Cart';
import Checkout from './Components/Frontend/Pages/Checkout/Checkout';
import Client from './Components/Frontend/Pages/Client/Client';
import Course from './Components/Frontend/Pages/Course/Course';
import FAQ from './Components/Frontend/Pages/FAQ/FAQ';
import Portfolio from './Components/Frontend/Pages/Portfolio/Portfolio';
import Pricing from './Components/Frontend/Pages/Pricing/Pricing';
import Team from './Components/Frontend/Pages/Team/Team';
import Testimonials from './Components/Frontend/Pages/Testimonials/Testimonials';
import Careers from './Components/Frontend/Pages/Careers/Careers';
import Login from './Components/Frontend/Pages/Login/Login';
import Register from './Components/Frontend/Pages/Register/Register';
import PrivacyPolicy from './Components/Common/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './Components/Common/TermsAndConditions/TermsAndConditions';
import Contact from './Components/Frontend/Pages/Contact/Contact';

import ComingSoon from './Components/Common/ComingSoon/ComingSoon';
import NoPage from './Components/Common/NoPage/NoPage';

/*****End Frontend Route Links******** */


function App() {
  return (

      // <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* FrontendLayout*/}
            <Route path="/" element={<FrontendLayout />}>
              <Route index element={<Home />} />     
              <Route path="about" element={<About />} />
              <Route path="features" element={<Features />} />
              <Route path="services" element={<Services />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog-details" element={<BlogDetails />} />
              <Route path="product" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="client" element={<Client />} />
              <Route path="course" element={<Course />} />
              <Route path="FAQ" element={<FAQ />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="team" element={<Team />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="careers" element={<Careers />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-conditions" element={<TermsAndConditions />} />
              <Route path="contact" element={<Contact />} />
              <Route path="coming-soon" element={<ComingSoon />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      // </Provider>
 
  );
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
