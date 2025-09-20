import { useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    BarElement,
    Title,
    CategoryScale,
    Tooltip,
    Legend,
    PointElement,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement
  );  


const BarChart = () => {
    const { labels, datasets } = useSelector((state) => state.centerPanel.dashboardData.projectionsVsActuals);

    const options = {
    plugins: {
        legend: {
        display: false
        },
        title: {
        display: true,
        text: 'Projections vs Actuals',
        },
    },
    responsive: true,
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
    <Bar options={options} data={data} style={{height: '100%'}} height={'200'}/>
  )
}

export default BarChart