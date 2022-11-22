import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    page: 1,
    users: [],
    currentPage: 1,
    maxPage: 1,
    totalRows: 1,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setMaxPage: (state, action) => {
      state.maxPage = action.payload;
    },
    setTotalRows: (state, action) => {
      state.totalRows = action.payload;
    },
    setIncrementPage: (state) => {
      state.page += 1;
    },
    setDecrementPage: (state) => {
      state.page -= 1;
    },
  },
});

export const {
  setUsers,
  setCurrentPage,
  setMaxPage,
  setTotalRows,
  setIncrementPage,
  setDecrementPage,
} = usersSlice.actions;

export default usersSlice.reducer;
