import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ProductService from 'API/ProductService'
import produce from 'immer'

let initialState = []

export const mealsReducer = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    increament(state, action) {
      console.log('meals', state)
      const { meal } = action.payload
      const product = state.find((todo) => todo.id === meal.id)
      if (product) {
        product.order += 1
      } else {
        state.push({ ...meal, order: 1 })
      }

      return state
    },
    decreament(state, action) {
      console.log('meals', state)
      const { meal } = action.payload
      const product = state.find((prod) => prod.id === meal.id)

      product.order -= 1

      return state
    },
  },
})

export const { increament, decreament } = mealsReducer.actions
export default mealsReducer.reducer
