import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { About } from '../page/About';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';


export const AppRouter = () => {
    return (

        <>
            <Navbar />
            <Routes>

                <Route path="/about" element={<About />} />
                <Route path="/" element={<Container />} />

            </Routes>
            <Footer />
        </>



    )
}
