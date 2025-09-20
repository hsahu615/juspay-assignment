import { useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);  



const LineChart = () => {
    const { currentWeekTotal, previousWeekTotal, labels, datasets } = useSelector((state) => state.centerPanel.dashboardData.revenueTrend);

    const options = {
      interaction: {
        intersect: true,
      },
    plugins: {
        legend: {
        display: false
        },
        title: {
          display: true,
          text: `Revenue | Current Week: ${currentWeekTotal} | Previous Week: ${previousWeekTotal}`
        },
    },
    responsive: true,
    elements: {
      line: {
        tension: 0.3
      }
    },
    scales: {
        x: {
        stacked: true,
        grid: {
            display: false
        }
        },
        y: {
        stacked: true,
        ticks: {
            stepSize: 20,
            callback: function(value, index, ticks) {
            return value + 'M';
            },
        }
        },
    },
    };

    const data = {
    labels,
    datasets: datasets ? datasets : []
    };

  return (
    <Line options={options} data={data} style={{height: '100%'}} height={'200'}/>
  )
}

export default LineChart