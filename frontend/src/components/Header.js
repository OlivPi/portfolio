import '../App';
import React from 'react';
import MyToggle from './animation/myToggle';

import Navbar from './Navbar';

import { ThemeContext } from '../components/ThemeContext'



export default function Header() {

  return (
      <div className='bg-black'>
          <Navbar/>
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 flex space-x-4 justify-between ">
            <div >
                <h1 className="font-sans text-4xl lg:text-8xl font-bold text-gray-100"><span className='font-light'>Olivier</span> PIERRE</h1>
                <img className="float-right" src="../images/1516818215398.jpeg" alt='Olivier PIERRE'/>
            </div>
            <div >
                {/* <MyToggle ThemeContext={ThemeContext}/> */}
                <ul className="list-none lg:text-2xl sm:text-xl text-gray-100">
                    <li>Développeur Front-End</li>
                    <li>Spécialiste WordPress</li>
                    <li>Chef de projet web</li>
                    <li>Direction artistique</li>
                </ul>
            </div>
        </div>
      </div>
    
  )
}



