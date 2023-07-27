import React from "react"

import headercss from "./Header.module.css"
import icon from "./assets/icons/icon-dance.svg"


function header() {
  return (
    <div className={headercss.wrapper}>
      <section className={headercss.header}>
        <div className={headercss.linksmenu}>
          <div className={headercss.sectorlinkone}>
            <img src={icon} alt="" className={headercss.iconhome} />
          </div>
          <div className={headercss.sectionlinktwo}>
            <div className={headercss.linksbigger}>
              <a href="" className={headercss.linkshead}>Concierge</a>
              <a href="" className={headercss.linkshead}>Rides</a>
              <a href="" className={headercss.linkshead}>For Business</a>
              <a href="" className={headercss.linkshead}>En</a>
            </div>
            <div className={headercss.buttonbox}>
              <button type='button'  className={headercss.buttonstart}>
                <p className={headercss.buttonstext}>Start now</p>
              </button>
            </div>
          </div>
        </div>
        <div className={headercss.textarea}>
          <div className={headercss.textsbigger}>
            <h1 className={headercss.textfeature}>Your future is electric</h1>
            <p className={headercss.getbiketext}>
              Get your own ebike or emoved <br /> with our flexible subscription
            </p>
            <div className={headercss.buttonboxtwo}>
              <button type='button'  className={headercss.buttonstarttwo}>
                <p className={headercss.buttonstexttwo}>Start now</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default header