import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    searchTerm: "",
    data: [],
    updateData: {},
  },
  reducers: {
    addCourse(state, action) {
      const check = state.data.find(
        (course) => course.name === action.payload.name
      );
      if (check) {
        // If the course with the same name exists, update its properties
        state.data = state.data.map((course) =>
          course.name === check.name ? action.payload : course
        );
      } else {
        // If the course doesn't exist, add a new course
        state.data.push({
          name: action.payload.name,
          description: action.payload.description,
          cost: action.payload.cost,
          id: nanoid(),
        });
      }
    },
    deleteCourse(state, action) {
      let updatedData = state.data.filter(
        (course) => course.id !== action.payload
      );
      state.data = updatedData;
    },
    updateData(state, action) {
      // Find the index of the course to update based on the provided id
      const index = state.data.findIndex(
        (course) => course.id === action.payload.id
      );

      if (index !== -1) {
        // If the course is found, update its properties
        state.data[index] = {
          ...state.data[index],
          ...action.payload.updateData,
        };
      }
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
      console.log(action.payload);
    },
  },
});

export const courseReducer = courseSlice.reducer;
export const { addCourse, deleteCourse, updateData, changeSearchTerm } =
  courseSlice.actions;
