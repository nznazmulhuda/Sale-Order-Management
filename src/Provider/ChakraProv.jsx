import { ChakraProvider } from "@chakra-ui/react";
import PropTypes from "prop-types";

function ChakraProv({ children }) {
    return <ChakraProvider>{children}</ChakraProvider>;
}

ChakraProv.propTypes = {
    children: PropTypes.node,
};

export default ChakraProv;
