import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from 'constants/constants'

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await fetch(`${API_URL}products/find-category`)
  return res?.json()
})
export const addNewCategory = createAsyncThunk(
  'category/addNewCategory',
  async function (dataImput, { rejectWithValue, dispatch }) {
    try {
      let formData = new FormData()
      formData.append('file', dataImput.file.image_file)
      formData.append('name', dataImput.name)
      formData.append('index', dataImput.index)
      const response = await fetch(`${API_URL}products/create-cat`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Can't add task. Server error.")
      }

      const data = await response.json()
      //dispatch(addProduct(data))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)
export const addNewProduct = createAsyncThunk(
  'products/addNewProduct',
  async function (dataImput, { rejectWithValue, dispatch }) {
    try {
      let formData = new FormData()
      formData.append('file', dataImput.file.image_file)
      formData.append('name', dataImput.name)
      formData.append('category', dataImput.id)
      formData.append('description', dataImput.description)
      formData.append('price', dataImput.price)
      const response = await fetch(`${API_URL}products/create-prod`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Can't add task. Server error.")
      }

      const data = await response.json()
      dispatch(addProduct(data))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${API_URL}products/prod/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error("Can't delete task. Server error.")
      }

      //dispatch(removeTodo({ id }))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${API_URL}products/cat/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error("Can't delete task. Server error.")
      }

      //dispatch(removeTodo({ id }))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

const productSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {
    addProduct(state, action) {
      state.data.product.push(action.payload)
    },
    toggleComplete(state, action) {
      const toggledProduct = state.data.product.find(
        (product) => product.id === action.payload.id,
      )
      toggledProduct.completed = !toggledProduct.completed
    },
    removeProduct(state, action) {
      state.data.product = state.data.product.filter(
        (product) => product.id !== action.payload.id,
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = 'loading'
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = 'succeeded'
      state.data = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = 'failed'
    })
  },
})
const { addProduct, toggleComplete, removeProduct } = productSlice.actions
export default productSlice.reducer
