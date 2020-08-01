import React from 'react';
import Header from '../../Components/Header'
import SectionHome from './SectionHome'
import SectionMA from './SectionMA'
import SectionRule from './SectionRule'
import './style.scss'

export default function Home() {
  return (
    <div id="Home">
      <Header/>
      <SectionHome/>
      <SectionMA/>
      <SectionRule/>
    </div>
  );
}



