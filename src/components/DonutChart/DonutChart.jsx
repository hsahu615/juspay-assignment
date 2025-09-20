import { useSelector } from 'react-redux';
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  ArcElement,
  plugins
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);  



const DonutChart = () => {
    const { datasets } = useSelector((state) => state.centerPanel.dashboardData.totalSales);

    const data = {
        labels: datasets.map((d) => d.source), 
        datasets: [{
            label: 'Total Sales',
            data: datasets.map((d) => d.value), 
            backgroundColor: datasets.map((d) => d.color),
            hoverOffset: 4 
        }]
    }

    const option = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: `Total Sales`
            }
        }
    }

  return (
    <div className='d-flex flex-column align-items-center'>
        <div className='w-75'><Doughnut data={data} options={option} /></div>
        <div className='my-2'>
        {datasets.map((d) => <div className='d-flex justify-content-between'>
            <p className='me-2 text-center'>
                <span style={{backgroundColor: d.color, color: d.color}} className='rounded-circle mx-2'><FiberManualRecordIcon fontSize='small'/></span>
                <span>{d.source}</span>
            </p>
            <p>${d.value}</p>
        </div>)}
        </div>
    </div>
  )
}


export default DonutChart