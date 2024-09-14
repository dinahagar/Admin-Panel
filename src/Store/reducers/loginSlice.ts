import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginState } from "../../Types/login";

const initialState: LoginState = {
    username: '',
    password: '',
    token: localStorage.getItem('token') ?? ''
  };
  
  const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<Partial<LoginState>>) => ({
        ...state, ...action.payload
      }),
    },
  });
  
  export const { setUser } = loginSlice.actions;
  export default loginSlice.reducer;