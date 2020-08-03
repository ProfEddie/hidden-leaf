import React from 'react';
import Header from '../../Components/Header'
import SectionHome from './SectionHome'
import SectionMA from './SectionMA'
import SectionRule from './SectionRule'
import SectionAward from './SectionAward'
import SectionNote from './SectionNote'
import SectionRegister from './SectionRegister'
import SectionEvent from './SectionEvent'
import SectionAbout from './SectionAbout'
import SectionSponsor from './SectionSponsor'
import SectionFooter from './SectionFooter'
import './style.scss'

export default function Home() {
  return (
    <div id="Home">

      <Header/>
      <SectionHome/>
      <SectionAbout/>
      <SectionMA/>
      <SectionRule/>
      <div id='bended-content'>
        <SectionAward/>
        <SectionNote/>
        <SectionRegister/>
        <SectionEvent/>
        <SectionSponsor/>
      </div>
      <SectionFooter/>
      
    </div>
  );
}



