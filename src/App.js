import React, { useState } from "react";
import "./App.css";
import datas from "./data";
import { useSelector, useDispatch } from "react-redux";
import { addTocart, updateQty } from "./Cardslice";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Header from "./Header";
import Footer from "./Footer";
import UncontrolledExample from "./UncontrolledExample";

function App() {
  const [items, setitem] = useState(datas);
  const state = useSelector((state) => state.cart);
  console.log("app", state);
  const dispatch = useDispatch();

  function AddToCart(data) {
    console.log(state);

    var bool = state.cartitem.includes(data);
    console.log("bool", bool);
    if (bool === false) {
      data.qty++;
      dispatch(addTocart([...state.cartitem, data]));
    } else {
      console.log("else is running");
      // data.qty++;
      // dispatch(addTocart([...state.cartitem]));
      var newqty = data.qty + 1;
      dispatch(updateQty({ id: data.id, qty: newqty }));
    }
  }

  // function remove(data) {
  //   // console.log(data.id);
  //   data.qty = 0;
  //   setcart([...cartItems]);
  //   setcart((prevalue) => {
  //     return prevalue.filter((item) => {
  //       return item.id !== data.id;
  //     });
  //   });
  // }

  return (
    <div>
      <div class="sticky-top">
        <Header />
      </div>
      <div className="bodycontainer">
        <UncontrolledExample />
        <div className="maincontainer">
          {items.map((data, index) => {
            {
              /* const image = require(data.image); */
            }
            return (
              <div key={index} className="childcontainers">
                <img src={data.image} alt="images" />
                <h1>{data.name}</h1>
                <div className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                    color="gold"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                    color="gold"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                    color="gold"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                    color="gold"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                    color="gold"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>

                {/* <iconify-icon inline icon="ic:round-star-rate" style="color: gold;"></iconify-icon> */}
                <button className="appAddcartbtn">
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={() => AddToCart(data)}
                  >
                    <p>Add</p>
                    <AddShoppingCartIcon />
                  </IconButton>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
