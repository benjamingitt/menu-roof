import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const tabsReducer = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTab(state, action) {
      return action.payload
    },
  },
})
export const { setTab } = tabsReducer.actions
export default tabsReducer.reducer
