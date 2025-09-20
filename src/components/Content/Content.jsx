import React from 'react'
import './Content.css'
import { useSelector } from 'react-redux'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChart from '../BarChart/BarChart';
import LineChart from '../LineChart/LineChart';


const Content = () => {
  const {dashboardData} = useSelector((state) => state.centerPanel)
  return (
    <div className='content-wrapper'>
      <h6>eCommerce</h6>
      <div className='widet-wrapper d-flex flex-column'>
        <div className="widget-row col-12 my-3">
          <div className='row m-0 p-0 h-100'>
            <div className="col-6 h-100">
              <div className="row m-0 p-0 justify-content-between align-content-between h-100">
                {Object.keys(dashboardData.summaryStats).map((data) => 
                  <div className='d-flex flex-column justify-content-center align-items-center col-6 py-3 px-4'
                  >
                    <div className='summary-card w-100 px-4' 
                    style={{backgroundColor: `rgba(0, 0, 235, ${Math.abs(dashboardData.summaryStats[data].change/100)})`}}  
                    >
                      <p className='m-0 summary-card-header'>{data}</p>
                      <p className='m-0 text-end summary-card-percentage'>{dashboardData.summaryStats[data].change}% <span className='me-2'>{dashboardData.summaryStats[data].change<0 ? <TrendingDownIcon/> : <TrendingUpIcon />}</span></p>
                      <p className='m-0 summary-card-value'>{dashboardData.summaryStats[data].value}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6 rounded" style={{backgroundColor: 'var(--grey-clicked-color)'}}>
              <BarChart />
            </div>
          </div>
        </div>
        <div className="widget-row col-12 my-3">
          <div className="col-8 rounded p-3" style={{backgroundColor: 'var(--grey-clicked-color)'}}>
              <LineChart />
          </div>
        </div>
        <div className="widget-row col-12 my-3">
          <div className="col-8 rounded p-3" style={{backgroundColor: 'var(--grey-clicked-color)'}}>
              <table className='product-selling-table w-100'>
              <thead>
                  <tr className='product-table-row border-bottom' style={{'color': 'var(--grey-text-active-color)'}}>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                  </tr>
              </thead>
              <tbody>

              {dashboardData.topSellingProducts.map((data) => <tr className='product-table-row'>
                      <td>{data.name}</td>
                      <td>${data.price}</td>
                      <td>{data.quantity}</td>
                      <td>${data.amount}</td>
                  </tr>)}
                  
                  
              </tbody>
        </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content