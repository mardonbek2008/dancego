import React from 'react'
import i from "./Sectionseven.module.css"

function Sectionseven() {
  return (
    <div className={i.wrapper}>
        <div className={i.bigbox}>
            <h1 className={i.textbig}>What our members say</h1>
            <div className={i.biggercards}>
                <div className={i.card}>
                    <h1 className={i.cadrdstext}>
                    It's super efficient, no sweat, very stable and I get everywhere faster.
                    </h1>
                    <p className={i.minitext}>Luna, Berlin</p>
                </div>
                <div className={i.card}>
                    <h1 className={i.cadrdstext}>
                    It's super efficient, no sweat, very stable and I get everywhere faster.
                    </h1>
                    <p className={i.minitext}>Luna, Berlin</p>
                </div>
                <div className={i.card}>
                    <h1 className={i.cadrdstext}>
                    It's super efficient, no sweat, very stable and I get everywhere faster.
                    </h1>
                    <p className={i.minitext}>Luna, Berlin</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sectionseven