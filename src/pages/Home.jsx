import React from 'react'
import LeftPanel from '../components/LeftPanel/LeftPanel'
import Navbar from '../components/Nav/Navbar'
import Content from '../components/Content/Content'
import RightPanel from '../components/RightPanel/RightPanel'
import './Home.css'
import { useSelector } from 'react-redux'
import { Routes, Route } from "react-router-dom"
import Order from '../components/Orders/Order'

const Home = () => {
  const leftPanel = useSelector((state) => state.leftPanel)
  const rightPanel = useSelector((state) => state.rightPanel)
  const isDark = useSelector(state => state.theme.dark)
  
  return (
    <div className='home-wrapper' style={{backgroundColor: isDark ? 'var(--bg-dark)': 'white'}}>
      <div className={`left-panel ${leftPanel.isCollapsed ? 'collapsed': ''}`}>
        <LeftPanel/>
      </div>
      <div className='center-panel w-100'>
        <Navbar/>
        <div>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/orders' element={<Order />} />
            <Route path='/projects' element={<Content />} />
            <Route path='/courses' element={<Content />} />
          </Routes>
        </div>
      </div>
      <div className={`right-panel ${rightPanel.isCollapsed ? 'collapsed': ''}`}>
        <RightPanel/>
      </div>
    </div>
  )
}

export default Home