import { createSlice } from "@reduxjs/toolkit"

const searchValueSlice = createSlice({
  name: 'searchValueSlice',
  initialState: '',
  reducers: {
    changeFilterValue(_, action) {
      return action.payload
    }
  }
})

export const searchValueReducer = searchValueSlice.reducer
export const { changeFilterValue } = searchValueSlice.actions