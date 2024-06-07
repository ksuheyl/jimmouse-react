import "./Policy.css";
const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-text">
              <strong>free delivery</strong>
              <span>from $39.99</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-text">
              <strong>Support 7/24</strong>
              <span>Online 24 Hours</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-text">
              <strong>30 Days Return</strong>
              <span>Simply Return</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card"></i>
            <div className="policy-text">
              <strong>Payment Method</strong>
              <span>Secure Payment</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Policy;
