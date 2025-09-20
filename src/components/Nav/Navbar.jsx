import React from 'react'
import './Navbar.css'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import StarIcon from '@mui/icons-material/Star';
import SunnyIcon from '@mui/icons-material/Sunny';
import RestoreIcon from '@mui/icons-material/Restore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { toggleCollapse as toggleLeftPanel } from '../../store/slices/leftPanelSlice';
import { toggleCollapse as toggleRightPanel } from '../../store/slices/rightPanelSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLeftPanelToggle = () => {
    dispatch(toggleLeftPanel());
  };

  const handleRightPanelToggle = () => {
    dispatch(toggleRightPanel());
  };

  return (
    <div className='nav-wrapper p-4'>
      <div className='left-nav'>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}} onClick={handleLeftPanelToggle}><ViewSidebarIcon /></button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}}><StarIcon /></button></span>
        <span className='mx-1' style={{color: "var(--grey-text-active-color)"}}>Dashboard / {'Default'}</span>
      </div>
      
      <div className='right-nav'>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}}><SunnyIcon /></button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}}><RestoreIcon /></button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}}><NotificationsIcon /></button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}} onClick={handleRightPanelToggle}><ViewSidebarIcon /></button></span>
      </div>
    </div>
  )
}

export default Navbar