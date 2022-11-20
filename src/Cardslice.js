import { createSlice } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";

export const cartslice = createSlice({
  name: "cart",
  initialState: {
    cartitem: [],
  },
  reducers: {
    addTocart: (state, action) => {
      console.log("slice state", action);
      state.cartitem = action.payload;
      console.log(state.cartitem);
      // console.log(cartslice.cartitem)
    },
    deleteTocart: (state, action) => {
      state.cartitem = state.cartitem.filter(
        (user) => user.id !== action.payload.id
      );
      console.log("delete", action);
      console.log("state after delete", state.cartitem);
    },
    updateQty:(state,action)=>{
        state.cartitem.map((user)=>{
            if(user.id===action.payload.id){

                user.qty=action.payload.qty 
            }
        })
    }
  },
});

export const { addTocart, deleteTocart,updateQty } = cartslice.actions;
export default cartslice.reducer;
