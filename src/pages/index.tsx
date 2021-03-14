import React from 'react'
import Head from 'next/head'

// import ImalduosLogo from '../assets/imalduos.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Aldo S. (@devilzcore)</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <div className="profile">
            <img src="https://github.com/devilzcore.png" alt=""/>
          </div>
          <div className="about">
            <h1>I'm Aldo, software engineer.</h1>
            <p>I specialize in rapidly building software companies and web applications.</p>
            <p>HTML5 / CSS3 / Javascript / ReactJS / C#</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
