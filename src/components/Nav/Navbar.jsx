import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import StarIcon from '@mui/icons-material/Star';
import SunnyIcon from '@mui/icons-material/Sunny';
import RestoreIcon from '@mui/icons-material/Restore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { toggleCollapse as toggleLeftPanel } from '../../store/slices/leftPanelSlice';
import { toggleCollapse as toggleRightPanel } from '../../store/slices/rightPanelSlice';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';

const Navbar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

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
        <span className='mx-1' style={{color: "var(--grey-text-active-color)"}}>Dashboard / <span className='text-dark'>{'eCommerce'}</span></span>
      </div>
      
      <div className='right-nav'>
        <span>
          <Paper
          component="form"
          sx={{ p: '2px 8px', display: 'flex', alignItems: 'center', width: 200, backgroundColor: 'var(--grey-clicked-color)', boxShadow: 'none', borderRadius: '15px' }}
        >
            <SearchIcon sx={{color: 'var(--grey-text-inactive-color)'}} />
            <InputBase
              inputRef={inputRef}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
            />
            <IconButton sx={{ p: '10px' }} aria-label="directions">
              <span style={{color: 'var(--grey-text-inactive-color)'}}><KeyboardCommandKeyIcon sx={{color: 'var(--grey-text-inactive-color)'}} />/</span>
            </IconButton>
          </Paper>
        </span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}}><SunnyIcon /></button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}}><RestoreIcon /></button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}}><NotificationsIcon /></button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}} onClick={handleRightPanelToggle}><ViewSidebarIcon /></button></span>
      </div>
    </div>
  )
}

export default Navbar