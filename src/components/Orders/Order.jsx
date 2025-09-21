import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import FilterListIcon from '@mui/icons-material/FilterList'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import Paper from '@mui/material/Paper'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { useSelector } from 'react-redux'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import './Order.css'
import AddIcon from '@mui/icons-material/Add'
import CircleIcon from '@mui/icons-material/Circle'
import Pagination from '@mui/material/Pagination'

const Order = () => {
  const { orders } = useSelector((state) => state.centerPanel)
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [filteredData, setFilteredData] = useState(orders)
  const [displayedData, setDisplayedData] = useState([])
  const itemsPerPage = 10
  const isDark = useSelector(state => state.theme.dark)

  useEffect(() => {
    if(searchText.length === 0) {
      setFilteredData(orders)
    } else {
      const filtered = orders.filter((ele) => ele.User.includes(searchText))
      setFilteredData(filtered)
    }
    setPage(1)
  }, [searchText, orders])

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedData = filteredData.slice(startIndex, endIndex)
    setDisplayedData(paginatedData)
  }, [page, filteredData])

  const handleChange = (event, value) => {
    setPage(value)
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  
  return (
    <div className="content-wrapper" style={{'color': isDark ? 'white': 'black'}}>
      <h6 style={{'color': isDark ? 'white': 'black'}}>Orders</h6>
      <div className='my-3 p-3 rounded d-flex justify-content-between' style={{backgroundColor: 'var(--grey-clicked-color)'}}>
        <div>
          <span>
            <IconButton aria-label="directions" sx={{'color': isDark ? 'white': 'grey'}}>
              <span><AddIcon /></span>
            </IconButton>
            <IconButton aria-label="directions" sx={{'color': isDark ? 'white': 'grey'}}>
              <span><FilterListIcon /></span>
            </IconButton>
            <IconButton aria-label="directions" sx={{'color': isDark ? 'white': 'grey'}}>
              <span><SwapVertIcon /></span>
            </IconButton>
          </span>
        </div>
        <div>
          <Paper
            component="form"
            sx={{ p: '2px 8px', display: 'flex', alignItems: 'center', width: 200, backgroundColor: 'rgba(255, 255, 255, 0.5)', boxShadow: 'none', borderRadius: '15px' }}
          >
            <SearchIcon sx={{color: 'var(--grey-text-inactive-color)'}} />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Paper>
        </div>
      </div>

      <div className="order-table">
        <table className="product-selling-table w-100">
          <thead style={{color: isDark ? 'lightgray' : 'grey', borderBottom: '1px solid lightgrey'}}>
            <tr className="order-table-header-row">
              <th>Order ID</th>
              <th>User</th>
              <th>Project</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((data, idx) => (
              <tr key={idx} className="order-table-row my-3">
                <td>{data["Order ID"]}</td>
                <td><img className="order-profile-img me-2" src={data.Image} alt="Profile" />{data["User"]}</td>
                <td>{data["Project"]}</td>
                <td>{data["Address"]}</td>
                <td><CalendarTodayIcon sx={{mr: 1}}/>{data["Date"]}</td>
                <td style={{color: data.Color}}><CircleIcon sx={{scale: 0.4}} />{data["Status"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='d-flex justify-content-end'>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handleChange} 
            hidePrevButton={true} 
            hideNextButton={displayedData.length===0}
            className={isDark ? 'dark-pagination': ''}
            color={isDark ? 'secondary' : 'standard'}
          />
        </div>
      </div>
    </div>
  )
}

export default Order