import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ChakraProv from "./Provider/ChakraProv";
import QueryProv from "./Provider/QueryProv";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* Tanstack Query Provider */}
        <QueryProv>
            {/* Chakra Provider */}
            <ChakraProv>
                {/* React Router Provider */}
                <RouterProvider router={Routes} />
            </ChakraProv>
        </QueryProv>
    </React.StrictMode>,
);
