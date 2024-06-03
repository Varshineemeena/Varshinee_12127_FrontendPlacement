import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import Search from "../common/Search";
import StudentService from "../service/StudentService";
import { IconButton } from "@mui/material";
import { SiWebmoney } from "react-icons/si";

const CompanyView = () => {
  const [company, setCompany] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadCompanys();
  }, []);

  const loadCompanys = async () => {
    const result = await StudentService.findallCompany(company);
    setCompany(result.data);
  };

  // ... (rest of your existing functions)

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/deletecompany/${id}`)
      .then((response) => {
        console.log(response.data);
        let stu = company.filter((company) => company.id !== id);
        setCompany(stu);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSendEmailCompany = (companyId, email) => {
    axios
      .post(`http://localhost:8080/sendEmailCompany/${companyId}`)
      .then((response) => {
        alert("Email sent to " + email);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (companyId) => {
    axios
      .put(`http://localhost:8080/updatecompany/${companyId}`, {
        status: "Approved",
      })
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
          <Link
            to="/admindashboardnav"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
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
      <section style={{ padding: "20px" }}>
        <Grid container spacing={3}>
          {company
            .filter((comp) => comp.name.toLowerCase().includes(search))
            .map((comp) => (
              <Grid item xs={12} sm={6} md={4} key={comp.companyId}>
                <Card className="job-card">
                  <CardContent>
                    <img
                      src="https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg"
                      alt="Job Image"
                      height={300}
                    />
                    <div className="card-body">
                      <Typography variant="h5" component="h2">
                        {comp.name}
                      </Typography>
                      <Typography component="p">
                        {/* ID: {comp.companyId}
                      <br />
                      Address: {comp.address}
                      <br />
                      Email: {comp.email}
                      <br />
                      URL: {comp.url} */}
                        {/* <br /> */}
                        Status: {comp.status}
                      </Typography>
                      <div className="card-actions">
                        <Button
                          component={Link}
                          to={`/companyProfile/${comp.companyId}`}
                          color="primary"
                        >
                          <FaEye /> View
                        </Button>
                        {/* <Link onClick={() => handleUpdate(comp.companyId)}>
                          <FaEdit /> Approve
                        </Link> */}

                        {comp.status !== "Approved" ? (
                          <Button
                            color="default"
                            onClick={() => handleUpdate(comp.companyId)}
                          >
                            <FaEdit /> Approve
                          </Button>
                        ) : (
                          <Button color="default" disabled>
                            <FaEdit /> Approved
                          </Button>
                        )}

                        <Button
                          color="secondary"
                          onClick={() => {
                            console.log(comp.companyId);
                            handleDelete(comp.companyId);
                          }}
                        >
                          {" "}
                          <FaTrashAlt /> Reject{" "}
                        </Button>

                        <Button
                          color="primary"
                          onClick={() =>
                            handleSendEmailCompany(comp.companyId, comp.email)
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

export default CompanyView;
