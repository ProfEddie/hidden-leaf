import React from 'react'
import "./Sponsor.scss"

export default function Sponsor(){
    return(
        <section className="child-section" id="sponsor-section">
            <h1>ĐỐI TÁC</h1>
            <img src={require("../../images/img-sponsor.png")} alt="img_4"/>
        </section>
    )
}