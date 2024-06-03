import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Card,
  CardContent,
  Typography,
  Toolbar,
  AppBar,
} from "@mui/material";

function AddJob() {
  const [job, setJob] = useState({
    rolename: "",
    qualification: "",
    jobStatus: "",
    company: {
      companyId: "",
    },
  });
  const [idList, setIdList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/GetCompanyIds").then((response) => {
      console.log(response.data);
      setIdList(response.data);
    });
  }, []);

  const userId = sessionStorage.getItem("userId");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic remains the same
    //...

    const userData = {
      ...job,
      isjob: null,
    };

    axios
      .post("http://localhost:8080/CreateJob", userData)
      .then((result) => {
        console.log(result);
        alert("Job successfully added");
        navigate("/applicationview");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "companyId") {
      setJob({ ...job, company: { companyId: value } });
    } else {
      setJob({ ...job, [name]: value });
    }
  };

  return (
    <>
      <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" style={{ flexGrow: 1 }}>
      Company
    </Typography>
    
  </Toolbar>
</AppBar>
<br/><br/><br/>
      <Card style={{ margin: "auto", width: "50%" }}>
        <CardContent>
          <h1>Add Job</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Role Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="rolename"
              value={job.rolename}
              onChange={handleChange}
            />
            <TextField
              label="Qualification"
              variant="outlined"
              fullWidth
              margin="normal"
              name="qualification"
              value={job.qualification}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Job Status</InputLabel>
              <Select
                name="jobStatus"
                value={job.jobStatus}
                onChange={handleChange}
                label="Job Status"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Open">Open</MenuItem>
                <MenuItem value="Closed">Closed</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Company ID</InputLabel>
              <Select
                name="companyId"
                value={job.company.companyId}
                onChange={handleChange}
                label="Company ID"
              >
                {idList.map((id) => (
                  <MenuItem key={id} value={id}>
                    {id}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Add Job
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default AddJob;
