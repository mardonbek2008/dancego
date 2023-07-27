import React from 'react'
import s from "./Sectionfour.module.css"

function Sectionfour() {
  return (
    <div className={s.wrapper}>
        <div className={s.coloredbox}>
            <div className={s.bigggersection}>
                <div className={s.minisection}>
                    <h1 className={s.ourcitytext}>Your city is our city</h1>
                    <p className={s.minitext}>Our rides are available in 5 European cities — and counting.</p>
                    <button className={s.buttonstart}>
                        <h1 className={s.starttxt}>Start now</h1>
                    </button>
                    <p className={s.seecity}>Want to see Dance in your city?</p>
                </div>
                <div className={s.twominisection}>
                    <h1 className={s.biggertextall}>Berlin</h1>
                    <h1 className={s.biggertextall}>Hamburg</h1>
                    <h1 className={s.biggertextall}>Munich</h1>
                    <h1 className={s.biggertextall}>Paris</h1>
                    <h1 className={s.biggertextall}>Vienna</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sectionfour