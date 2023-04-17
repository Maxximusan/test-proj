import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box } from "../Box";
import { Link } from "../SharedLayout/SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Box m="0 auto" p="0 16px" max-width="960px">
      <Box as="header" borderBottom="3px solid #ECECEC" p={4} mb={16}>
        <Box as="nav">
          <Link to="/">Home</Link>
          <Link to="/tweets">Users</Link>
        </Box>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
