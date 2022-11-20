import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import "../src/footer.css"
function Footer(){
const currentYear=new Date().getFullYear()
console.log(currentYear)
    return(
        <div className="footermaincontainer">
          <CopyrightIcon/>Copy rights {currentYear}
        </div>
    )
}


export default Footer;