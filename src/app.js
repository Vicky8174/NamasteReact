import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "/src/Components/Header"
import {Body} from "./Components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import {About} from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";


const AppLayout = () => {

return (
   <Provider store = {appStore}>
    <div className="app">
        <Header />
        <Outlet />
        <Footer/>
    </div>
    </Provider>
);
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            }
        ],
        errorElement:<Error/>
    }
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
