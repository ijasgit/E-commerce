import { createSlice } from "@reduxjs/toolkit";
import datas from "./data";

export const productslice = createSlice({
  name: "products",
  initialState: {
  productitems:datas
  },
  reducers:{
    searchFilter:(state,actions)=>{
        console.log("productstateslice",state)
        console.log("productstateslice",actions.payload)
    }
  }
});


export default productslice.reducer
export const {searchFilter}=productslice.actions