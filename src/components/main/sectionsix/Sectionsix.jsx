import React from 'react'
import g from "./Sectionsix.module.css"
import fotoplus from "./assets/icons/plus.svg"

function Sectionsix() {
  return (
    <div className={g.wrapper}>
        <div className={g.bigbox}>
            <div className={g.boxone}>
                <h1 className={g.textbig}>Want to know more?</h1>
                <button className={g.buttonlearn}>
                    <p className={g.lerntext}>Learn more</p>
                    <div className={g.hoverarrow}></div>
                </button>
            </div>
            <div className={g.boxtwo}>
                <div className={g.boxofplus}>
                    <img src={fotoplus} alt="" className={g.plusimg} />
                    <p className={g.fountext}>How does Dance work?</p>
                </div>
                <div className={g.boxofplus}>
                    <img src={fotoplus} alt="" className={g.plusimg} />
                    <p className={g.fountext}>How do I charge my Dance eride?</p>
                </div>
                <div className={g.boxofplus}>
                    <img src={fotoplus} alt="" className={g.plusimg} />
                    <p className={g.fountext}>What accessories can I use with my ebike and emoped?</p>
                </div>
                <div className={g.boxofplus}>
                    <img src={fotoplus} alt="" className={g.plusimg} />
                    <p className={g.fountext}>How do repairs work?</p>
                </div>
                <div className={g.boxofplus}>
                    <img src={fotoplus} alt="" className={g.plusimg} />
                    <p className={g.fountext}>Can I test the ride before buying?</p>
                </div>
                <div className={g.boxofplus}>
                    <img src={fotoplus} alt="" className={g.plusimg} />
                    <p className={g.fountext}>How do I cancel my membership?</p>
                </div>
                <div className={g.boxofplus}>
                    <img src={fotoplus} alt="" className={g.plusimg} />
                    <p className={g.fountext}>What happens if my vehicle gets stolen?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sectionsix