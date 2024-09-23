import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ----------------------------- User Components ----------------------------- */
import { Home } from "./components/User/Home";
import { UserLayout } from "./Layouts/UserLayout";
import { AboutPage } from "./components/User/Pages/AboutPage";
import { ContactPage } from "./components/User/Pages/ContactPage";
import { ProjectPage } from "./components/User/Pages/ProjectPage";

/* ---------------------------- Admin Components ---------------------------- */
import { AdminLayout } from "./Layouts/AdminLayout";
import { AdminLogin } from "./components/admin/Login/AdminLogin";
import { AdminDashboard } from "./components/admin/Dashboard/AdminDashboard";
import { ManageCustomers } from "./components/admin/Customer/ManageCustomers";
import { AddCategory } from "./components/admin/Category/AddCategory";
import { ManageCategory } from "./components/admin/Category/ManageCategory";
import { AddProducts } from "./components/admin/Products/AddProducts";
import { AddSubcategory } from "./components/admin/Subcategory/AddSubcategory";
import { ManageProducts } from "./components/admin/Products/ManageProducts";
import { ManageSubcategory } from "./components/admin/Subcategory/ManageSubcategory";
import { ManageOrders } from "./components/admin/Orders/ManageOrders";
import { ManageReviews } from "./components/admin/Review/ManageReviews";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/about-me" element={<AboutPage />} />
            <Route path="/contact-me" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Route>

          {/* Admin panel routes */}
          <Route path="/" element={<AdminLayout />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route
              path="/admin-managecustomers"
              element={<ManageCustomers />}
            />
            <Route path="/admin-addproducts" element={<AddProducts />} />
            <Route path="/admin-manageproducts" element={<ManageProducts />} />
            <Route path="/admin-addcategory" element={<AddCategory />} />
            <Route path="/admin-managecategory" element={<ManageCategory />} />
            <Route path="/admin-addsubcategory" element={<AddSubcategory />} />
            <Route
              path="/admin-managesubcategory"
              element={<ManageSubcategory />}
            />
            <Route path="/admin-manageorders" element={<ManageOrders />} />
            <Route path="/admin-managereviews" element={<ManageReviews />} />
          </Route>

          {/* Admin login page */}
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </>
  );
};
