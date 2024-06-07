import { useState } from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import PropTypes from "prop-types";
import Search from "../Search/Search";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  return (
    <div className="main-layout">
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}/>
      <Header SetIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
