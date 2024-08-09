import { Box, Button, Container, Tooltip } from "@mui/material";
import { Link as Scroll } from "react-scroll";
import HelpIcon from "@mui/icons-material/Help";
import DoneIcon from "@mui/icons-material/Done";
import LazyImage from "components/LazyImage";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { H1, Paragraph, Span } from "components/Typography";
import Header from "./Header";
const Section1 = () => {
  return (
    <Box>
      <Header />

      <Container
        id="section-1"
        sx={{
          mt: 12,
          position: "relative",
        }}
      >
        <Box maxWidth="830px" mx="auto" mb={12} textAlign="center">
          <H1 fontSize="40px" mb={3}>
            <Span>Transport Management System</Span>
            <Box color="primary.main" lineHeight={1.2}>
              TMS
            </Box>
          </H1>


          <FlexRowCenter
            sx={{
              mb: 5,
              flexDirection: {
                md: "row",
                xs: "column",
              },
            }}
          >
            <FlexBox
              my={1}
              mr={2}
              alignItems="center"
              fontWeight={500}
              color="grey.900"
            >
              <DoneIcon
                color="success"
                fontSize="small"
                sx={{
                  mr: 0.6,
                }}
              />
              SSR
            </FlexBox>

            <FlexBox
              my={1}
              mr={2}
              alignItems="center"
              fontWeight={500}
              color="grey.900"
            >
              <DoneIcon
                color="success"
                fontSize="small"
                sx={{
                  mr: 0.6,
                }}
              />
              Rest API
            </FlexBox>

            <FlexBox
              my={1}
              alignItems="center"
              fontWeight={500}
              color="grey.900"
            >
              <DoneIcon
                color="success"
                fontSize="small"
                sx={{
                  mr: 0.6,
                }}
              />
              Multi vendor Support
            </FlexBox>
          </FlexRowCenter>
        </Box>
      </Container>
    </Box>
  );
};
export default Section1;
