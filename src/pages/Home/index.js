import React from 'react';
import Header from '../../Components/Header'
import SectionHome from './sectionHome'
import './style.css'
function Home() {
  return (
    <div id="Home">
      <Header/>
      <div id="section-container">
        <SectionHome/>
        <section className="child-section" style={{width:'100%', height:'60vh'}}>
          section 2
        </section>
        <section className="child-section" style={{width:'100%', height:'60vh', backgroundColor:'yellow'}}>
          section 3
        </section>
      </div>
      

    </div>
  );
}

export default Home;
