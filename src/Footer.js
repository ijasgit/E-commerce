import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../src/footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <div className="footermaincontainer">
      <div className="leftpart">
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/Logo_95x.png?v=1614293854"
          alt="logoimg"
        />{" "}
        <CopyrightIcon />{""}
        <div>
          <span>Copy rights {currentYear}</span>{" "}
        </div>
      </div>

      <div className="paymode">
        <img
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/paypal_new_x40.png?v=1614321621"
          alt="paypal"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/visa_2_x40.png?v=1614321621"
          alt="visa"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/master_3_x40.png?v=1614321621"
          alt="master"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/apple_pay_4_x40.png?v=1614321621"
          alt="applegpay"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/google_pay_5_x40.png?v=1614321621"
          alt="gpay"
        />
      </div>
    </div>
  );
}

export default Footer;
