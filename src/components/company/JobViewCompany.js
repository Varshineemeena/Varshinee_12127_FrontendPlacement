import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import {IconButton,Button,makeStyles, AppBar, Toolbar, Typography, Card, CardContent, Grid, Container } from '@material-ui/core';
import CompanyNavBar from './CompanyNavBar';
import { SiWebmoney } from 'react-icons/si';
import { IoLogOut } from 'react-icons/io5';
import { GiPapers } from 'react-icons/gi';
import { HiNewspaper } from 'react-icons/hi2';
import { BsGrid1X2Fill } from 'react-icons/bs';

const JobViewCompany = () => {
  const [job, setJob] = useState([]);
  const [studentHistory, setStudentHistory] = useState([]);
  const userId = sessionStorage.getItem("userId");
  const [sessionId] = useState(sessionStorage.getItem("userId"));


  const useStyles = makeStyles((theme) => ({
    deleteButton: {
      '&:hover': {
        backgroundColor: theme.palette.error.dark, // Change hover color here
      },
    },
  }));

  const handleDelete = (jobId) => {
    console.log('Deleting job with ID:', jobId);
    axios
      .delete(`http://localhost:8080/DeleteJob/${jobId}`)
      .then((response) => {
        console.log('Delete response:', response.data);
        let updatedJobs = job.filter((job) => job.jobId !== jobId);
        console.log('Updated jobs:', updatedJobs);
        setJob(updatedJobs);
      })
      .catch((error) => {
        console.log('Delete error:', error);
      });
  };

  
  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/getJobByCid/${userId}`);
        console.log(response.data);
        setStudentHistory(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    getHistory();
  }, []);

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
    <Link to="/addjob" style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <IconButton color="inherit">
        <FaPlus />
      </IconButton>
    </Link>
      {/* <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" style={{ flexGrow: 1 }}>
      Company
    </Typography>
    <Link to="/addjob" style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <IconButton color="inherit">
        <FaPlus />
      </IconButton>
    </Link>
  </Toolbar>
</AppBar> */}
      <br/><br/>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {studentHistory.map((job, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {job.rolename}
                  </Typography>
                  <Typography color="textSecondary">
                    ID: {job.jobId}
                  </Typography>
                  <Typography color="textSecondary">
                    Qualification: {job.qualification}
                  </Typography>
                  <Typography color="textSecondary">
                    Status: {job.jobStatus}
                  </Typography>
                  <Typography color="textSecondary">
                    Company ID: {job.company.companyId}
                  </Typography>
                  <Button
      
      color="secondary"
      startIcon={<FaTrashAlt />}
      onClick={() => handleDelete(job.jobId)}
    >
      Delete
    </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default JobViewCompany;
