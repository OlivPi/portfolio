import '../App';
import React, {useRef, useEffect} from "react";
import '../App.css';
import gsap from 'gsap';


// or get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";

export default function SkillsElement() {

    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" });
      }, []);

    return (
        <section className='bg-black m-6 grid grid-cols-1 gap-y-4 space-x-5 font-sans text-white'>
            <h2 className='text-4xl font-bold'>Skills</h2>

            <div className="flex grid grid-flow-row lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-6 text-lg xs:text-base">

                <div className="border-white border-2 max-w-max p-4 hover:shadow-md" ref={boxRef}>
                    <h3 className="text-2xl font-bold">Front-End</h3>
                    <ul>
                        <li>HTML 5</li>
                        <li>SASS (LESS)</li>
                        <li>Javascript (ES6)</li>
                        <li>React JS</li>
                    </ul>
                </div>

                <div className="border-white border-2 max-w-max p-4 hover:shadow-md">
                    <h3 className="text-2xl font-bold">Back-End</h3>
                    <ul>
                        <li>Node JS</li>
                        <li>Express</li>
                    </ul>
                </div>

                <div className="border-white border-2 max-w-max p-4 hover:shadow-md">
                    <h3 className="text-2xl font-bold">Base de donnée</h3>
                    <ul>
                        <li>SQL</li>
                        <li>Mongo DB</li>
                    </ul>
                </div>

                <div className="border-white border-2 max-w-max p-4 hover:shadow-md">
                    <h3 className="text-2xl font-bold">Design</h3>
                    <ul>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>InDesign</li>
                        <li>Adobe XD</li>
                        <li>Figma</li>
                    </ul>
                </div>

                <div className="border-white border-2 max-w-max p-4 hover:shadow-md">
                    <h3 className="text-2xl font-bold">Workflow et gestion de projet</h3>
                    <ul>
                        <li>Git</li>                        
                        <li>Github</li>
                        <li>Gitlab</li>
                        <li>Airtable</li>
                        <li>Notion</li>
                    </ul>
                </div>

                <div className="border-white border-2 max-w-max p-4 hover:shadow-lg ring-offset-white">
                    <h3 className="text-2xl font-bold">Événementiel</h3>
                    <ul>
                        <li>Création</li>
                        <li>Production</li>
                        <li>Organisation</li>
                        <li>Coordination</li>
                        <li>Programmation artistique</li>
                    </ul>
                </div>

                <div className="border-white border-2 max-w-max p-4 hover:shadow-lg ring-offset-white">
                    <h3 className="text-2xl font-bold">Communication</h3>
                    <ul>
                        <li>Communication</li>
                        <li>Promotion</li>
                        <li>Community Management</li>
                        <li>Partenariats</li>
                        <li>Diffusion</li>
                    </ul>
                </div>

            </div>
                

        </section>

        
    );
  }
  