import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import "../styles/home.css"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
    </div>
  )
}

export default Home
