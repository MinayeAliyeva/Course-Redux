import { configureStore } from "@reduxjs/toolkit";

import { courseReducer } from "./slices/CourseSlice";
export const store = configureStore({
  reducer: {
    courses:courseReducer
  },
});
