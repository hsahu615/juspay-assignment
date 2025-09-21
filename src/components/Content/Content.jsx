import React from 'react'
import './Content.css'
import { useSelector } from 'react-redux'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChart from '../BarChart/BarChart';
import LineChart from '../LineChart/LineChart';
import DonutChart from '../DonutChart/DonutChart';

const Content = () => {
  const { dashboardData } = useSelector((state) => state.centerPanel)
  const isDark = useSelector(state => state.theme.dark)

  return (
    <div className="content-wrapper">
      <h6 style={{color: isDark ? 'white': ''}}>eCommerce</h6>

      <div className="grid-dashboard">
        <div className="summary-card-wrapper">
          {Object.keys(dashboardData.summaryStats).map((data, idx) =>
            <div
              key={idx}
              className="summary-card"
              style={{
                backgroundColor: `rgba(135, 206, 235, ${Math.abs(
                  dashboardData.summaryStats[data].change / 50
                )})`
              }}
            >
              <p className="m-0 summary-card-header" style={{color: isDark ? 'white': 'black'}}>{data}</p>
              <p className="m-0 text-end summary-card-percentage"style={{color: isDark ? 'white': 'black'}}>
                {dashboardData.summaryStats[data].change}%
                <span className="ms-2" style={{color: isDark ? 'white': 'black'}}>
                  {dashboardData.summaryStats[data].change < 0 ? <TrendingDownIcon /> : <TrendingUpIcon />}
                </span>
              </p>
              <p className="m-0 summary-card-value" style={{color: isDark ? 'white': 'black'}}>{dashboardData.summaryStats[data].value}</p>
            </div>
          )}
        </div>

        <div className="chart-card" style={{backgroundColor: isDark ? 'var(--bg-dark-charts)': 'var(--grey-clicked-color)'}}>
          <BarChart />
        </div>

        <div className="line-chart-card" style={{backgroundColor: isDark ? 'var(--bg-dark-charts)': 'var(--grey-clicked-color)'}}>
          <LineChart />
        </div>

        <div className="map-chart-card" style={{backgroundColor: isDark ? 'var(--bg-dark-charts)': 'var(--grey-clicked-color)'}}>
          <p style={{color: isDark ? 'grey' : 'var(--grey-text-active-color)'}} className='text-center'>Revenue by Location</p>
          {dashboardData.revenueByLocation.map((loc) => <div>
            <div className='d-flex justify-content-between mx-0 my-3' style={{color: isDark ? 'grey' : 'var(--grey-text-active-color)'}}>
              <p className='m-0' style={{color: isDark ? 'grey' : 'var(--grey-text-active-color)'}}>{loc.city}</p>
              <p className='m-0' style={{color: isDark ? 'grey' : 'var(--grey-text-active-color)'}}>{loc.revenue}K</p>
            </div>
            <div className='progress-bar-fill w-100' style={{backgroundColor: 'rgba(191, 215, 223, 0.93)'}}>
              <div className='progress-bar-fill' style={{height: '2px', width: `${loc.revenue}%`, backgroundColor: 'rgb(57, 153, 221)'}}></div>
            </ div>
          </div>)}
        </div>

      

        <div className="table-card" style={{backgroundColor: isDark ? 'var(--bg-dark-charts)': 'var(--grey-clicked-color)'}}>
          <p style={{color: isDark ? 'grey' : 'var(--grey-text-active-color)'}} className='text-center'>Top Selling Products</p>
          <table className="product-selling-table w-100">
            <thead>
              <tr className="product-table-row border-bottom" style={{color: isDark ? 'grey' : 'var(--grey-text-active-color)'}}>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.topSellingProducts.map((data, idx) => (
                <tr key={idx} className="product-table-row" style={{color: isDark ? 'white' : 'black'}}>
                  <td>{data.name}</td>
                  <td>${data.price}</td>
                  <td>{data.quantity}</td>
                  <td>${data.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="donut-chart-card" style={{backgroundColor: isDark ? 'var(--bg-dark-charts)': 'var(--grey-clicked-color)', color: isDark ? 'white' : 'black'}}>
          <DonutChart />
        </div>
      </div>
    </div>
  )
}

export default Content
