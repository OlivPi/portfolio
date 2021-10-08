import '../App';
import React from "react";
import '../App.css';


const listXp = [
  { id:'1', date: 'Depuis 2018', post: 'Formateur', skills:'(WordPress, Réseaux sociaux, Webdesign, UI/UX, html/css)', societe:'ESD, EFAP, ISEG, ESCEN' },
  { id:'2', date: 'Depuis 2017 ', post: 'Développeur WordPress, front-end / back-end, graphisme, Consultant en communication', skills:'(Développement site web, WordPress, maintenance, webdesign, création de logo)', societe:'Free-lance' },
  { id:'3', date: '09/19 - 11/20', post: 'Développeur Front-End - Chargé de Développement', skills:'(Développement site web, WordPress, maintenance, webdesign, création de logo)', societe:'Free-lance' },
  { id:'4', date: 'Depuis 2016', post: 'Chargé de développement', skills:'(Développement commercial, communication, partenariat, gestion site web, ...)', societe:'René Pierre Location' },
  { id:'5', date: '06/2016 - 10/2016', post: ' Responsable communication web - Graphiste - Responsable de l’exploitation bar', skills:'(Community management, web design, déclinaison des différents support de communication print et web, gestion et administration des bars du festival...)', societe:'Festival FESTBOUC (Association Who’s In)' },
  { id:'6', date: 'Depuis 2014', post: 'Président fondateur', skills:'(Développement, programmation artistique, communication, graphisme, production, ...)', societe:'Association Paraplui' },
  { id:'7', date: '11/2013 - 04/2015', post: 'Chargé de communication et programmation', skills:'(Community management, relations presse, graphisme, diffusion, partenariats, référencement, développement privatisation, programmation artistique, ...)', societe:'DV1 Club (Lyon)' },
  { id:'8', date: '2010 - 2014', post: 'Co animateur radio et chargé de développement', skills:'(Animation, production d’événements, community management, partenariat, administration wordpress, rédaction, ...)', societe:'Émission Line Up, Radio Pluriel' },

]



export default function ExpElement() {
    return (

        <section className='bg-black m-6 grid grid-cols-1 gap-y-4 space-x-5 font-sans text-white'>

          <h2 className='text-4xl font-bold'>Expériences</h2>

          <ul className="flex-col grid gap-y-4 text-lg xs:text-base">
              {listXp.map((item) => (
              <li key={item.id}>
              <span className='italic'>{item.date} : </span><span className='font-bold'>{item.post}</span>, <span className='font-light'>{item.societe}</span> - {item.skills}
              </li>
              ))}
          </ul>
        </section>


      

    );
  }
  