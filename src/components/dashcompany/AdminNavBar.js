import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme styles
import { SiWebmoney } from 'react-icons/si';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
  
  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <IconButton color="inherit">
      <SiWebmoney />
      </IconButton>
    </Link> &nbsp;  &nbsp;  &nbsp;
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            ADMIN PORTAL
          </Typography>
          <Button color="inherit" href="/studentview">Students</Button>
          <Button color="inherit" href="/companyview">Company</Button>
          <Button color="inherit" href="/jobview">Jobs</Button>
          <Button color="inherit" href="applicationviewadmin">Applications</Button>
          <Button color="inherit" href="/">Logout</Button>
        </Toolbar>
      </AppBar>
      
        <div>
          <img src="https://st2.depositphotos.com/1000423/7940/i/450/depositphotos_79401982-stock-photo-business-growth.jpg" alt="Image 1"  width={1365} height={570}/>
        </div>
        
    </>
  );
};

export default AdminNavBar;
