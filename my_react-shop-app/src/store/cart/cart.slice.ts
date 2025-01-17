import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../products/products.type";
type CartState = {
  products: IProduct[];
  totalPrice: number;
  userId: string;
};
const initialState: CartState = {
  products: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts") || "")
    : [],
  totalPrice: 0,
  userId: localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId") || "")
    : "",
};
export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (order, thunkAPI) => {
    try {
      await axios.post(
        "https://67879217c4a42c9161076410.mockapi.io/orders",
        order
      ); // 주문 데이터 전달하기
      thunkAPI.dispatch(sendOrder()); // 카트 비워주기
    } catch (error) {
      return thunkAPI.rejectWithValue("Error sending order");
    }
  }
);
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId: (state, action :PayloadAction<string>) => {
      state.userId = action.payload;

      localStorage.setItem("userId", JSON.stringify(state.userId));
    },

    removeUserId: (state) => {
      state.userId = "";

      localStorage.setItem("userId", JSON.stringify(state.userId));
    },
    addToCart: (state, action:PayloadAction<IProduct>) => {
      state.products.push({
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      });

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    deleteFromCart: (state, action:PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    decrementProduct: (state, action:PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.price * (item.quantity - 1),
            }
          : item
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    incrementProduct: (state, action:PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.products.reduce(
        (acc, item) => (acc += item.total),
        0
      );
      return state;
    },

    sendOrder: (state) => {
      state.products = [];
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
  },
});
export const {
  addToCart,
  sendOrder,
  deleteFromCart,
  decrementProduct,
  incrementProduct,
  getTotalPrice,
  setUserId,
  removeUserId,
} = cartSlice.actions;

export default cartSlice.reducer;
