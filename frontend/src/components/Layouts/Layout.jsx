import AdminLayout from "./AdminLayout.jsx";
import MainLayout from "./MainLayout.jsx";

const isAdmin = window.location.pathname.startsWith("/admin");

export const Layout = isAdmin ? AdminLayout : MainLayout;
