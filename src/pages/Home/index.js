import React from 'react';
import Header from '../../Components/Header'
import SectionHome from './SectionHome'
import SectionAbout from './SectionAbout'
import './style.scss'

export default function Home() {
  return (
    <div id="Home">
     
      <Header/>
      <SectionHome/>
      <SectionAbout/>

    </div>
  );
}



