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
import { Select, MenuItem } from "@mui/material";
import { navigate, useNavigate } from "react-router-dom";

function RegisterCompany() {
  const [status, setStatus] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const address = formData.get("address");
    const email = formData.get("email");
    const password = formData.get("password");
    const url = formData.get("url");
    

    let formValid = true;

    // Check the name field
    // Name validation
  if (!name.trim()) {
  alert("Name cannot be empty.");
  formValid = false;
} else if (!/[A-Z]/.test(name) || name.length < 6) {
  alert("Name must contain at least one uppercase letter and be at least 6 characters long.");
  formValid = false;
}
// Address validation
if (!address.trim()) {
  alert("Address cannot be empty.");
  formValid = false;
}
// URL validation
if (!url.trim() || !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(url)) {
  alert("Please enter a valid URL.");
  formValid = false;
}

    // Check if all fields have been filled in
    if (!name || !address || !email || !password || !url) {
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

    if (formValid) {
      const userData = {
        name: formData.get("name"),
        address: formData.get("address"),
        email: formData.get("email"),
        password: formData.get("password"),
        url: formData.get("url"),
        
      };

      axios
        .post("http://localhost:8080/registerCompany", userData)
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
                name="url"
                label="Website"
                type="url"
                id="url"
                autoComplete="url"
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
                <MenuItem value="pending">Pending</MenuItem>
                
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
                  <Link href="/logincompamy" variant="body2">
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

export default RegisterCompany;
