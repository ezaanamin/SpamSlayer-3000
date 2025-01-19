import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const SpamChecker = createAsyncThunk(
  'post/postRequest',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/', data);

      if (response.data.error === 'User Exist') {
        return rejectWithValue({ error: 'User Exist' });
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);





export const APISlice = createSlice({
  name: 'API',
  initialState: { data: [], error: null, status: 'idle',verfiedStatus:null},
  reducers: {},
  extraReducers: (builder) => {
  
      builder
      .addCase(SpamChecker.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(SpamChecker.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(SpamChecker.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });

  },

})






export default APISlice.reducer;