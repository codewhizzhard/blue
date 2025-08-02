import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
   
    token: token || null,
    selectedProduct: null
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
        },
         setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
    }
})

export const { setCredentials, logout, setSelectedProduct } = authSlice.actions;

export default authSlice.reducer;