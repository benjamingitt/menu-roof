import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { API_URL } from 'constants/constants'

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await fetch(`${API_URL}products/find-category`)
  return res?.json()
})
export const searchProducts = createAsyncThunk(
  'searchProducts',
  async (dataImput) => {
    const res = await fetch(`${API_URL}products/find-product?name=${dataImput}`)
    if (!res.ok) {
      throw new Error("Can't add task. Server error.")
    }
    return res?.json()
  },
)
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
      dispatch(addCategory(data))
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
      formData.append('size', dataImput.size)
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
export const editNewProduct = createAsyncThunk(
  'products/editNewProduct',
  async function (dataImput, { rejectWithValue, dispatch }) {
    try {
      let formData = new FormData()
      if (dataImput.sfile) {
        formData.append('file', dataImput.sfile.image_file)
      }
      formData.append('name', dataImput.sname)
      formData.append('description', dataImput.sdescription)
      formData.append('price', dataImput.sprice)
      formData.append('size', dataImput.ssize)

      const response = await fetch(`${API_URL}products/prod/${dataImput.id}`, {
        method: 'PUT',
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
export const editNewCategory = createAsyncThunk(
  'category/editNewCategory',
  async function (dataImput, { rejectWithValue, dispatch }) {
    try {
      let formData = new FormData()
      if (dataImput.sfile) {
        formData.append('file', dataImput.sfile.image_file)
      }
      formData.append('name', dataImput.sname)
      formData.append('index', dataImput.sindex)
      const response = await fetch(`${API_URL}products/cat/${dataImput.id}`, {
        method: 'PUT',
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

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${API_URL}products/prod/${id.id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error("Can't delete task. Server error.")
      }

      //dispatch(removeProduct({ id }))
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

      dispatch(removeCategory({ id }))
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
    search: [],
  },
  reducers: {
    addProduct(state, action) {
      const cat = state.data.find((cat) => cat.id == action.payload.category)
      cat.list.push(action.payload)
    },
    addCategory(state, action) {
      state.data.push(action.payload)
    },
    searchProduct(state, action) {
      return action.payload
    },
    toggleComplete(state, action) {
      const toggledProduct = state.data.product.find(
        (product) => product.id === action.payload.id,
      )
      toggledProduct.completed = !toggledProduct.completed
    },
    removeProduct(state, action) {
      const cat = state.data.find((cat) => cat.id == action.payload.idCat)
      const prod = cat.list.find((prod) => prod.id == action.payload.id)
    },
    removeCategory(state, action) {
      state.data = state.data.filter(
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
    builder.addCase(searchProducts.pending, (state, action) => {
      state.isLoading = 'loading'
    })
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.isLoading = 'succeeded'
      console.log('filll', action.payload)
      state.search = action.payload
    })
    builder.addCase(searchProducts.rejected, (state, action) => {
      state.isError = 'failed'
    })
  },
})
const {
  addProduct,
  addCategory,
  toggleComplete,
  searchProduct,
  removeCategory,
} = productSlice.actions
export default productSlice.reducer
