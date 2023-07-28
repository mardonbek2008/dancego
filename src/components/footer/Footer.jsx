import React from 'react'
import l from "./footer.module.css"
import right from "./assets/icons/right.svg"
import ins from "./assets/icons/insta.svg"
import face from "./assets/icons/face.svg"
import twit from "./assets/icons/twit.svg"
import inde from "./assets/icons/inde.svg"
function footer() {
  return (
    <div className={l.wrapper}>
      <div className={l.biggerbox}>
        <div className={l.sectionsfather}>
          <div className={l.firstsection}>
            <h1 className={l.staytext}>Stay up to speed</h1>
            <p className={l.mnintext}>Sign up to get the latest Dance offers, updates, and tips straight to your inbox.</p>
            <div className={l.inputsbox}>
              <input placeholder='youremail@gmail.com' type="text" className={l.input} />
              <a href="#" className={l.rightbutton}>
                <img src={right} alt="" className={l.rightimg} />
              </a>
            </div>
            <p className={l.bottomtext}>By checking this box, you allow Dance to collect data relating to the Dance newsletter, including whether it has been opened and clicked through. For more information.</p>
          </div>
          <div className={l.secondsection}>
            <div className={l.universallminisection}>
              <p className={l.blachedtext}>Menu</p>
              <a href="" className={l.linkfrom}>Rides</a>
              <a href="" className={l.linkfrom}>Concierge</a>
              <a href="" className={l.linkfrom}>For Business</a>
              <a href="" className={l.linkfrom}>Start now</a>
            </div>
            <div className={l.universallminisection}>
              <p className={l.blachedtext}>Products</p>
              <a href="" className={l.linkfrom}>Ebikes</a>
              <a href="" className={l.linkfrom}>Moped</a>
            </div>
            <div className={l.universallminisection}>
              <p className={l.blachedtext}>Company</p>
              <a href="" className={l.linkfrom}>About</a>
              <a href="" className={l.linkfrom}>Blog</a>
              <a href="" className={l.linkfrom}>Press</a>
              <a href="" className={l.linkfrom}>FAQ</a>
              <a href="" className={l.linkfrom}>Jobs</a>
            </div>
            <div className={l.universallminisection}>
              <p className={l.blachedtext}>Legal</p>
              <a href="" className={l.linkfrom}>Privacy</a>
              <a href="" className={l.linkfrom}>Imprint</a>
              <a href="" className={l.linkfrom}>Cancel subscription</a>
            </div>
          </div>
        </div>
        <div className={l.linkerbox}>
          <a href="" className={l.linkfoto}>
            <img src={ins} alt="" className={l.linimg} />
          </a>
          <a href="" className={l.linkfoto}>
          <img src={face} alt="" className={l.linimg} />
          </a>
          <a href="" className={l.linkfoto}>
          <img src={twit} alt="" className={l.linimg} />
          </a>
          <a href="" className={l.linkfoto}>
          <img src={inde} alt="" className={l.linimg} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default footer