import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { BsGrid1X2Fill } from "react-icons/bs";
import { HiNewspaper } from "react-icons/hi2";
import { GiPapers } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { SiWebmoney } from "react-icons/si";
import { IconButton } from "@mui/material";

const CompanyNavBar = () => {
  const [sessionId] = useState(sessionStorage.getItem("userId"));

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

<div>
<img src="https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?cs=srgb&dl=pexels-paul-loh-65233-233698.jpg&fm=jpg " alt="Image 1" width={1365} height={570} />

</div>
</>
  );
};

export default CompanyNavBar;
