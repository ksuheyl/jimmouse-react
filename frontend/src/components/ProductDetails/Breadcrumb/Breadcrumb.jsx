import "./Breadcrumb.css";
const Breadcrumb = () => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Athlete Support</a>
          </li>
          <li>
            <a href="#">Protein</a>
          </li>
          <li>Bio Protein</li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
