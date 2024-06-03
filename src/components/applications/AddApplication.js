import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Card, CardContent, Typography, Toolbar,AppBar, IconButton } from '@mui/material';
import { SiWebmoney } from 'react-icons/si';
import { HiNewspaper } from 'react-icons/hi2';
import { GiPapers } from 'react-icons/gi';

function AddApplication() {
  const [application, setApplication] = useState({
    applicationStatus: '',
    student: {
      studentId: '',
    },
    job: {
      jobId: '',
    },
    admin: {
      adminId: '',
    },
  });
  const [studentIdList, setStudentIdList] = useState([]);
  const [jobIdList, setJobIdList] = useState([]);
  const [adminIdList, setAdminIdList] = useState([]);
  const [sessionId] = useState(sessionStorage.getItem("userId"));


  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/GetStudentIds').then((response) => {
      console.log(response.data);
      setStudentIdList(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/GetJobIds').then((response) => {
      console.log(response.data);
      setJobIdList(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/GetAdminIds').then((response) => {
      console.log(response.data);
      setAdminIdList(response.data);
    });
  }, []);

  const userId = sessionStorage.getItem("userId");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic remains the same
    //...

    const userData = {
     ...application,
      isapplication: null,
    };

    axios
     .post('http://localhost:8080/CreateApplication', userData)
     .then((result) => {
        console.log(result);
        alert('Job successfully added');
        navigate(`/applicationviewstudent/${userId}`);
      })
     .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'studentId') {
        setApplication({...application, student: { studentId: value } });
    } else if (name === 'jobId') {
        setApplication({...application, job: { jobId: value } });
    } else if (name === 'adminId') {
        setApplication({...application, admin: { adminId: value } });
    }else if (name === 'jobStatus') {
            setApplication({...application, applicationStatus: value });
    }
    else {
        setApplication({...application, [name]: value });
    }
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
<br/><br/><br/>
    <Card style={{ margin: 'auto', width: '50%' }}>
      <CardContent>
        <h1>Apply Now</h1>
        <form onSubmit={handleSubmit}>
        {/* <FormControl fullWidth margin="normal">
            <InputLabel>Application Status</InputLabel>
            <Select
              name="jobStatus"
              value={application.applicationStatus}
             onChange={handleChange}
              label="Application Status"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
              
              <MenuItem value="Applied">Applied</MenuItem>
              <MenuItem value="Approved">Approved</MenuItem>
              <MenuItem value="Declined">Declined</MenuItem>
            </Select>
          </FormControl> */}


          <FormControl fullWidth margin="normal">
            <InputLabel>Student ID</InputLabel>
            <Select
              name="studentId"
              value={application.student.studentId}
              onChange={handleChange}
              label="Student ID"
            >
              {studentIdList.map((id) => (
                <MenuItem key={id} value={id}>
                  {id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Job ID</InputLabel>
            <Select
              name="jobId"
              value={application.job.jobId}
              onChange={handleChange}
              label="Job ID"
            >
              {jobIdList.map((id) => (
                <MenuItem key={id} value={id}>
                  {id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Admin ID</InputLabel>
            <Select
              name="adminId"
              value={application.admin.adminId}
              onChange={handleChange}
              label="Admin ID"
            >
              {adminIdList.map((id) => (
                <MenuItem key={id} value={id}>
                  {id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Apply
          </Button>
        </form>
      </CardContent>
    </Card>
    </>
  );
}

export default AddApplication;