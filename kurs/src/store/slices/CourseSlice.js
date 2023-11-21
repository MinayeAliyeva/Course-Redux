import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCourse(state, action) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    deleteCourse(state, action) {
      let updatedData = state.data.filter((course) => {
        return course.id != action.payload;
      });
      state.data = updatedData;
    },
    
  },
});

export const courseReducer = courseSlice.reducer;
export const { addCourse, deleteCourse } = courseSlice.actions;
