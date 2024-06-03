import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import {
    ActiveSaleOrders,
    CompletedSaleOrders,
    Login,
    SaleOrder,
} from "../Pages";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <ActiveSaleOrders />,
            },
            {
                path: "/complete_sale_order",
                element: <CompletedSaleOrders />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/sale_order",
                element: <SaleOrder />,
            },
        ],
    },
]);

export default Routes;
