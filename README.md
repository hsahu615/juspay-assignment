# Juspay Dashboard Application

A modern, responsive dashboard application built with React, featuring dynamic routing, state management with Redux Toolkit, and interactive data visualization components.

## 🚀 Features

- **Dynamic Dashboard Navigation**: Multiple dashboard views with React Router integration
- **Interactive Charts**: Bar charts, line charts, and donut charts using Chart.js
- **Responsive Design**: Mobile-first design with Bootstrap and custom CSS
- **State Management**: Centralized state management with Redux Toolkit
- **Search & Pagination**: Advanced search functionality with pagination for orders
- **Material UI Components**: Modern UI components with Material-UI
- **Collapsible Panels**: Left and right panels with collapse functionality
- **Real-time Data**: Dynamic data updates and filtering

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Routing**: React Router DOM 7.9.1
- **State Management**: Redux Toolkit 2.9.0
- **UI Framework**: Material-UI 7.3.2, Bootstrap 5.3.8
- **Charts**: Chart.js 4.5.0, React-ChartJS-2 5.3.0
- **Build Tool**: Vite 7.1.6
- **Styling**: CSS3 with CSS Variables
- **Icons**: Material-UI Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.0 or higher)
- npm (version 8.0 or higher)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
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
├── components/           # Reusable UI components
│   ├── Accordion/       # Collapsible accordion components
│   ├── BarChart/        # Bar chart visualization
│   ├── Content/         # Main content area
│   ├── DonutChart/      # Donut chart visualization
│   ├── LeftPanel/       # Left navigation panel
│   ├── LineChart/       # Line chart visualization
│   ├── Nav/            # Navigation bar
│   ├── Orders/         # Orders management
│   └── RightPanel/     # Right sidebar panel
├── data/               # Static data and configurations
│   ├── activities.jsx  # Activity data
│   ├── contact.jsx     # Contact information
│   ├── dashboardData.js # Dashboard metrics
│   ├── dashboards.jsx  # Dashboard configurations
│   ├── notifications.jsx # Notification data
│   ├── orders.jsx      # Orders data
│   └── pages.jsx       # Page configurations
├── pages/              # Page components
│   └── Home.jsx        # Main home page
├── store/              # Redux store configuration
│   ├── index.js        # Store setup
│   └── slices/         # Redux slices
├── styles/             # Global styles
└── utils/              # Utility functions
```

## 🎯 Key Components

### Dashboard Navigation
- **Default Dashboard**: Overview with summary statistics
- **eCommerce Dashboard**: Complete eCommerce analytics with charts
- **Projects Dashboard**: Project management interface
- **Online Courses Dashboard**: Course management system

### Interactive Features
- **Search Functionality**: Real-time search across orders
- **Pagination**: Efficient data pagination with 10 items per page
- **Filtering**: Advanced filtering capabilities
- **Responsive Charts**: Interactive data visualizations

### Panel Management
- **Left Panel**: Navigation with collapsible sections
- **Right Panel**: Notifications, activities, and settings
- **Collapsible Design**: Space-efficient layout management

## 🔄 State Management

The application uses Redux Toolkit for state management with the following slices:

- **leftPanelSlice**: Manages left panel state, navigation, and user preferences
- **rightPanelSlice**: Handles right panel state, notifications, and activities
- **centerPanelSlice**: Manages dashboard data and content state

## 🎨 Design Decisions

### 1. Component Architecture
- **Modular Design**: Each component is self-contained with its own styles and logic
- **Reusable Components**: Shared components like charts and panels for consistency
- **Separation of Concerns**: Clear separation between UI, data, and business logic

### 2. State Management Strategy
- **Redux Toolkit**: Chosen for predictable state management and developer tools
- **Normalized State**: Flat state structure for better performance
- **Action-based Updates**: All state changes go through defined actions

### 3. Routing Implementation
- **React Router**: Client-side routing for seamless navigation
- **Nested Routes**: Hierarchical route structure for better organization
- **Dynamic Navigation**: Route-based navigation with active state management

### 4. Data Visualization
- **Chart.js Integration**: Robust charting library with React wrapper
- **Responsive Charts**: Charts adapt to different screen sizes
- **Interactive Elements**: Hover effects and click interactions

## 🚧 Challenges Faced & Solutions

### 1. Pagination Implementation
**Challenge**: Complex pagination logic with search functionality
**Solution**: 
- Separated data filtering from pagination logic
- Implemented proper state management for filtered vs displayed data
- Added automatic page reset when search changes

### 2. Router Integration
**Challenge**: Integrating React Router with existing state management
**Solution**:
- Created route mapping system for navigation
- Implemented active state management based on current route
- Used Link components for proper navigation

### 3. Responsive Design
**Challenge**: Ensuring consistent layout across different screen sizes
**Solution**:
- Used CSS Grid and Flexbox for flexible layouts
- Implemented collapsible panels for space management
- Added responsive breakpoints for mobile devices

### 4. Chart Integration
**Challenge**: Making charts responsive and interactive
**Solution**:
- Used React-ChartJS-2 wrapper for better React integration
- Implemented responsive chart configurations
- Added proper data formatting for chart consumption

## 🚀 Improvements Made

### 1. Performance Optimizations
- **Efficient Re-renders**: Used React.memo and useMemo for performance
- **Lazy Loading**: Implemented code splitting for better load times
- **Optimized State Updates**: Reduced unnecessary state updates

### 2. User Experience Enhancements
- **Loading States**: Added loading indicators for better UX
- **Error Handling**: Implemented proper error boundaries
- **Accessibility**: Added ARIA labels and keyboard navigation

### 3. Code Quality
- **ESLint Configuration**: Set up comprehensive linting rules
- **Component Documentation**: Added JSDoc comments for better maintainability
- **Type Safety**: Used PropTypes for runtime type checking

### 4. Developer Experience
- **Hot Reload**: Fast development with Vite's hot module replacement
- **Redux DevTools**: Integrated Redux DevTools for debugging
- **Clear Project Structure**: Organized file structure for easy navigation

## 🔮 Future Enhancements

1. **Authentication**: User authentication and authorization
2. **Real-time Updates**: WebSocket integration for live data
3. **Dark Mode**: Theme switching functionality
4. **Advanced Filtering**: More sophisticated filtering options
5. **Export Functionality**: Data export capabilities
6. **Mobile App**: React Native version for mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Frontend Development**: React, Redux, Material-UI
- **UI/UX Design**: Custom CSS, Bootstrap
- **Data Visualization**: Chart.js, React-ChartJS-2
- **Build Tools**: Vite, ESLint

## 📞 Support

For support, email support@example.com or create an issue in the repository.

---

**Built with ❤️ using React and modern web technologies**
