import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import StudentService from "../service/StudentService";
import { AiOutlineSchedule } from "react-icons/ai";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Toolbar,
  AppBar,
  IconButton,
  Container,
} from "@material-ui/core";
import axios from "axios";
import CompanyNavBar from "../company/CompanyNavBar";
import { IoLogOut } from "react-icons/io5";
import { GiPapers } from "react-icons/gi";
import { HiNewspaper } from "react-icons/hi2";
import { BsGrid1X2Fill } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";

const ApplicationView = () => {
  const [application, setApplication] = useState([]);
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  const [sessionId] = useState(sessionStorage.getItem("userId"));

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    const result = await StudentService.findallApplication(sessionId);
    setApplication(result.data);
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/DeleteApplication/${id}`)
      .then((response) => {
        console.log(response.data);
        let stu = application.filter((application) => application.id !== id);
        alert("Rejected");
        window.location.reload();
        setApplication(stu);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (applicationId) => {
    axios
      .put(`http://localhost:8080/updateapplication/${applicationId}`, {
        applicationStatus: "Approved",
      })
      .then((result) => {
        console.log(result);
        alert("Approved");
        window.location.reload();
      })
      .catch((err) => console.log(err));

    return;
  };

  const handleSendEmail = (studentId, email) => {
    axios
      .post(`http://localhost:8080/sendInterviewEmail/${studentId}`)
      .then((response) => {
        alert("Email sent to " + email);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateInterview = (applicationId) => {
    axios
      .put(`http://localhost:8080/updateinterview/${applicationId}`, {
        interviewStatus: "Scheduled",
      })
      .then((result) => {
        console.log(result);
        alert("Scheduled Will send mail about interview details");
        window.location.reload();
      })
      .catch((err) => console.log(err));

    return;
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link
            to={`/companydashboard/${sessionId}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <IconButton color="inherit">
              <SiWebmoney />
            </IconButton>
          </Link>{" "}
          &nbsp; &nbsp; &nbsp;
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            COMPANY PORTAL
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to={`/profileCompany/${sessionId}`}
          >
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
      <br />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {application.map((application) => (
            <Grid item xs={12} key={application.applicationId}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Application ID: {application.applicationId}
                  </Typography>
                  <Typography color="textSecondary">
                    Status: {application.applicationStatus}
                  </Typography>
                  <Typography color="textSecondary">
                    Interview Status: {application.interviewStatus}
                  </Typography>
                  <Typography color="textSecondary">
                    <b>Job ID</b>: {application.job.jobId} &nbsp;&nbsp;
                    <b> Job Rolename: </b>
                    {application.job.rolename} &nbsp;&nbsp;
                    <b> Job Qualification: </b>
                    {application.job.qualification}
                  </Typography>
                  <Typography color="textSecondary">
                    <b>Student ID:</b> {application.student.studentId}{" "}
                    &nbsp;&nbsp; <b>Student Name:</b> {application.student.name}{" "}
                    &nbsp;&nbsp;<b>Student Gmail:</b>{" "}
                    {application.student.email} &nbsp;&nbsp;<b>Student CG:</b>{" "}
                    {application.student.cgpa}
                    <br />
                  </Typography>

                  
                  {/* <Button
                size="small"
                color="primary"
                startIcon={<FaEdit />}
                onClick={() => handleUpdate(application.applicationId)}
              >
                Approve
              </Button> */}

                  {application.applicationStatus !== "Approved" ?(
                    <Button
                      color="default"
                      onClick={() => handleUpdate(application.applicationId)}
                    >
                      <FaEdit /> Approve
                    </Button>
                  ):(
                    <Button color="default" disabled>
                    <FaEdit /> Approved
                  </Button>
                )}

                  {application.interviewStatus !== "Scheduled" ? (
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<AiOutlineSchedule />}
                      onClick={() =>
                        handleUpdateInterview(application.applicationId)
                      }
                    >
                      Schedule Interview
                    </Button>
                  ):(
                    <Button color="default" disabled>
                    <FaEdit /> Schedule Interview
                  </Button>
                )}


                  <Button
                    size="small"
                    color="secondary"
                    startIcon={<FaTrashAlt />}
                    onClick={() => handleDelete(application.applicationId)}
                  >
                    Reject
                  </Button>

                  {/* <Button
                    color="primary"
                    onClick={() =>
                      handleSendEmail(
                        application.student.studentId,
                        application.student.email
                      )
                    }
                  >
                    <FaEye /> Send Email
                  </Button> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ApplicationView;
