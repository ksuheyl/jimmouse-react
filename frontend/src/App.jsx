import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ContactPage from "./Pages/ContactPage";
import AuthPage from "./Pages/AuthPage";
import CartPage from "./Pages/CartPage";
import BlogPage from "./Pages/BlogPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import "./App.css";
import UserPage from "./Pages/Admin/UserPage";
import CategoryPage from "./Pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./Pages/Admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./Pages/Admin/Categories/CreateCategoryPage";
import CreateProductPage from "./Pages/Admin/Products/CreateProductPage";
import ProductPage from "./Pages/Admin/Products/ProductPage";
import UpdateProductPage from "./Pages/Admin/Products/UpdateProductPage";
import CouponPage from "./Pages/Admin/Coupons/CouponPage";
import CreateCouponPage from "./Pages/Admin/Coupons/CreateCouponPage";
import UpdateCouponPage from "./Pages/Admin/Coupons/UpdateCouponPage";
import SuccessPage from "./Pages/Success";
import OrdersPage from "./Pages/Admin/OrdersPage";
import DashboardPage from "./Pages/Admin/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/admin/*">
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
      </Route>
    </Routes>
  );
}

export default App;
