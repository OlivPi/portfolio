import '../App';
import React from "react";
import '../App.css';


const listXp = [
  { id:'1', date: '2016-2019', post: 'Management et communication', societe:'Groupe de musique Kunta (Ethio, Hip-hop, pop)' },
  { id:'2', date: 'Depuis 2009', post: 'Dj', societe:'Sous les noms STONN et Jean Digue' },
  { id:'3', date: 'Depuis 2005', post: 'Animateur Bafa', societe:'Section adolescent' },
]

export default function HobElement() {
    return (


      <section className='bg-black m-6 grid grid-cols-1 gap-y-4 space-x-5 font-sans text-white'>

          <h2 className='text-4xl font-bold'>Hobbies</h2>

          <ul className="flex-col grid gap-y-4 text-lg xs:text-base">
              {listXp.map((item) => (
              <li key={item.id}>
              <span className='italic'>{item.date} : </span><span className='font-bold'>{item.post}</span>, <span className='font-light'>{item.societe}</span>
              </li>
              ))}
          </ul>
      </section>


    );
  }
  