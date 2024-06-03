import React, { useEffect, useState } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "../common/Search";
import StudentService from "../service/StudentService";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import "./Studentview.css"; // Make sure to import your CSS file
import axios from "axios";
import AdminNavBar from "../dashcompany/AdminNavBar";
import { BsGrid1X2Fill } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";

const StudentView = () => {
  const [student, setStudent] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("home");
  const mail = sessionStorage.getItem("email");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await StudentService.findallStudent(student);
    setStudent(result.data);
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/deletestudent/${id}`)
      .then((response) => {
        console.log(response.data);
        let stu = student.filter((student) => student.id !== id);
        setStudent(stu);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:8080/update/${id}`, { status: "Approved" })
      .then((result) => {
        console.log(result);
        alert("success");
        window.location.reload();
        // navigate("/");
      })
      .catch((err) => console.log(err));

    return;
  };

  const handleSendEmail = (studentId, email) => {
    axios
      .post(`http://localhost:8080/sendEmail/${studentId}`)
      .then((response) => {
        alert("Email sent to " + email);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <Search 
        search={search}
        setSearch={setSearch} 
        />
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
      <section style={{ marginTop: "20px" }}>
        <Grid container spacing={3} style={{ width: "100%", margin: "0" }}>
          {student
            .filter((st) => st.name.toLowerCase().includes(search))
            .map((student) => (
              <Grid item xs={12} key={student.studentId}>
                <Card>
                  <CardContent>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {/* Image can be uncommented if needed */}
                      <img
                        src="https://thumbs.dreamstime.com/b/people-avatar-icons-student-student-avatar-icon-colors-193586658.jpg"
                        alt="Student"
                        height={200}
                      />
                      <div style={{ flex: 1 }}>
                        <Typography variant="h5" component="h2">
                          {student.name}
                        </Typography>
                        Student ID: {student.studentId}
                        <br />
                        Status: {student.status}
                      </div>
                    </div>
                    <div>
                      <div className="btn-group">
                        <Button
                          component={Link}
                          to={`/studentProfile/${student.studentId}`}
                          color="primary"
                        >
                          <FaEye /> View
                        </Button>
                        {/* <Button
                          color="default"
                          onClick={() => handleUpdate(student.studentId)}
                        >
                          <FaEdit /> Approve
                        </Button> */}


                        {student.status!== "Approved" ? (
                          <Button
                            color="default"
                            onClick={() => handleUpdate(student.studentId)}
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
                            console.log(student.studentId);
                            handleDelete(student.studentId);
                          }}
                        >
                          {" "}
                          <FaTrashAlt /> Reject{" "}
                        </Button>
                        <Button
                          color="primary"
                          onClick={() =>
                            handleSendEmail(student.studentId, student.email)
                          }
                        >
                          <FaEye /> Send Mail
                        </Button>
                      </div>
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

export default StudentView;
