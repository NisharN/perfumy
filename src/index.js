import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Product from './components/Product';
import About from './components/About';
import Footer from './components/Footer';

const root=ReactDOM.createRoot(document.getElementById('root'));  

root.render(
<div>
<Navbar/>
<Search/>
<Product/>
<About/>
<Footer/>
</div>

);