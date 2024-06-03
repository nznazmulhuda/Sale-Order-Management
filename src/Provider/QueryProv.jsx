import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropTypes from "prop-types";

const queryClient = new QueryClient();

function QueryProv({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

QueryProv.propTypes = {
    children: PropTypes.node,
};

export default QueryProv;
