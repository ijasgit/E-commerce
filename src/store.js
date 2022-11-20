import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./Cardslice";

export const store=configureStore({
    reducer:{
        cart:cartslice.reducer
    }
})
