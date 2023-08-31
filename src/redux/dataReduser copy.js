import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const mealsReducer = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    increament(state, action) {
      console.log('meals', state)
      const { CatagoryId, typeId, products } = action.payload

      const newState = JSON.parse(JSON.stringify(products))
      console.log('newState', newState)

      const product = newState.map((e) => {
        const cat = e.id === CatagoryId ? e : ''
        const items = cat.list.map((prod) =>
          prod.id == typeId ? { ...prod, order: 1 } : prod,
        )
        console.log('items', items)
      })
      console.log('product', product)
      return newState
    },
    decreament(state, action) {
      const { CatagoryId, typeId } = action.payload
      const newState = JSON.parse(JSON.stringify(state))
      newState[CatagoryId].list[typeId].order -= 1
      return newState
    },
  },
})

export const { increament, decreament } = mealsReducer.actions
export default mealsReducer.reducer
