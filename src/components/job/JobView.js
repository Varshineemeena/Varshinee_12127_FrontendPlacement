import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
import { IconButton } from "@mui/material";
import { SiWebmoney } from "react-icons/si";
import Search from "../common/Search";

const JobView = () => {
  const [job, setJob] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const result = await StudentService.findallJob(job);
    setJob(result.data);
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/deletejob/${id}`)
      .then((response) => {
        console.log(response.data);
        let stu = job.filter((job) => job.id !== id);
        setJob(stu);
        alert("success");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:8080/updatejob/${id}`, { jobStatus: "Approved" })
      .then((result) => {
        console.log(result);
        alert("success");
        window.location.reload();
        // navigate("/");
      })
      .catch((err) => console.log(err));

    return;
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link to="/admindashboardnav" style={{ color: "inherit", textDecoration: "inherit" }}>
            <IconButton color="inherit">
              <SiWebmoney />
            </IconButton>
          </Link>{" "}
          &nbsp;
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Button color="inherit" href="/admindashboardnav">
              ADMIN PORTAL
            </Button>
            <Search search={search} setSearch={setSearch} />
          </Typography>
          <Button color="inherit" href="/studentview">
            Students
          </Button>
          <Button color="inherit" href="/companyview">
            Company
          </Button>
          <Button color="inherit" href="/jobview">
            Jobs
          </Button>
          <Button color="inherit" href="applicationviewadmin">
            Applications
          </Button>
          <Button color="inherit" href="/">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <section style={{ padding: "20px", width: "100%" }}>
        <Grid container spacing={2} justify="center">
          {job
            .filter((job) => job.rolename.toLowerCase().includes(search))
            .map((job) => (
              <Grid item xs={12} key={job.jobId}>
                <Card className="job-card">
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
                      Company ID: {job.company.companyId} &nbsp;&nbsp;&nbsp;
                      Company Name:{job.company.name} &nbsp;&nbsp;&nbsp; Company
                      Email:{job.company.email} &nbsp;&nbsp;&nbsp; Company
                      Website:{job.company.url}
                    </Typography>
                    <div className="card-actions">
                      {/* <Button
                      color="default"
                      onClick={() => handleUpdate(job.jobId)}
                    >
                      <FaEdit /> Approve
                    </Button> */}

                      {job.jobStatus !== "Approved" ? (
                        <Button
                          color="default"
                          onClick={() => handleUpdate(job.jobId)}
                        >
                          <FaEdit /> Approve
                        </Button>
                      ):(
                        <Button color="default" disabled>
                            <FaEdit /> Approved
                          </Button>
                        )}
                      <Button
                        color="secondary"
                        onClick={() => {
                          console.log(job.jobId);
                          handleDelete(job.jobId);
                        }}
                      >
                        {" "}
                        <FaTrashAlt /> Reject{" "}
                      </Button>
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

export default JobView;
