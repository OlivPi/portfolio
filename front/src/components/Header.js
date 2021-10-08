import '../App';
import React, {useState} from 'react';
import { Switch } from '@headlessui/react'


export default function Header() {

const [enabled, setEnabled] = useState(false)

  return (
      <div className='bg-black'>
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 flex space-x-4 justify-between ">
            <div >
                <h1 className="font-sans text-4xl lg:text-8xl font-bold text-gray-100"><span className='font-light'>Olivier</span> PIERRE</h1>
                <img className="float-right" src="../images/1516818215398.jpeg" alt='Olivier PIERRE'/>
            </div>
            <div >
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
                    relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                        pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                    />
                </Switch>
                <ul className="list-none lg:text-2xl sm:text-xl text-gray-100">
                    <li>Spécialiste WordPress</li>
                    <li>Développeur Full Stack Javascript</li>
                    <li>Chef de projet web</li>
                    <li>Direction artistique</li>
                </ul>
            </div>
        </div>
      </div>
    
  )
}



