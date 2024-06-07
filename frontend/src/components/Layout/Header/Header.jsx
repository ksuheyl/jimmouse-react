import { useContext } from "react";
import "./Header.css";
import propTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../../Context/CartProvider";
const Header = ({ SetIsSearchShow }) => {
  const { pathname } = useLocation();

  const { cartItems } = useContext(CartContext);
  const user = localStorage.getItem("user");
  return (
    <header>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobil">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                <img src="https://i.hizliresim.com/h5eu1f6.png" alt="LOGO" />
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                       Home{/*<i className="bi bi-chevron-down"></i> */}
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      {/* <ul className="menu-dropdown-content">
                        <a href="#">
                          <li>Lorem, ipsum.</li>
                        </a>
                        <a href="#">
                          <li>Lorem, ipsum.</li>
                        </a>
                        <a href="#">
                          <li>Lorem, ipsum.</li>
                        </a>
                        <a href="#">
                          <li>Lorem, ipsum.</li>
                        </a>
                        <a href="#">
                          <li>Lorem, ipsum.</li>
                        </a>
                        <a href="#">
                          <li>Lorem, ipsum.</li>
                        </a>
                        <a href="#">
                          <li>Lorem, ipsum.</li>
                        </a>
                        <a href="#">
                          <li>Lorem, ipsum.</li>
                        </a>
                        <a href="#">
                          <li>Lorem, ipsum.</li>
                        </a>
                        <a href="#">
                          <li>Lorem, ipsum.</li>
                        </a>
                      </ul> */}
                    </div>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      }`}
                    >
                      Shop<i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Lorem, ipsum.
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Lorem, ipsum.
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Lorem, ipsum.
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="megamenu-single">
                          <Link to={"/"}>
                            <img src="https://i.hizliresim.com/h5eu1f6.png" alt="" />
                          </Link>
                          <h3 className="megamenu-single-title">
                            Lorem ipsum dolor sit.
                          </h3>
                          <h4 className="megamenu-single-subtitle">
                            Lorem ipsum dolor sit amet.
                          </h4>
                          <Link
                            to={"/"}
                            className="megamenu-single-button btn-sm btn"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${
                        pathname === "/blog" && "active"
                      }`}
                    >
                      Blog{" "}
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} href="#" className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => SetIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                <a href="#">
                  <i className="bi bi-heart"></i>
                </a>
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
                {user && (
                  <button
                  style={{background:"none"}}
                    onClick={() => {
                      if (window.confirm("Are you Sure to exit")) {
                        localStorage.removeItem("user");
                        window.location.href = "/";
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  SetIsSearchShow: propTypes.func,
};
