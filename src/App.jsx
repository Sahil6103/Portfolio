import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

/* ----------------------------- User Components ----------------------------- */
import { UserLayout } from "./Layouts/UserLayout";
import { Home } from "./Components/User/Home";
import { AboutPage } from "./Components/User/Pages/AboutPage";
import { ContactPage } from "./Components/User/Pages/ContactPage";
import { ProjectPage } from "./Components/User/Pages/ProjectPage";

/* ---------------------------- Admin Components ---------------------------- */
import { AdminLayout } from "./Layouts/AdminLayout";
import { AdminLogin } from "./Components/admin/Login/AdminLogin";
import { AdminDashboard } from "./Components/admin/Dashboard/AdminDashboard";
import { ManageCustomers } from "./Components/admin/Customer/ManageCustomers";
import { AddCategory } from "./Components/admin/Category/AddCategory";
import { ManageCategory } from "./Components/admin/Category/ManageCategory";
import { AddProducts } from "./Components/admin/Products/AddProducts";
import { AddSubcategory } from "./Components/admin/Subcategory/AddSubcategory";
import { ManageProducts } from "./Components/admin/Products/ManageProducts";
import { ManageSubcategory } from "./Components/admin/Subcategory/ManageSubcategory";
import { ManageOrders } from "./Components/admin/Orders/ManageOrders";
import { ManageReviews } from "./Components/admin/Review/ManageReviews";

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
