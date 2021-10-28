import '../App';
import React from "react";
import '../App.css';

import ExpElement from "../components/ExpElement";

import Header from "../components/Header";
import Form from "../components/Form";

export default function Experiences() {

    return (
    <div className=' bg-black'>

            <Header/>   

        <main >
            <div className="container mx-auto py-6 sm:px-6 lg:px-8">
                <ExpElement/>
            </div>
        </main>
        <footer>
            <Form/>
        </footer>
    </div>
        
    )
}