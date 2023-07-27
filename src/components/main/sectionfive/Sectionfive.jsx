import React from 'react'
import ptich from "./assets/icons/ptich.svg"
import f from "./Sectionfive.module.css"
import firstimg from "./assets/img/valo1.png"
import twoimg from "./assets/img/valo2.png"


function Sectionfive() {
  return (
    <div className={f.wrapper}>
        <div className={f.bigbox}>
            <div className={f.cardadd}>
                <h1 className={f.youratext}>You’re in charge</h1>
                <p className={f.minitext}>Your subscription is fully flexible—with free cancelation at any time and no sign-up fees.</p>
                <div className={f.brone}>
                    <img className={f.ptich} src={ptich} alt=""/>
                    <p className={f.textb}>Repairs within 24 hours</p>
                </div>
                <div className={f.brtwo}>
                <img className={f.ptich} src={ptich} alt=""/>
                    <p className={f.textb}>Replacements in case of theft</p>
                </div>
                <div className={f.brthree}>
                <img className={f.ptich} src={ptich} alt=""/>
                    <p className={f.textb}>App to track your rides</p>
                </div>
                <div className={f.brfour}>
                <img className={f.ptich} src={ptich} alt=""/>
                    <p className={f.textb}>Cancel anytime</p>
                </div>
            </div>
            <div className={f.biggercard}>
                <div className={f.card}>
                    <img src={firstimg} alt="" className={f.cardsimg} />
                    <div className={f.boxtexts}>
                      <p className={f.textvalue}>From €59 €39/mo</p>
                      <div className={f.textwio}>
                        <p className={f.textv}>Winter offer</p>
                      </div>
                    </div>
                    <h1 className={f.steptext}>Dance One Step</h1>
                    <p className={f.textebike}>Ebike</p>
                    <button type='button'  className={f.buttondetailsee}>
                        <div className={f.hoverbox}>
                          <div className={f.securyhover}>
                            <p className={f.seetext}>Start now</p>
                            <div className={f.righticon}></div>
                          </div>
                       </div>
                   </button>
                </div>
                <div className={f.card}>
                    <img src={twoimg} alt="" className={f.cardsimg} />
                    <div className={f.boxtexts}>
                      <p className={f.textvalue}>From €59 €39/mo</p>
                      <div className={f.textwio}>
                        <p className={f.textv}>Winter offer</p>
                      </div>
                    </div>
                    <h1 className={f.steptext}>Dance One Step</h1>
                    <p className={f.textebike}>Ebike</p>
                    <button type='button'  className={f.buttondetailsee}>
                        <div className={f.hoverbox}>
                          <div className={f.securyhover}>
                            <p className={f.seetext}>Start now</p>
                            <div className={f.righticon}></div>
                          </div>
                       </div>
                   </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sectionfive