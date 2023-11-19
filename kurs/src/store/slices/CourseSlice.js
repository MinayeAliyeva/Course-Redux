import { createSlice } from "@reduxjs/toolkit";

const courseSlice=createSlice({
    name:'courses',
    initialState:{
        searchTerm:'',
        data:[]
    },
    reducers:{

    }
})

export const courseReducer =courseSlice.reducer