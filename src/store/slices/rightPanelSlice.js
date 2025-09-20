import { createSlice } from '@reduxjs/toolkit';
import notifications from '../../data/notifications'
import activities from '../../data/activities'
import contacts from '../../data/contact'

const initialState = {
  isCollapsed: false,
  notifications: notifications,
  activities: activities,
  contacts: contacts
};

const rightPanelSlice = createSlice({
  name: 'rightPanel',
  initialState,
  reducers: {
    toggleCollapse: (state) => {
      state.isCollapsed = !state.isCollapsed;
    }
  },
});

export const {
  toggleCollapse
} = rightPanelSlice.actions;

export default rightPanelSlice.reducer;
