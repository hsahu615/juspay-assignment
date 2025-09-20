import { configureStore } from '@reduxjs/toolkit';
import leftPanelReducer from './slices/leftPanelSlice';
import rightPanelReducer from './slices/rightPanelSlice';
import centerPanelReducer from './slices/centerPanelSlice';

export const store = configureStore({
  reducer: {
    leftPanel: leftPanelReducer,
    rightPanel: rightPanelReducer,
    centerPanel: centerPanelReducer
  },
});

export default store;
