import { configureStore } from '@reduxjs/toolkit';
import leftPanelReducer from './slices/leftPanelSlice';
import rightPanelReducer from './slices/rightPanelSlice';
import centerPanelReducer from './slices/centerPanelSlice';
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    leftPanel: leftPanelReducer,
    rightPanel: rightPanelReducer,
    centerPanel: centerPanelReducer,
    theme: themeReducer
  },
});

export default store;
