import React, { useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SiWebmoney } from "react-icons/si";
import { IconButton, Link } from '@material-ui/core';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  styled,
} from "@mui/material";

const RoundedAppBar = styled(AppBar)({
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  overflow: "hidden",
});

const Home = () => {
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  // Style for the headings
  const headingStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '2px',
    borderRadius: '5px'
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <IconButton color="inherit">
      <SiWebmoney />
      </IconButton>
    </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PLACEMENT MANAGEMENT SYSTEM
          </Typography>
          <Button color="inherit" onClick={() => scrollToRef(aboutUsRef)}>
            AboutUs
          </Button> &nbsp; &nbsp; &nbsp;
          <Button color="inherit" onClick={() => scrollToRef(contactUsRef)}>
            ContactUs
          </Button>
          <Button color="inherit" onClick={() => scrollToRef(faqRef)}>
            FAQ
          </Button>

          <Button color="inherit" component="a" href="/login">
            Admin
          </Button>&nbsp; &nbsp; &nbsp;
          <Button color="inherit" component="a" href="/loginstudent">
            Student
          </Button>&nbsp; &nbsp; &nbsp;
          <Button color="inherit" component="a" href="/logincompamy">
            Company
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: "100%" }}>
        <img
          src="https://www.richmont.edu/wp-content/uploads/2021/02/AdobeStock_267118750.jpg"
          alt="Descriptive Text"
          style={{ width: "100%", height: "500px" }}
        />
      </Box>
      
      <Container maxWidth="lg">
        <Box display="flex" my={4}>
          <Box width="50%" ref={aboutUsRef}>
          <img
              src="https://img.freepik.com/free-photo/executive-touching-icon-social-network_1232-158.jpg"
              alt="Our Team"
              style={{ width: "100%", height: "90%" }}
            />
          </Box>
          <Box width="50%" px={2}>
            <Typography variant="h6" gutterBottom style={headingStyle}>
              About Us
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Brand Story:
            </Typography>
            <Typography paragraph>
              We Offer The Best Recommendations Applying to your dream job isn't
              easy. With a lot to consider and a plethora of things to prepare,
              it becomes quite hard for job seekers to qualify their interviews.
              This is where an Innov placement agency comes into the picture.
            </Typography>
            <Typography variant="subtitle1" paragraph>
              We can help job seekers with a list of top-ranked companies. Aside
              from this, we can assist the same top-ranking companies in hiring
              professional talent to join their team. Get OnBoard Training From
              Innov Innov is one of the best placement agencies in India that is
              ready to help its clients with top-notch solutions.
            </Typography>
            <Typography paragraph>
              We have a lot of deserving job seekers on our list. Our
              professionals always guide the candidates to walk through the
              hoops of getting their dream job. Innov is one of the best
              placement agencies that is known for a strong reputation and
              quality service. We always establish a strong relationship with
              our candidates and help them achieve what they wish to. Building a
              relationship is essential for us to understand the candidate's
              requirements better.
            </Typography>
          </Box>
        </Box>

        <Box ref={contactUsRef} my={4}>
          <Typography variant="h6" gutterBottom style={headingStyle}>
            Contact Us
          </Typography>
          <Typography>Email Address:info@yourplacementwebsite.com.</Typography>

          <Typography>Phone Number: Phone: +91 9003402909</Typography>
        </Box>

        <Box ref={faqRef} my={4}>
          <Typography variant="h6" gutterBottom style={headingStyle}>
            FAQ
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How do I sign up for placement services?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Students can resgister using student register page , It will be approved by the placement Admin.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>What types of placements do you offer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               We offer both on-campus and off-campus placements. On-campus placements are conducted within the college premises
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>How can I update my profile?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Students can update their profile using student dashboard page.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>
                What criteria do employers use for selection?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Employers use a variety of criteria to select candidates, including academic performance, work experience, and
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>

      <footer
        style={{
          backgroundColor: "#1976d2",
          padding: "10px 0",
          marginTop: "30px",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body1" color="inherit" align="center">
            © 2024 PLACEMENT MANAGEMENT SYSTEM
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Home;
