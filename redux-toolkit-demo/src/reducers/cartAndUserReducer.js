import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: 0,
    items: [2],
  },
  reducers: {
    createCart: (state, param) => {
      state.cart += param.payload;
    },
    deleteCart: (state, param) => {
      state.cart -= param.payload;
    },
    createItems: (state, param) => {
      state.items = [...state.items, param.payload];
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: 10
  },
  reducers: {
    createUser: (state, param) => {
      state.user += param.payload;
    },
    deleteUser: (state, param) => {
      state.user -= param.payload;
    },
  },
});


export const { createCart, deleteCart, createItems } = cartSlice.actions;
export const { createUser, deleteUser} = userSlice.actions;

export const cartReducer = cartSlice.reducer
export const userReducer = userSlice.reducer

