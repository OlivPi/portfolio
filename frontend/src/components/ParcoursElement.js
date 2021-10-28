import '../App';
import React from "react";
import '../App.css';


const listXp = [
  { id:'1', date: '2021', formation: 'Développeur web et mobile Fullstack JavaScript', ecole:'La Capsule' },
  { id:'2', date: '2021', formation: 'Chef de projet web', ecole:'Titre RNCP niveau VI' },
  { id:'3', date: '2006 - 2011', formation: 'Ecole Française des Attachés de Presse, et des professionnels de la communication', ecole:'Diplômé de l’EFAP Lyon' },
  { id:'4', date: '2006 ', formation: ' Baccalauréat STT, Action et Communication Commerciale', ecole:'Lycée du Coudon - Toulon' },
]



export default function ParcoursElement() {
    return (
      <section className='bg-black m-6 grid grid-cols-1 gap-y-4 space-x-5 font-sans text-white'>

          <h2 className='text-4xl font-bold'>Parcours</h2>

          <ul className="flex-col grid gap-y-4 text-lg xs:text-base">
              {listXp.map((item) => (
              <li key={item.id}>
              <span className='italic'>{item.date} : </span><span className='font-bold'>{item.formation}</span>, <span className='font-light'>{item.ecole}</span>
              </li>
              ))}
          </ul>
      </section>

    );
  }
  