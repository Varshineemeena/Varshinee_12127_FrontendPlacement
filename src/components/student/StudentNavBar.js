import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { HiNewspaper } from "react-icons/hi2";
import { GiPapers } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { SiWebmoney } from "react-icons/si";
import Slider from "react-slick";
import { BsGrid1X2Fill } from "react-icons/bs";

const StudentNavBar = () => {
  const [sessionId] = useState(sessionStorage.getItem("userId"));
  const appBarStyle = {
    backgroundImage:
      'url("https://media.istockphoto.com/id/1159030397/vector/vector-of-a-child-a-boy-looking-at-the-stairs-leading-to-the-door-of-modern-digital-world.jpg?s=612x612&w=0&k=20&c=cPMvHwuxLy3rWZaHzhiXY_TFZXkl0KGp-wHGFA8vak4=")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link
            to={`/studentdashboardddd/${sessionId}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <IconButton color="inherit">
              <SiWebmoney />
            </IconButton>
          </Link>{" "}
          &nbsp;
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            STUDENT PORTAL
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to={`/prodileStudent/${sessionId}`}
          >
            <BsGrid1X2Fill /> Dashboard
          </Button>
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

      <div>
        <img
          src="https://th.bing.com/th/id/R.beccc4b32ceb847aaacadc66c164ba1e?rik=LIrTaYm4M4zo7g&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f2w9pZKq.jpg&ehk=UB7eHzWVv22uDsU%2fNCErg75ey90kBJoo%2f2%2f0JuBJ6c8%3d&risl=&pid=ImgRaw&r=0 "
          alt="Image 1"
          width={1365}
          height={570}
        />
      </div>

      {/* Add more images as needed */}
    </>
  );
};

export default StudentNavBar;
