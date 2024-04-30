import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Group Architect</title>
        <meta property="og:title" content="Forward Group Architect" />
      </Helmet>
    </div>
  )
}

export default Home
