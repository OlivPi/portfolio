import '../App';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default function NotFound() {

    return (
        <div className=' bg-black'>
            <header>
                <Navbar/>
                <Header/>   
            </header>
            <main className='container mx-auto p-13 py-6 sm:px-6 lg:px-8 bg-black m-6 grid grid-cols-1 gap-y-4 space-x-5 font-sans text-white'>
                <div className="">
                <h1 className='text-4xl font-bold'>404 - Not Found!</h1>
                    <Link to="/">
                    Revenez vers la homepage ;)
                    </Link>
                </div>
            </main>
        </div>
    );

}
