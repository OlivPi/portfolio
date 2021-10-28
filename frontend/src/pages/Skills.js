import '../App';
import React from "react";
import '../App.css';


import SkillsElement from "../components/SkillsElement";
import Header from "../components/Header";
import Form from "../components/Form";

export default function Skills(props) {

    return (
    <div>

            <Header/>   


        <main className=' bg-black'>
            <div className="container mx-auto py-6 sm:px-6 lg:px-8">
                <SkillsElement/>
            </div>
        </main>
        
        <footer>
            <Form/>
        </footer>

    </div>
        
    )
}