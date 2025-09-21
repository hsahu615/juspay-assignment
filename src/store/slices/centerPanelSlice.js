import { createSlice } from '@reduxjs/toolkit'
import dashboardData from '../../data/dashboardData'
import orders from '../../data/orders'

const initialState = {
  dashboardData: dashboardData,
  orders: orders
}

const centerPanelSlice = createSlice({
  name: 'centerPanel',
  initialState,
  reducers: {
  }
})

export default centerPanelSlice.reducer
