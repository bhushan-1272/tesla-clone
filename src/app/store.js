import carReducer from "../features/car/carSlice";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
