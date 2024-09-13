import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
    usename: string;
    password: string; 
    token: string;
}

const initialState: LoginState = {
    usename: '',
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