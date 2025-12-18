import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    signupStart(state) {
      state.loading = true;
    },

    signupSuccess(state, action) {

      console.log("userdata" , action.payload.user);      
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token; // shall i keepmthe token or not ? 
    },

    signupFailure(state) {
      state.loading = false;
      state.user = null ; 
    },

    loginStart(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const {signupStart , signupSuccess , signupFailure, loginStart, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
