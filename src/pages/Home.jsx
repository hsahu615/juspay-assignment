import React from 'react'
import LeftPanel from '../components/LeftPanel/LeftPanel'
import Navbar from '../components/Nav/Navbar'
import Content from '../components/Content/Content'
import RightPanel from '../components/RightPanel/RightPanel'
import './Home.css'
import { useSelector } from 'react-redux'

const Home = () => {
  const leftPanel = useSelector((state) => state.leftPanel)
  const rightPanel = useSelector((state) => state.rightPanel)
  
  return (
    <div className='home-wrapper'>
      <div className={`left-panel ${leftPanel.isCollapsed ? 'collapsed': ''}`}>
        <LeftPanel/>
      </div>
      <div className='center-panel w-100'>
        <Navbar/>
        <Content/>
      </div>
      <div className={`right-panel ${rightPanel.isCollapsed ? 'collapsed': ''}`}>
        <RightPanel/>
      </div>
    </div>
  )
}

export default Home