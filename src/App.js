import React from "react";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import UncontrolledExample from "./UncontrolledExample";
import Product from "./Product";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="sticky-top">
        <Header />
      </div>
      <div className="bodycontainer">
        <UncontrolledExample />
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
