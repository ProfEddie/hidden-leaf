import React from 'react';
import Header from '../../Components/Header'
import SectionHome from './sectionHome'
import SectionAbout from './SectionAbout'
import SectionNote from './SectionNote'
import SectionSchedule from './SectionSchedule'
import SectionForm from './SectionForm'
import './style.css'

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
        <section className="child-section" style={{width:'100%', height:'60vh', backgroundColor:'white'}}>
          section 3
        </section><section className="child-section" style={{width:'100%', height:'60vh', backgroundColor:'yellow'}}>
          section 4
        </section><section className="child-section" style={{width:'100%', height:'60vh', backgroundColor:'white'}}>
          section 5
        </section>
      </div>
      

    </div>
  );
}



