import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AppBar,Toolbar,Grid, Card, CardContent, Typography } from '@material-ui/core';
import './AppliViewStud.css';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";
import StudentNavBar from "./StudentNavBar";
import { GiPapers } from "react-icons/gi";
import { HiNewspaper } from "react-icons/hi2";
import { SiWebmoney } from "react-icons/si";
import { IconButton } from "@mui/material";

const AppliViewStud = () => {
  const [studentHistory, setStudentHistory] = useState([]);
  const userId = sessionStorage.getItem("userId");
  const [sessionId] = useState(sessionStorage.getItem("userId"));


  const handleDelete = async (applicationId) => {
    try {
      console.log('Deleting application with ID:', applicationId);
      await axios.delete(`http://localhost:8080/${applicationId}`);
      const updatedApplications = studentHistory.filter((application) => {
        return application.applicationId !== applicationId;
      });
      console.log('Updated applications:', updatedApplications);
      setStudentHistory(updatedApplications);
    } catch (error) {
      console.log('Delete error:', error);
    }
  };

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/getApplicationBySid/${userId}`
        );
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
      <br/>
    <section className="tableSection">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Application ID</TableCell>
            <TableCell>Application Status</TableCell>
            <TableCell>Interview Status</TableCell>
            <TableCell>Admin Id</TableCell>
            <TableCell>Job Id</TableCell>
            <TableCell>Student Id</TableCell>
            <TableCell colSpan={3}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentHistory.map((application) => (
            <TableRow key={application.applicationId}>
              <TableCell>{application.applicationId}</TableCell>
              <TableCell>{application.applicationStatus}</TableCell>
              <TableCell>{application.interviewStatus}</TableCell>
              <TableCell>{application.admin.adminId}</TableCell>
              <TableCell>{application.job.jobId}</TableCell>
              <TableCell>{application.student.studentId}</TableCell>
              <TableCell className="mx-2">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    console.log(application.applicationId);
                    handleDelete(application.applicationId);
                  }}
                >
                  <FaTrashAlt /> Withdraw 
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
    </>
  );
};

export default AppliViewStud;
