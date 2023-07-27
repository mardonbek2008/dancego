import React from 'react'

import sectionthreecss from "./Sectionthree.module.css"
import foto from "./assets/img/women-bycle.png"

function Sectionthree() {
  return (
    <div className={sectionthreecss.wrapper}>
      <div className={sectionthreecss.bigsection}>
        <div className={sectionthreecss.sectionone}>
          <h1 className={sectionthreecss.bigtext}>Just ride — we’ll take care of the rest</h1>
          <p className={sectionthreecss.minitext}>Your local Concierge Team will repair or replace your ride within 24 hours—all included with your subscription.</p>
           <button className={sectionthreecss.buttonsee}>
            <h1 className={sectionthreecss.seetext}>See details</h1>
            <div className={sectionthreecss.arrowfoto}></div>
           </button>
        </div>
        <div className={sectionthreecss.sectiontwo}>
          <img src={foto} alt="" className={sectionthreecss.fotowomen} />
        </div>
      </div>
    </div>
  )
}

export default Sectionthree