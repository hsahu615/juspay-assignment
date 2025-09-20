# Redux Store Documentation

This project uses Redux Toolkit for state management with the following structure:

## Store Structure

```
store/
├── index.js              # Main store configuration
├── slices/
│   ├── leftPanelSlice.js # Left panel state management
│   └── rightPanelSlice.js# Right panel state management
└── README.md            # This documentation
```

## Left Panel Slice

### State Structure
```javascript
{
  isCollapsed: false,
  selectedTab: 'Favorites', // 'Favorites' or 'Recently'
  selectedDashboard: null,
  selectedPage: null,
  dashboards: [...], // From LeftPanelConfig
  pages: [...], // From LeftPanelConfig
  favorites: ['Overview', 'Projects'],
  recently: ['Projects', 'Overview'],
  user: {
    name: 'ByeWind',
    avatar: null,
  },
  isVisible: true,
}
```

### Actions
- `toggleCollapse()` - Toggle panel collapse state
- `setCollapsed(boolean)` - Set collapse state
- `setSelectedTab(tab)` - Set active tab ('Favorites' or 'Recently')
- `setSelectedDashboard(id)` - Select a dashboard
- `setSelectedPage(id)` - Select a page
- `addToFavorites(item)` - Add item to favorites
- `removeFromFavorites(item)` - Remove item from favorites
- `addToRecently(item)` - Add item to recently used
- `toggleVisibility()` - Toggle panel visibility
- `setVisibility(boolean)` - Set panel visibility
- `updateUser(userData)` - Update user information

## Right Panel Slice

### State Structure
```javascript
{
  isCollapsed: false,
  isVisible: true,
  activeTab: 'notifications', // 'notifications', 'activities', 'settings'
  notifications: [...],
  activities: [...],
  settings: {
    theme: 'light',
    notifications: {
      email: true,
      push: true,
      desktop: false,
    },
    layout: {
      sidebarCollapsed: false,
      rightPanelCollapsed: false,
    },
  },
}
```

### Actions
- `toggleCollapse()` - Toggle panel collapse state
- `setCollapsed(boolean)` - Set collapse state
- `toggleVisibility()` - Toggle panel visibility
- `setVisibility(boolean)` - Set panel visibility
- `setActiveTab(tab)` - Set active tab
- `addNotification(notification)` - Add new notification
- `markNotificationAsRead(id)` - Mark notification as read
- `markAllNotificationsAsRead()` - Mark all notifications as read
- `removeNotification(id)` - Remove notification
- `clearAllNotifications()` - Clear all notifications
- `addActivity(activity)` - Add new activity
- `clearActivities()` - Clear all activities
- `updateSettings(settings)` - Update settings
- `updateNotificationSettings(settings)` - Update notification settings
- `updateLayoutSettings(settings)` - Update layout settings
- `setTheme(theme)` - Set theme ('light', 'dark', 'auto')

## Usage Examples

### In Components
```javascript
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisibility, setSelectedTab } from '../store/slices/leftPanelSlice';

const MyComponent = () => {
  const dispatch = useDispatch();
  const { isVisible, selectedTab } = useSelector((state) => state.leftPanel);
  
  const handleToggle = () => {
    dispatch(toggleVisibility());
  };
  
  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'} Panel
      </button>
      <p>Current tab: {selectedTab}</p>
    </div>
  );
};
```

### Using Custom Hook
```javascript
import { useRedux } from '../hooks/useRedux';

const MyComponent = () => {
  const { leftPanel, rightPanel, dispatch } = useRedux();
  
  return (
    <div>
      <p>Left panel visible: {leftPanel.isVisible ? 'Yes' : 'No'}</p>
      <p>Right panel visible: {rightPanel.isVisible ? 'Yes' : 'No'}</p>
    </div>
  );
};
```

## Redux DevTools

The store is configured with Redux DevTools support. You can install the Redux DevTools browser extension to inspect the state and actions in real-time.

## Best Practices

1. **Use selectors**: Always use `useSelector` to access state, never access the store directly
2. **Dispatch actions**: Use `useDispatch` to dispatch actions
3. **Keep state normalized**: Avoid nested objects when possible
4. **Use action creators**: Import and use action creators from slices
5. **Handle loading states**: Consider adding loading states for async operations
6. **Error handling**: Add error states to slices for better error handling

