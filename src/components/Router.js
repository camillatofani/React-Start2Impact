import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import App from '../App';
import Recipe from './Recipe/Recipe';
import Footer from './Layout/Footer';

const Router = () => (
    <BrowserRouter>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path='/' element={<App />} exact />
                <Route path='/recipe/:id' element={<Recipe />} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
);

export default Router;