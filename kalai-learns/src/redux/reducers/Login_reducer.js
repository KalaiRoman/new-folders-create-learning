import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
  loading: true,
  error: "",
  data: [],
};

const Login_reducers = createSlice({
  name: "Login_Reducer",
  initialState: inititalState,
  reducers: {
    LoginLoading: (state, action) => {
      state.loading = true;
      state.error = "";
      state.data = [];
    },
    LoginSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    },
    LoginError: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = !action.payload
        ? "Something Went Wrong User Data...!"
        : action.payload;
    },
  },
});

export const { LoginLoading, LoginSuccess, LoginError } =
  Login_reducers.actions;

export default Login_reducers.reducer;
