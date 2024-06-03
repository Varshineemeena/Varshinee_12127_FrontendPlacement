import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StudentService from "../service/StudentService";
import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { IoLogOut } from "react-icons/io5";
import { GiPapers } from "react-icons/gi";
import { HiNewspaper } from "react-icons/hi2";
import { BsGrid1X2Fill } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
import { IconButton } from "@mui/material";

const ProdileCompany = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState();
  const [sessionId] = useState(sessionStorage.getItem("userId"));

  useEffect(() => {
    loadCompany();
  }, []);

  const userId = sessionStorage.getItem("userId");
  const loadCompany = async () => {
    try {
      const response = await StudentService.findCompany(companyId);
      console.log(response.data);
      setCompany(response.data);
    } catch (error) {
      console.error("Failed to load student", error);
      // Handle error appropriately, e.g., setStudent to null or show an error message
    }
  };

  if (!company) {
    return <div>Loading...</div>; // Or some other loading indicator
  }

  return (
    <>
      <AppBar position="static">
      <Toolbar>
      <Link to={`/companydashboard/${sessionId}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <IconButton color="inherit">
      <SiWebmoney />
      </IconButton>
    </Link> &nbsp;  &nbsp;  &nbsp;
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          COMPANY PORTAL
        </Typography>
        <Button color="inherit" component={Link} to={`/profileCompany/${sessionId}`}>
  <BsGrid1X2Fill /> Dashboard
</Button>
        <Button color="inherit" href={`/jobviewcompany/${sessionId}`}>
          <HiNewspaper /> Jobs
        </Button>
        <Button color="inherit" href="/applicationview">
          <GiPapers /> Applications
        </Button>
        <Button color="inherit" href="/">
          <IoLogOut /> Logout
        </Button>
      </Toolbar>
    </AppBar>
      <br /> <br /> <br /> <br /> <br />
      <Box component="section" boxShadow={3} bgcolor="whitesmoke">
        <Container>
          <Box py={5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent align="center">
                    <CardMedia
                      component="img"
                      image="https://cdn3.vectorstock.com/i/1000x1000/37/27/cityscape-design-corporation-buildings-logo-vector-26653727.jpg"
                      alt="Company Logo"
                      style={{ width: 150, height: 150, borderRadius: "50%" }}
                    />
                    <Typography variant="h5" component="h2" my={3}>
                      {`${company.companyId} ${company.name}`}
                    </Typography>
                    <Box display="flex" justifyContent="center" mb={2}></Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={8}>
                <Card>
                  <CardContent>
                    <Box borderBottom={1} mb={2} />
                    {/* Repeat this block for each field */}
                    <Grid container mb={2}>
                      <Grid item xs={3}>
                        <Typography variant="subtitle1" gutterBottom>
                          Company ID
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body2" color="textSecondary">
                          {company.companyId}
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* End of repeated block */}
                    <Box borderBottom={1} mb={2} />
                    {/* ... other fields ... */}
                    <Grid container mb={2}>
                      <Grid item xs={3}>
                        <Typography variant="subtitle1" gutterBottom>
                          Company Name
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body2" color="textSecondary">
                          {company.name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container mb={2}>
                      <Grid item xs={3}>
                        <Typography variant="subtitle1" gutterBottom>
                          Company Address
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body2" color="textSecondary">
                          {company.address}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container mb={2}>
                      <Grid item xs={3}>
                        <Typography variant="subtitle1" gutterBottom>
                          Company Email
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body2" color="textSecondary">
                          {company.email}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container mb={2}>
                      <Grid item xs={3}>
                        <Typography variant="subtitle1" gutterBottom>
                          Company Website
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body2" color="textSecondary">
                          {company.url}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container mb={2}>
                      <Grid item xs={3}>
                        <Typography variant="subtitle1" gutterBottom>
                          Status
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body2" color="textSecondary">
                          {company.status}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box my={5}>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <Button
                            component={Link}
                            to={`/companydashboard/${userId}`}
                            variant="contained"
                            color="success"
                          >
                            Back
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProdileCompany;
