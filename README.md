# Dashboard Application

Assignment by a company to display different widgets and dashboard. 

## Hosted on Github Pages
[Link to site](https://hsahu615.github.io/juspay-assignment/)

## 🚀 Features

- **Dynamic Dashboard Navigation**: Multiple dashboard views with React Router integration
- **Interactive Charts**: Bar charts, line charts, and donut charts using Chart.js
- **State Management**: Centralized state management with Redux Toolkit
- **Search & Pagination**: Advanced search functionality with pagination for orders
- **Material UI Components**: Modern UI components with Material-UI
- **Collapsible Panels**: Left and right panels with collapse functionality
- **Real-time Data**: Dynamic data updates and filtering

## 🛠️ Tech Stack

- **Frontend**: React 19
- **State Management**: Redux Toolkit
- **UI Framework**: Material-UI, Bootstrap 5
- **Charts**: Chart.js, React-ChartJS
- **Build Tool**: Vite
- **Icons**: Material-UI Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.0 or higher)
- npm (version 8.0 or higher)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/hsahu615/juspay-assignment
   cd Juspay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run deploy` - Deploy to GitHub Pages

## 🏗️ Project Structure

```
src/
├── components/           
│   ├── Accordion/      
│   ├── BarChart/         
│   ├── Content/          
│   ├── DonutChart/       
│   ├── LeftPanel/       
│   ├── LineChart/        
│   ├── Nav/            
│   ├── Orders/         
│   └── RightPanel/      
├── data/                
│   ├── activities.jsx  
│   ├── contact.jsx     
│   ├── dashboardData.js 
│   ├── dashboards.jsx  
│   ├── notifications.jsx 
│   ├── orders.jsx      
│   └── pages.jsx       
├── pages/              
│   └── Home.jsx        
├── store/              
│   ├── index.js        
│   └── slices/        
├── styles/            
└── utils/              
```

## 🎯 Key Components

### Dashboard Navigation
- **eCommerce Dashboard**: Overview with stats and charts
- **Orders Dashboard**: Complete Order list

### Interactive Features
- **Search Functionality**: Real-time search across orders
- **Pagination**: Efficient data pagination with 10 items per page
- **Responsive Charts**: Interactive data visualizations

## 🔄 State Management

The application uses Redux Toolkit for state management with the following slices:

- **leftPanelSlice**: Manages left panel state, navigation, and user preferences
- **rightPanelSlice**: Handles right panel state, notifications, and activities
- **centerPanelSlice**: Manages dashboard data and content state

