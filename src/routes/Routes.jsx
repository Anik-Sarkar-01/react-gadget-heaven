import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import BlogCards from "../components/BlogCards/BlogCards";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: "/",
                        element: <ProductCards></ProductCards>,
                        loader: () => fetch('../products.json'),
                    },
                    {
                        path: "category/:category",
                        element: <ProductCards></ProductCards>,
                        loader: () => fetch('../products.json'),
                    }
                ]
                
            },
            {
                path: "product/:productId",
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('../products.json')
            },
            {
                path: "statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>,
                loader: () => fetch('../products.json')
            },
            {
                path: "blogs",
                element: <BlogCards></BlogCards>,
                loader: () => fetch('../blogs.json')
                
            }
        ]
    },
]);

export default routes;