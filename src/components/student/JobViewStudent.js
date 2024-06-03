import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import StudentService from "../service/StudentService";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import axios from "axios";
import StudentNavBar from "./StudentNavBar";
import { GiPapers } from "react-icons/gi";
import { HiNewspaper } from "react-icons/hi2";
import { SiWebmoney } from "react-icons/si";
import { IconButton } from "@mui/material";

const JobViewStudent = () => {


  const [job, setJob] = useState([]);
  const [sessionId] = useState(sessionStorage.getItem("userId"));

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const result = await StudentService.findallJob(job);
    setJob(result.data);
  };

  const handleDelete = (jobId) => {
    console.log(jobId);
    axios
      .delete(`http://localhost:8080/DeleteJob/${jobId}`)
      .then((response) => {
        console.log(response.data);
        let updatedJobs = job.filter((job) => job.jobId !== jobId);
        setJob(updatedJobs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      
      <AppBar position="static">
      <Toolbar>
        <Link to={`/studentdashboardddd/${sessionId}`} style={{ color: "inherit", textDecoration: "inherit" }}>
          <IconButton color="inherit">
            <SiWebmoney />
          </IconButton>
        </Link>{" "}
        &nbsp;
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          STUDENT PORTAL
        </Typography>
        <Button color="inherit" href="/jobviewstudentFjo">
          <HiNewspaper /> Jobs
        </Button>
        <Button color="inherit" href={`/applicationviewstudent/${sessionId}`}>
          <GiPapers />
          Applications
        </Button>
        <Button color="inherit" href="/">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
      <br />
      <section>
        <Grid container spacing={2}>
          {job.map((job) => (
            // Set 'xs' to 12 for full width
            <Grid item xs={12} key={job.jobId}>
              <Card className="job-card" style={{ width: "100%" }}>
                {" "}
                {/* Add inline style for full width */}
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {job.rolename}
                  </Typography>
                  <Typography color="textSecondary">
                    ID: {job.jobId} &nbsp;&nbsp;&nbsp; Qualification:{" "}
                    {job.qualification}
                  </Typography>
                  <Typography color="textSecondary">
                    Status: {job.jobStatus}
                  </Typography>

                  <Typography color="textSecondary">
                    Company ID: {job.company.companyId} &nbsp;&nbsp;&nbsp;
                    Company Name: {job.company.name} &nbsp;&nbsp;&nbsp; Company
                    URL: {job.company.url}
                  </Typography>

<div className="card-actions">
                    {job.jobStatus === "Approved" ? (
                      <Button
                        component={Link}
                        to={`/addapplication/${job.jobId}`}
                        color="primary"
                      >
                        <FaEdit /> Apply Now
                      </Button>
                      ):(
                        <Button color="default" disabled>
                    <FaEdit /> Apply Now
                  </Button>
                )}

                      </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default JobViewStudent;
