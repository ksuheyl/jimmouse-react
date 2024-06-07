import { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import "./Categories.css";
import { message } from "antd";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/categories`);

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("Data fetch failed.");
        }
      } catch (error) {
        console.log("Data error:", error);
      }
    };
    fetchCategories();

    return () => {};
  }, [apiUrl]);

  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Jimmouse</p>
        </div>
        <ul className="category-list">
          {categories.map((category) => (
            <CategoryItem key = {category._id} category={category}/>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
