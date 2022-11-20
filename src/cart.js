// import React from "react";

// function Cart(props) {
// var cartdata = props.cartdata;
//   console.log("cartdata",cartdata)

//   var [newcart, setnewcart] = React.useState(cartdata);
//   console.log("newcart",newcart)

//   function incqty(data) {
//     data.qty++;
//     setnewcart([...newcart]);
//     console.log(data,newcart);
//   }

//   function decqty(data) {
//     if (data.qty > 0) {
//       data.qty--;
//       setnewcart([...newcart]);
//       console.log(data);
//     }
//   }

//   function remove(data) {
//     console.log("removed");
//     console.log(data,data.id);
//     setnewcart((prevalue) => {
//       return prevalue.filter((item, index) => {
//         console.log("index",index)
//         return index !== (data.id);
//       });
//     });
//   }

//   return ;
// }

// export default Cart;
