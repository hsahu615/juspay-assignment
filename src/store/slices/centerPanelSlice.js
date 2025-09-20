import { createSlice } from '@reduxjs/toolkit';
import dashboardData from '../../data/dashboardData'

const initialState = {
  dashboardData: dashboardData
};

const centerPanelSlice = createSlice({
  name: 'centerPanel',
  initialState,
  reducers: {
    
  },
});

export default centerPanelSlice.reducer;
