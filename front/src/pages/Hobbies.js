import '../App';
import React from "react";
import '../App.css';

import HobElement from "../components/HobElement";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Form from "../components/Form";

export default function Hobbies() {

    return (
    <div>
        <header>
            <Navbar/>
            <Header/>   
        </header>
        

        <main className=' bg-black'>
            <div className="container mx-auto py-6 sm:px-6 lg:px-8">
                <HobElement/>
            </div>
        </main>

        <footer>
            <Form/>
        </footer>

    </div>
        
    )
}