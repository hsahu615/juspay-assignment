import { createSlice } from '@reduxjs/toolkit'
import dashboards from '../../data/dashboards'
import pages from '../../data/pages'

const initialState = {
  isCollapsed: false,
  dashboards: dashboards,
  pages: pages
}

const leftPanelSlice = createSlice({
  name: 'leftPanel',
  initialState,
  reducers: {
    toggleCollapse: (state) => {
      state.isCollapsed = !state.isCollapsed
    }
  }
})

export const {
  toggleCollapse
} = leftPanelSlice.actions

export default leftPanelSlice.reducer
