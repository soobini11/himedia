import React from 'react'
import Skip from '../component/Skip'
import Header from '../component/Header'
import Main from '../component/Main'
import Intro from '../component/Intro'
import Skill from '../component/Skill'
import Site from '../component/Site'
import Port from '../component/Port'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default HomeView
