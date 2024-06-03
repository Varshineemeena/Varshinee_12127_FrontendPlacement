import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import StudentService from '../service/StudentService';
import { AppBar, Toolbar, Typography, Card, CardContent, Grid, Button } from '@material-ui/core';

const StudentProfile = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const response = await StudentService.findStudent(studentId);
      setStudent(response.data);
    } catch (error) {
      console.error('Failed to load student', error);
    }
  };

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <br/> <br/> <br/> <br/> 
      <Grid container spacing={2} style={{ padding: '20px' }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent className="text-center">
              <img
                src="
                https://thumbs.dreamstime.com/b/people-avatar-icons-student-student-avatar-icon-colors-193586658.jpg"
                alt="Student Avatar"
                className="rounded-circle img-fluid"
                style={{ width: 150 }}
              />
              <Typography variant="h5" component="h2" gutterBottom>
                {student.studentId} {student.name}
              </Typography>
              
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card>
            <CardContent>
              <Typography variant="body1" component="p">
                Gender: {student.gender}
              </Typography>
              <Typography variant="body1" component="p">
                Email: {student.email}
              </Typography>
              <Typography variant="body1" component="p">
                Phone Number: {student.phoneNumber}
              </Typography>
              <Typography variant="body1" component="p">
                Address: {student.address}
              </Typography>
              <Typography variant="body1" component="p">
                Department: {student.department}
              </Typography>
              <Typography variant="body1" component="p">
                CGPA: {student.cgpa}
              </Typography>
              <Typography variant="body1" component="p">
                Status: {student.status}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/studentview"
              >
                Back
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default StudentProfile;
