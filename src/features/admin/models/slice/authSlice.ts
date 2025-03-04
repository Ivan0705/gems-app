import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSchema } from "../types/AuthSchema";
import { IAdmin } from "../types/IAdmin";

const initialState: AuthSchema = {
  isAuth: false,
  admin: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadingLogin: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<IAdmin>) => {
      state.isAuth = true;
      state.admin = action.payload;
      state.isLoading = false;
      localStorage.setItem("admin", JSON.stringify(action.payload));
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.admin = null;
      state.isLoading = false;
      state.error = null;
    },
    setAdminFromLocalStorage: (state, action: PayloadAction<IAdmin>) => {
      state.admin = action.payload;
      state.isAuth = true;
    },
  },
});

export const {
  loadingLogin,
  loginSuccess,
  loginFail,
  logout,
  setAdminFromLocalStorage,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
