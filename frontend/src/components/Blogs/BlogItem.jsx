import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <li className="blog-item">
      <Link to={"/blog/blogId"} className="blog-image">
        <img src="images/slider/slider5.jpg" alt="" />
      </Link>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>Date time here</span>-<span>Comments here here</span>
        </div>
        <div className="blog-info-center">
          <a href="#">desc or tile</a>
        </div>
        <div className="blog-info-bottom">
          <Link to={"/blog/blogId"}>Read more</Link>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
