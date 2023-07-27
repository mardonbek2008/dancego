import React from 'react'
import Header from "./components/header/header"
import Main from "./components/main/main"
import Footer from "./components/footer/footer"
import cssa from "./App.css"

function App() {
  return (
    <div className={cssa.wrapper}>
    <Header />
    <Main />
    <Footer />
    </div>


  )
}

export default App