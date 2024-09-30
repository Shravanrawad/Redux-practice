import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
    IDLE: 'IDLE',
    ERROR: 'ERROR',
    LOADING: 'LOADING'
})

const productslice = createSlice({
      name: 'product',
      initialState: {
           data: [],
           status: STATUSES.IDLE,
      },
 
      extraReducers: (builder) => {
        builder 
        .addCase(fetchproducts.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchproducts.fulfilled , (state, action) => {
            state.data = action.payload
            state.status = STATUSES.IDLE
        })
        .addCase(fetchproducts.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        })
      }
});

export const {setProduct, setstatus} = productslice.actions
export default productslice.reducer;

export const fetchproducts = createAsyncThunk('product/fetch', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
})

