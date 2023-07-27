import React from 'react'
import "./main.module.css"
import Sectionone from "./sectionone/Sectionone"
import Sectiontwo from "./sectiontwo/Sectiontwo"
import Sectionthree from "./sectionthree/Sectionthree"
import Sectionfour from "./sectionfour/Sectionfour"
import Sectionfive from "./sectionfive/Sectionfive"
import Sectionsix from "./sectionsix/Sectionsix"



function Main() {
  return (
    <div className="wrapper">
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
      <Sectionsix />

    </div>

  )
}

export default Main