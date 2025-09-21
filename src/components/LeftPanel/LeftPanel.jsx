import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import './LeftPanel.css'
import CustomizedAccordions from '../Accordion/CustomizedAccordions'

const LeftPanel = () => {
  const [favToggle, setFavToggle] = useState('Favorites')
  const { dashboards, pages } = useSelector((state) => state.leftPanel)
  const isDark = useSelector(state => state.theme.dark)

  return (
    <div className='left-panel-wrapper'>
      <div className='profile-container'>
        <span className='me-2'><AccountCircleIcon sx={{color:isDark ? 'white' : "black"}}/></span>
        <p style={{color: isDark ? 'white' : "black"}} className='m-0'>ByeWind</p>
      </div>

      <div className='fav-container'>
        <div className='fav-tabs mb-2'>
          <span style={{color: favToggle=='Favorites' ? "grey" : "lightgrey"}} onClick={() => setFavToggle("Favorites")}>Favorites</span>
          <span style={{color: favToggle=='Recently' ? "grey" : "lightgrey"}} onClick={() => setFavToggle("Recently")}>Recently</span>
        </div>
        <div className='fav-list'>
          {favToggle=='Favorites' ? <ul className='p-0'>
            <li style={{color: isDark ? 'white' : 'black'}}><span>&#8226; </span>Overview</li>
            <li style={{color: isDark ? 'white' : 'black'}}><span>&#8226; </span>Projects</li>
          </ul> : <ul className='p-0 '>
            <li style={{color: isDark ? 'white' : 'black'}}><span>&#8226; </span>Projects</li>
            <li style={{color: isDark ? 'white' : 'black'}}><span>&#8226; </span>Overview</li>
          </ul>}
        </div>
      </div>

      <div className='dash-container'>
        <p style={{color: isDark ? "lightgrey": 'grey'}} className='my-2'>Dashboards</p>
        <CustomizedAccordions data={dashboards}/>
      </div>

      <div className='pages-container'>
        <p style={{color: isDark ? "lightgrey": 'grey'}} className='my-2'>Pages</p>
        <CustomizedAccordions data={pages}/>
      </div>
    </div>
  )
}

export default LeftPanel