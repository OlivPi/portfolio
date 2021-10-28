import '../App';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import Header from '../components/Header';

export default function NotFound() {

    return (
        <div className='bg-black h-screen'>

                <Header/>   
            <main className='p-40 bg-black font-sans text-white flex flex-col justify-center'>
                <div className='flex flex-col text-center'>
                    <h1 className='text-4xl font-bold'>404 - Not Found!</h1>
                    <Link to="/">
                    Revenez vers la homepage ;)
                    </Link>
                </div>
            </main>
        </div>
    );

}
