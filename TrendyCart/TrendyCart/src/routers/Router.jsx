import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/home page/Home";
import CategoryPage from "../category/CategoryPage";
import ProductDetails from '../pages/shop page/ProductDetails';
import Search from '../pages/search/Search';
import ShopPage from '../pages/shop page/ShopPage';
import SignUp from "../pages/profile/SignUp"
import Login from '../pages/profile/Login';
import Contact from '../components/Contact';
import WorkWithUs from '../components/footer component/WorkWithUs';

import Card from '../components/Card';
import AboutUs from '../components/footer component/AboutUs';
import Services from '../components/Services';
import PrivacyPolicy from '../components/PrivacyPolicy';
import FAQ from '../components/footer component/FAQ';
import ReturnPolicy from '../components/footer component/ReturnPolicy';
import Shipping from '../components/footer component/Shipping';
import OrderStatus from '../components/footer component/OrderStatus';
import SingleProduct from '../pages/shop page/SingleProduct';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import UserOrders from '../pages/dashboard/user/UserOrders';
import UserPayments from '../pages/dashboard/user/UserPayments';
import OrderDetails from '../pages/dashboard/user/OrderDetails';
import UserReviews from '../pages/dashboard/user/UserReviews';
import UserProfile from '../pages/dashboard/user/UserProfile';
import AdminDMain from '../pages/dashboard/admin/dashboard/AdminDMain';
import UserDMain from '../pages/dashboard/user/dashboard/UserDMain';
import AddProduct from '../pages/dashboard/admin/addProduct/AddProduct';
import ManageProducts from '../pages/dashboard/admin/manageProduct/ManageProducts';
import UpdateProduct from '../pages/dashboard/admin/manageProduct/UpdateProduct';
import ManageUser from '../pages/dashboard/admin/users/ManageUser';
import ManageOrders from '../pages/dashboard/admin/manageOrders/ManageOrders';
import CancelPage from '../components/CancelPage';
import SuccessPage from '../components/SuccessPage';


const router = createBrowserRouter([
    {
        path: "/", // Root path
        element: <App />, // Main App component
        children: [
            { path: "/", element: <Home /> }, // Home page route
            { path: "/category/:categoryName", element: <CategoryPage /> }, // Category page route with dynamic categoryName
            { path: "/shop/:id",element: <SingleProduct/>},
            

            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
                children: [
                  // User routes
                  { path: '', element: <UserDMain/> },
                  { path: 'orders', element: <UserOrders /> },
                  { path: 'payments', element: <UserPayments /> },
                  {path: 'profile', element: <UserProfile/>},
                  { path: 'reviews', element: <UserReviews/> },
                
                  // Admin routes (only accessible by admins)
                  {
                    path: 'admin',
                    element: <PrivateRoute role="admin"><AdminDMain/></PrivateRoute>,
                  },
                  {
                    path: 'add-new-post',
                    element: <PrivateRoute role="admin"><AddProduct/></PrivateRoute>,
                  },
                  {
                    path: 'manage-products',
                    element: <PrivateRoute role="admin"><ManageProducts/></PrivateRoute>,
                  },
                  {
                    path: 'update-product/:id',
                    element: <PrivateRoute role="admin"><UpdateProduct/></PrivateRoute>,
                  },
                  {
                    path: 'users',
                    element: <PrivateRoute role="admin"><ManageUser/></PrivateRoute>,
                  },
                  {
                    path: 'manage-orders',
                    element: <PrivateRoute role="admin"><ManageOrders/></PrivateRoute>,
                  }
                ],
              },
              {
                path: "/orders/:orderId",
                element: <OrderDetails />
              },
            { path: "/shop", element: <ShopPage/> },
            { path: "/search", element: <Search /> },
            { path: "/signup", element: <SignUp/> },
            { path: "/login", element: <Login/> },
            
            { path: "/contact", element: <Contact/> },
            { path: "/card", element: <Card/> },
            { path: "/services", element: <Services/>},
            { path: "/privacypolicy", element: <PrivacyPolicy/>},
            { path: "/workwithus", element: <WorkWithUs/>},
            { path: "/faq", element: <FAQ/>},
            { path: "/shipping", element: <Shipping/>},
            { path: "/returnpolicy", element: <ReturnPolicy/>},
            { path: "/orderstatus", element: <OrderStatus/>},
            { path: "/aboutus", element: <AboutUs/>},
            { path: "/product/:id", element: <SingleProduct/>},
            { path: "/cancel", element: <CancelPage/>},
            { path: "/success", element: <SuccessPage/>},
            
        ]
    },
]);


export default router; 