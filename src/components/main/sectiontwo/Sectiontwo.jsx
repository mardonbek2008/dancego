import React from 'react'
import secondcss from "./Sectiontwo.module.css"
import right from "./assets/img/right.svg"
import firstimg from "./assets/img/cardoneimg.png"
import secondimg from "./assets/img/cardtwoimg.png"
import threeimg from "./assets/img/cardthreeimg.png"

function Sectiontwo() {
  return (
    <div className={secondcss.wrapper}>
        <div className={secondcss.sectionbigger}>
            <div className={secondcss.boxtext}>
                <h1 className={secondcss.textbig}>Move your way</h1>
                <p className={secondcss.textmini}>Choose the electric ride that suits your lifestyle.</p>
            </div>
            <div className={secondcss.cardsbigger}>
              <div className={secondcss.card}>
                <img src={firstimg} alt="" className={secondcss.cardsimg} />
                <div className={secondcss.boxtexts}>
                  <p className={secondcss.textvalue}>From €59 €39/mo</p>
                  <div className={secondcss.textwio}>
                    <p className={secondcss.textv}>Winter offer</p>
                  </div>
                </div>
                <h1 className={secondcss.steptext}>Dance One Step</h1>
                <p className={secondcss.textebike}>Ebike</p>
                <button type='button'  className={secondcss.buttondetailsee}>
                  <div className={secondcss.hoverbox}>
                    <div className={secondcss.securyhover}>
                    <p className={secondcss.seetext}>See details</p>
                    <div className={secondcss.righticon}></div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={secondcss.card}>
                <img src={secondimg} alt="" className={secondcss.cardsimg} />
                <div className={secondcss.boxtexts}>
                  <p className={secondcss.textvalue}>From €59 €39/mo</p>
                  <div className={secondcss.textwio}>
                    <p className={secondcss.textv}>Winter offer</p>
                  </div>
                </div>
                <h1 className={secondcss.steptext}>Dance One Step</h1>
                <p className={secondcss.textebike}>Ebike</p>
                <button type='button'  className={secondcss.buttondetailsee}>
                  <div className={secondcss.hoverbox}>
                    <div className={secondcss.securyhover}>
                    <p className={secondcss.seetext}>See details</p>
                    <div className={secondcss.righticon}></div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={secondcss.card}>
                <img src={threeimg} alt="" className={secondcss.cardsimg} />
                <div className={secondcss.boxtexts}>
                  <p className={secondcss.textvalue}>From €59 €39/mo</p>
                  <div className={secondcss.textwio}>
                    <p className={secondcss.textv}>Winter offer</p>
                  </div>
                </div>
                <h1 className={secondcss.steptext}>Dance One Step</h1>
                <p className={secondcss.textebike}>Ebike</p>
                <button type='button'  className={secondcss.buttondetailsee}>
                  <div className={secondcss.hoverbox}>
                    <div className={secondcss.securyhover}>
                    <p className={secondcss.seetext}>See details</p>
                    <div className={secondcss.righticon}></div>
                    </div>
                  </div>
                </button>
              </div>


            </div>
        </div>
    </div>
  )
}

export default Sectiontwo