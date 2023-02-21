import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./Cardslice";
import productslice from "./RawData";

export const store=configureStore({
    reducer:{
        cart:cartslice.reducer,
        product:productslice,
    }
})
