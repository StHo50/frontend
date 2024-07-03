import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Matching from './components/Apartment-Matching/Matching';
import CustomerReviewsPage from './components/Customer-Reviews/CustomerReviewsPage';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Homepage/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/customerreviewspage" element={<CustomerReviewsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
