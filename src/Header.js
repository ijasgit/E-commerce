import React, { useState } from "react";
import "./header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import datas from "./data";
import { searchFilter } from "./RawData";

const Header = () => {
  const [searchitems, setsearchitems] = useState("");
  const dispatch = useDispatch();
  console.log("searchitems", searchitems);
  const state = useSelector((state) => state);
  var array = state.cart.cartitem.length;
  console.log("header state array", array);

  const navto = useNavigate();

  function searchBarFunction(event) {
    console.log("changing", event.target.value);
    var newset = event.target.value;
    setsearchitems(newset);
    var val="corrrfklvml"
    dispatch(searchFilter(val))
  }

  return (
    <div>
      <div className="header">
        <div title="logo">
          <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/Logo_95x.png?v=1614293854" />
        </div>
        <div className="options">
          <div className="searchComponent">
            <input
              onChange={searchBarFunction}
              title="search product what you need..."
              className="searchBar"
              placeholder=""
            ></input>
            <div className="searchIcon">
              <iconify-icon icon="fa-solid:search"></iconify-icon>
            </div>
          </div>
          <div title="Cart">
            <Badge badgeContent={array} id="badgenoti" color="primary">
              <ShoppingCartIcon
                id="cartlogo"
                color="action"
                onClick={() => navto("/cart")}
              />
            </Badge>
          </div>
          <div className="dropDown">
            <h3 className="locationLogo">
              Location
              <iconify-icon icon="carbon:location-filled"></iconify-icon>
              <span className="dropPin">
                <iconify-icon icon="ri:arrow-drop-down-line"></iconify-icon>
              </span>
            </h3>

            <div className="dropDown-content">
              <a href="#">Chennai</a>
              <a href="#">Tambaram</a>
              <a href="#">Thoraipakkam</a>
            </div>
          </div>
          <div className="more-pin">
            <div className="more">
              More
              <span className="dropPin">
                <iconify-icon icon="ri:arrow-drop-down-line"></iconify-icon>
              </span>
            </div>

            <div className="dropDown-content">
              <a href="#">Profile</a>
              <a href="#">Order details </a>
              <a href="#">24X7 customer care </a>
              <a href="#">Setting</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
