import React from 'react';
import Header from '../../Components/Header'
import SectionHome from './sectionHome'
import SectionAbout from './SectionAbout'
import SectionNote from './SectionNote'
import SectionSchedule from './SectionSchedule'
import SectionForm from './SectionForm'
import SectionFooter from './SectionFooter'
import SectionSponsor from './SectionSponsor'
import './style.scss'

export default function Home() {
  return (
    <div id="Home">
     
      <Header/>
      <div id="section-container">
        <SectionHome/>
        <SectionAbout/>
        <SectionSchedule/>
        <SectionNote/>
        <SectionForm/>
        <SectionSponsor/>
      
        <SectionFooter/>
       
      </div>
      

    </div>
  );
}



