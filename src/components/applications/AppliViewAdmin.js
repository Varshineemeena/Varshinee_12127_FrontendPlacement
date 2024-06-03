import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StudentService from '../service/StudentService';
import './ApplicationViewAdmin.css'; // Make sure to create this CSS file
import { AppBar, Toolbar, Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import { IconButton } from '@mui/material';
import { SiWebmoney } from 'react-icons/si';

const ApplicationViewAdmin = () => {
    const [application, setApplication] = useState([]);

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = async () => {
        try {
            const result = await StudentService.findallApplication(application);
            setApplication(result.data);
        } catch (error) {
            console.error('Error loading applications:', error);
        }
    };

    const handleDelete = (applicationId) => {
        axios.delete(`http://localhost:8080/DeleteApplications/${applicationId}`)
            .then((response) => {
                console.log(response.data);
                const updatedApplications = application.filter((app) => app.applicationId !== applicationId);
                setApplication(updatedApplications);
            })
            .catch((error) => {
                console.error('Error deleting application:', error);
            });
    };

    return (
        <>
      <AppBar position
      ="static">
      <Toolbar>
      <Link to="/admindashboardnav" style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <IconButton color="inherit">
      <SiWebmoney />
      </IconButton>
    </Link> &nbsp;
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        <Button color="inherit" href="/admindashboardnav">ADMIN PORTAL</Button>
        </Typography>
        <Button color="inherit" href="/studentview">Students</Button>
        <Button color="inherit" href="/companyview">Company</Button>
        <Button color="inherit" href="/jobview">Jobs</Button>
        <Button color="inherit" href="applicationviewadmin">Applications</Button>
        <Button color="inherit" href="/">Logout</Button>
      </Toolbar>
    </AppBar>
        <section style={{ padding: '20px', width: '100%' }}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Application ID</th>
                        <th>Application Status</th>
                        
                        <th>Job Role</th>
                        <th>Student Name</th>
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {application.map((app) => (
                        <tr key={app.applicationId}>
                            <td>{app.applicationId}</td>
                            <td>{app.applicationStatus}</td>
                            
                            <td>{app.job.rolename}</td>
                            <td>{app.student.name}</td>
                            {/* <td>
                                <Link to={`/applicationprofile/${app.applicationId}`} className="btn-view">
                                    <FaEye /> View
                                </Link>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        </>
    );
};

export default ApplicationViewAdmin;
