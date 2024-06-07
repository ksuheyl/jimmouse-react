import Breadcrumb from "./Breadcrumb/Breadcrumb.jsx";
import PropTypes from "prop-types";
import Gallery from "./Gallery/Gallery.jsx";
import "./ProductDetails.css";
import ProductInfo from "./ProductInfo/ProductInfo.jsx";
import Tabs from "./Tabs/Tabs.jsx";
const ProductDetails = ({ singleProduct, setSingleProduct }) => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery singleProduct={singleProduct} />
              <ProductInfo singleProduct={singleProduct} />
            </main>
          </div>
          <Tabs
            singleProduct={singleProduct}
            setSingleProduct={setSingleProduct}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
