import '../App';
import '../App.css';
import React from 'react';


import ExpElement from "../components/ExpElement";
import ParcoursElement from "../components/ParcoursElement";
import SkillsElement from "../components/SkillsElement";
import HobElement from "../components/HobElement";
import Header from "../components/Header";
import Form from "../components/Form";



export default function Home() {



    return (
    <div className='bg-white dark:bg-black'>
            <Header/>   

        <main>
            <div className="container mx-auto py-6 sm:px-6 lg:px-8">
                <ExpElement/>
                <ParcoursElement/>
                <SkillsElement/>
                <HobElement/>

            </div>
        </main>

        <footer>
            <Form/>
        </footer>

    </div>
        
    )
}