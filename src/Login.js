import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import "../src/Login.css";
import Footer from "./Footer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navto = useNavigate();
  const [visible, setvisibility] = useState(false);
  const info = {
    name: "ijas",
    password: "1234",
  };

  const [verify, setVerify] = useState(info);

  function navgi(event) {
    event.preventDefault();
    var input = document.getElementById("name");
    var password = document.getElementById("password");
    console.log(verify, input.value, password.value);

    if (verify.name === input.value && verify.password === password.value) {
      navto("app");
    } else {
      console.log("enter correct details");
      alert("enter all user details");
    }
  }

  return (
    <div>
      <div className="body">
        <form className="loginContainer">
          <div className="mb-3">
            <label  className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control name"
              id="name"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Password
            </label>
            <div className="passwordfield">
              <div>
                <input
                  type={visible ? "text" : "password"}
                  className="form-control password"
                  id="password"
                  required
                />
              </div>
              <div className="visibleicon">
                {visible ? (
                  <VisibilityOffIcon
                    onClick={() =>
                      setvisibility((prevalue) => {
                        return !prevalue;
                      })
                    }
                  />
                ) : (
                  <VisibilityIcon
                    onClick={() =>
                      setvisibility((prevalue) => {
                        return !prevalue;
                      })
                    }
                  />
                )}
              </div>
            </div>
          </div>
       
          <button type="submit" className="btn btn-primary" onClick={navgi}>
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
