import React from 'react'
import Sectioncss from "./Sectionone.module.css"
import fotobycle from "./assets/img/bycle.png"

function Sectionone() {
  return (
    <div className={Sectioncss.wrapper}>
        <div className={Sectioncss.sectionbigger}>
            <div className={Sectioncss.blockone}>
              <h1 className={Sectioncss.textbigger}>How it works</h1>
              <p className={Sectioncss.textmenu}>1. Pick your city</p>
              <p className={Sectioncss.textmenu}>2. Choose your ride</p>
              <p className={Sectioncss.textmenu}>3. Delivery to your door</p>
              <p className={Sectioncss.textmenub}>4. Ride freely</p>
              <button className={Sectioncss.start}>
                <h1 className={Sectioncss.buttonstext}>Start Now</h1>
              </button>
            </div>
            <div className={Sectioncss.blocktwo}>
              <img src={fotobycle} alt="404" className={Sectioncss.bycleimg} />
            </div>
        </div>
    </div>
  )
}

export default Sectionone