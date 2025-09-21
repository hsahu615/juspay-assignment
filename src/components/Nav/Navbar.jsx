import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import StarIcon from '@mui/icons-material/Star';
import SunnyIcon from '@mui/icons-material/Sunny';
import RestoreIcon from '@mui/icons-material/Restore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapse as toggleLeftPanel } from '../../store/slices/leftPanelSlice';
import { toggleCollapse as toggleRightPanel } from '../../store/slices/rightPanelSlice';
import { toggleTheme } from '../../store/slices/themeSlice';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const {dark} = useSelector((state) => state.theme);

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


  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className='nav-wrapper p-4'>
      <div className='left-nav'>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}} onClick={handleLeftPanelToggle}><ViewSidebarIcon sx={{color: dark ? 'white': 'lightgrey'}}/></button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}}><StarIcon sx={{color: dark ? 'white': 'lightgrey'}}/></button></span>
        <span className='mx-1' style={{color: dark ? 'grey': 'grey'}}>Dashboard / <span style={{color: dark ? 'white': 'black'}}>{'eCommerce'}</span></span>
      </div>
      
      <div className='right-nav'>
        <span>
          <Paper
          component="form"
          sx={{ p: '2px 8px', display: 'flex', alignItems: 'center', width: 200, backgroundColor: dark ? 'grey' : 'rgba(0,0,0,0.1)', boxShadow: 'none', borderRadius: '15px' }}
        >
            <SearchIcon sx={{color: 'lightgrey'}} />
            <InputBase
              inputRef={inputRef}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
            />
            <IconButton sx={{ p: '10px' }} aria-label="directions">
              <span style={{color: 'lightgrey'}}><KeyboardCommandKeyIcon sx={{color: 'lightgrey'}} />/</span>
            </IconButton>
          </Paper>
        </span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}} onClick={handleThemeChange}>{dark ? <DarkModeIcon sx={{color: 'lightgrey'}}/> : <SunnyIcon sx={{color: 'lightgrey'}}/>}</button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}}><RestoreIcon sx={{color: 'lightgrey'}}/></button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}}><NotificationsIcon sx={{color: 'lightgrey'}}/></button></span>
        <span><button className='border-0 outline-0 bg-transparent mx-1' style={{color: "var(--grey-text-active-color)"}} onClick={handleRightPanelToggle}><ViewSidebarIcon sx={{color: 'lightgrey'}}/></button></span>
      </div>
    </div>
  )
}

export default Navbar