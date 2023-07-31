import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'Users',
  initialState,
  extraReducers:{},
});

export default usersSlice.reducer;