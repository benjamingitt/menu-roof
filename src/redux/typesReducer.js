import { createSlice } from '@reduxjs/toolkit'

const initialState = 6

export const typesReducer = createSlice({
  name: 'types',
  initialState,
  reducers: {
    setType(state, action) {
      state = action.payload
      return action.payload
    },
  },
})
export const { setType } = typesReducer.actions
export default typesReducer.reducer
