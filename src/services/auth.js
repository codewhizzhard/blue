import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
   
    token: token || null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { token } = action.payload;
            
            state.token = token;

            // save to localStorage

             localStorage.setItem("token", token);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;

            //Remove from localStorage

             localStorage.removeItem("token");
        }
    }
})

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;