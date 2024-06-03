import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterStudent() {
  // const [status, setStatus] = React.useState('');
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const gender = formData.get("gender");
    const email = formData.get("email");
    const password = formData.get("password");
    const phoneNumber = formData.get("phoneNumber");
    const address = formData.get("address");
    const department = formData.get("department");
    const cgpa = formData.get("cgpa");
    // const status = formData.get('status');

    let formValid = true;
    if (!name.trim()) {
      alert("Name cannot be empty.");
      formValid = false;
    } else if (!/[A-Z]/.test(name) || name.length < 6) {
      alert(
        "Name must contain at least one uppercase letter and be at least 6 characters long."
      );
      formValid = false;
    }
    // Address validation
    if (!address.trim()) {
      alert("Address cannot be empty.");
      formValid = false;
    }
    // Check if all fields have been filled in
    if (
      !name ||
      !gender ||
      !email ||
      !password ||
      !phoneNumber ||
      !address ||
      !department ||
      !cgpa
    ) {
      alert("Please fill in all fields.");
      formValid = false;
    }

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      formValid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (!password || password.length < 8) {
      setPasswordError("Please enter a password with at least 8 characters.");
      formValid = false;
    } else {
      setPasswordError("");
    }
    // Validate CGPA
    const cgpaValue = parseFloat(cgpa);
    if (!cgpa || isNaN(cgpaValue) || cgpaValue <= 6 || cgpaValue > 10) {
      alert("Please enter a CGPA greater than 6 and up to 10.");
      formValid = false;
    }

    if (formValid) {
      const userData = {
        name: formData.get("name"),
        gender: formData.get("gender"),
        email: formData.get("email"),
        password: formData.get("password"),
        phoneNumber: formData.get("phoneNumber"),
        address: formData.get("address"),
        department: formData.get("department"),
        cgpa: formData.get("cgpa"),
      };

      axios
        .post("http://localhost:8080/registerStudent", userData)
        .then((response) => {
          console.log("Registration successful:", response.data);
          alert("success");
          navigate("/");
        })
        .catch((error) => {
          alert("Registration failed. Please try again.");
        });
    }
  };
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "10vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={5}
          md={3.5}
          sx={{
            //  backgroundImage: 'url(https://www.shutterstock.com/image-vector/education-3d-isometric-web-icons-260nw-1273277374.jpg)',
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="gender"
                label="Gender"
                name="gender"
                autoComplete="gender"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={emailError !== ""}
                helperText={emailError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={passwordError !== ""}
                helperText={passwordError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                type="phoneNumber"
                id="phoneNumber"
                autoComplete="phoneNumber"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="address"
                label="Address"
                type="address"
                id="address"
                autoComplete="address"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="department"
                label="Department"
                type="department"
                id="department"
                autoComplete="department"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="cgpa"
                label="CGPA"
                type="cgpa"
                id="cgpa"
                autoComplete="cgpa"
                autoFocus
              />
              {/* <Select
                margin="normal"
                required
                fullWidth
                name="status"
                label="Status"
                id="status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                >
                <MenuItem value="Pending">Pending</MenuItem>
                
                </Select> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/loginstudent" variant="body2">
                    Already have an account? Sign In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default RegisterStudent;
