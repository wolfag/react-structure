import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

export const getMe = createAsyncThunk(
  'user/getMe',
  async (params, thunkAPI) => {
    const u = await userApi.getMe();
    return u;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [getMe.pending]: (state, action) => {
      state.loading = true;
    },
    [getMe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getMe.fulfilled]: (state, action) => {
      state.loading = false;
      state.current = action.payload;
    },
  },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
