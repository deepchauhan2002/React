import { useState } from "react";
import Box from "@mui/material/Box";
import Setting from "components/Setting";
import Footer from "pages-sections/landing/Footer";
import Section1 from "pages-sections/landing/Section1";

const IndexPage = () => {
  const [filterDemo, setFilterDemo] = useState("");
  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper">
      <Section1 />
      <Footer />
      <Setting />
    </Box>
  );
};
export default IndexPage;
