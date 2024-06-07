import PropTypes from "prop-types";
const CategoryItem = ({ category }) => {
  console.log(category.image);

  return (
    <li className="category-item">
      <a href="#">
        <img src={category.image} alt="img" 
        className="category-image" />
        <span className="category-title">{category.name}</span>
      </a>
    </li>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  category: PropTypes.object,
};
