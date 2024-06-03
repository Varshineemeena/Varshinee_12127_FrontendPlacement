import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LoginStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = React.useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    axios
      .post("http://localhost:8080/loginStudent", userData)
      .then((response) => {
        console.log("Login successful:", response.data);
        const userId = response.data.userId;
        sessionStorage.setItem("userId", userId);
        console.log(userId);
        Swal.fire({
          title: "Success!",
          text: "You have logged in successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(`/studentdashboardddd/${userId}`);
        // alert("success");
        // navigate(`/studentdashboard/${userId}`);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Invalid User ID or Password",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
      //   console.log("Login failed:", error);
      //   alert("Invalid User ID or Password");
      // });
  };
  sessionStorage.setItem("email",student.email)

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
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
              Sign in
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="/registerstudent" variant="body2">
                    {"Don't have an account? Sign Up"}
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

export default LoginStudent;
