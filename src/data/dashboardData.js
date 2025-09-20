const dashboardData = {
    summaryStats: {
      Customers: {
        value: '3,781',
        change: 11.01,
      },
      Orders: {
        value: '1,219',
        change: 15.03,
      },
      Revenue: {
        value: '695',
        change: -4.03,
      },
      Growth: {
        value: '30.1',
        change: 6.08,
      }
    },
    projectionsVsActuals: {
      labels: ['Jan', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
        label: 'Projection',
        data: [18, 25, 22, 19, 18, 20] ,
        backgroundColor: 'rgba(168, 197, 218, 1)',
        },
        {
        label: 'Actuals',
        data: [15, 20, 25, 23, 20, 22] ,
        backgroundColor: 'rgba(168, 197, 218, 0.7)',
        }
    ],
    },
    revenueTrend: {
      currentWeekTotal: '58,211',
      previousWeekTotal: '68,768',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Current Week',
          data: [13, 14, 9, 14, 19, 20],
          borderColor: '#000000', 
          fill: false,
        },
        {
          label: 'Previous Week',
          data: [8, 18, 13, 11, 16, 23],
          borderColor: '#A8C5D9', 
          backgroundColor: 'rgba(168, 197, 217, 0.2)',
          fill: true,
        }
      ]
    },
    revenueByLocation: [{
      city: 'New York',
      revenue: 72000
    }, {
      city: 'San Francisco',
      revenue: 39000
    }, {
      city: 'Sydney',
      revenue: 25000
    }, {
      city: 'Singapore',
      revenue: 61000
    }],
  
    topSellingProducts: [{
      name: 'ASOS Ridley High Waist',
      price: 79.49,
      quantity: 82,
      amount: 6518.18
    }, {
      name: 'Marco Lightweight Shirt',
      price: 128.50,
      quantity: 37,
      amount: 4754.50
    }, {
      name: 'Half Sleeve Shirt',
      price: 39.99,
      quantity: 64,
      amount: 2559.36
    }, {
      name: 'Lightweight Jacket',
      price: 20.00,
      quantity: 184,
      amount: 3680.00
    }, {
      name: 'Marco Shoes',
      price: 79.49,
      quantity: 64,
      amount: 1965.81
    }],
    totalSales: {
      mainPercentage: 38.6,
      breakdown: [{
        source: 'Direct',
        value: 300.56,
        color: '#00C49F'
      }, {
        source: 'Affiliate',
        value: 135.18,
        color: '#0088FE'
      }, {
        source: 'Sponsored',
        value: 154.02,
        color: '#FFBB28'
      }, {
        source: 'E-mail',
        value: 48.96,
        color: '#FF8042'
      }]
    }
  };

export default dashboardData;