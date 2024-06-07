import "./Brands.css";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="section-title">
          <h2>All brands</h2>
          <p>Jimmouse</p>
        </div>
        <ul className="brand-list">
          <li className="brand-item">
            <a href="#">
              <img src="images/brands/brands1.png" alt="" />
            </a>
          </li>
          <li className="brand-item">
            <a href="#">
              <img src="images/brands/brands2.png" alt="" />
            </a>
          </li>

          <li className="brand-item">
            <a href="#">
              <img src="images/brands/brands3.png" alt="" />
            </a>
          </li>
          <li className="brand-item">
            <a href="#">
              <img src="images/brands/brands1.png" alt="" />
            </a>
          </li>
          <li className="brand-item">
            <a href="#">
              <img src="images/brands/brands2.png" alt="" />
            </a>
          </li>
          <li className="brand-item">
            <a href="#">
              <img src="images/brands/brands3.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
