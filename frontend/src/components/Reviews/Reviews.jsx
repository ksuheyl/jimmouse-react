import { useState, useEffect } from "react";
import { message } from "antd";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import PropTypes from "prop-types";
import "./Reviews.css";

const Reviews = ({ active, singleProduct, setSingleProduct }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [users, setUsers] = useState([]);
  const thisReview = [];
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          message.error("Data Bring Error");
        }
      } catch (error) {
        console.log("Data Error:", error);
      }
    };
    fetchUsers();
  }, [apiUrl]);
  singleProduct && singleProduct.reviews.forEach((review) => {
    const matchingUsers = users?.filter((user) => user._id === review.user);
    matchingUsers.forEach((matchingUser) => {
      thisReview.push({
        review: review,
        user: matchingUser,
      });
    });
  });
  return (
    <div className={`tab-panel-reviews ${active}`}>
      {singleProduct && singleProduct.reviews.length > 0 ? (
        <>
          <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
          <div className="comments">
            <ol className="comment-list">
              {thisReview.map((item, index) => (
                <ReviewItem key={index} item={item} reviewItem={item} />
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h3>No comments yet...</h3>
      )}

      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />
      </div>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  active: PropTypes.string,
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
