import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, deleteTocart, updateQty } from "./Cardslice";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import "../src/newcart.css";
import HeaderNewcart from "./HeaderNewcart";
import "../src/headerNewCart.css"


function Newcart() {
  var totalAmount=0;
  console.log("totalamount",totalAmount)
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  console.log("newcart state", state);
  console.log("st", state.cart);
  const [newcart, setnewcart] = React.useState(state.cart.cartitem);
  console.log("newcart", newcart);
  const dispatch = useDispatch();

  function incqty(cartId) {
    console.log("incqty", cartId);

    // // dispatch(addTocart([...state.cart.cartitem]));
    setnewcart((newcart) => {
      return newcart.map((item) => {
        return cartId.id === item.id ? { ...item, qty: item.qty + 1 } : item;
      });
    });
    var newqty = cartId.qty + 1;
    dispatch(updateQty({ id: cartId.id, qty: newqty }));
  }

  function decqty(cartId) {
    console.log("decqty", cartId);
    if (cartId.qty > 1) {
      setnewcart((newcart) => {
        return newcart.map((item) => {
          return cartId.id === item.id ? { ...item, qty: item.qty - 1 } : item;
        });
      });
    }
    // dispatch(addTocart([...state.cart.cartitem]));
  }

  function remove(data) {
    // console.log(data.id);
    dispatch(deleteTocart({ id: data.id }));
    setnewcart((prevalue) => prevalue.filter((item) => data.id !== item.id));
  }

  return (
    <div>
      <HeaderNewcart />
      <div className="cartmaincontainer">
        <div className="cartchildcontainer">
          <table>
            <tr>
              <td>Product</td>
              <td>qty</td>
              <td>price</td>
              <td>Amount</td>
            </tr>

            {newcart.map((item, index) => {
              totalAmount+=item.qty*item.price
              console.log("map",totalAmount)
              return (
                <tr key={index}>
                  <td>
                    <img className="cartimg" src={item.img} alt="image" />
                    {item.name}
                  </td>

                  <td className="cartbtn">
                    <button className="minusbtn " onClick={() => decqty(item)}>
                      -
                    </button>
                    <span> {item.qty}</span>
                    <button className="plusbtn " onClick={() => incqty(item)}>
                      +
                    </button>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.qty * item.price}</td>
                  <td>
                  <DeleteIcon id="deletebtn" onClick={() => remove(item)}/>
                    {/* <button onClick={() => remove(item)}>Remove</button> */}
                  </td>
                </tr>
                
              );
            })}
            <hr></hr>
            <tr><td>Total</td><td></td><td></td><td>{totalAmount}</td>
            </tr>
            <tr><td>GST 18%</td><td></td><td></td><td>{totalAmount*(18/100)}</td></tr>
            <tr><td>Grand Total</td><td></td><td></td><td>{(totalAmount) +(totalAmount*(18/100))}</td></tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Newcart;
