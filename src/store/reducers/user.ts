import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  isLogIn: boolean
}

const initialState = {
  isLogIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state) => {
      state.isLogIn = true
    },
    logOut: state => {
      state.isLogIn = false
    }
  }
})

export const {logIn, logOut} = userSlice.actions

export default userSlice.reducer
