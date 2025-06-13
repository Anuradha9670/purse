import React from "react";
import ProductCartModal from "./ProductCartModal";
import './demoStyles.css';

const DemoPage = () => {
  return (
    <div>
      <header>
        <ProductCartModal />
      </header>

      <section className="content">
  <div className="frame-wrapper" id="frame-wrapper">
    <iframe
      className="frame"
      src="https://wp.dreamitsolution.net/totes/"
      width="100%"
      height="400px"
      title="Preview Template"
      sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-popups"
    ></iframe>
  </div>
</section>
    </div>
  );
};

export default DemoPage;
