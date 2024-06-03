import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppBar, Toolbar, Grid, Typography, Button } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";

import StudentService from "../service/StudentService";

const JobProfile = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    try {
      const response = await StudentService.findJob(jobId);
      console.log(response.data);
      setJob(response.data); // Set the student state with the response data
    } catch (error) {
      console.error("Failed to load student", error);
      // Handle error appropriately, e.g., setStudent to null or show an error message
    }
  };
  // Render only if student data is available
  if (!job) {
    return <div>Loading...</div>; // Or some other loading indicator
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
      <section className="shadow" style={{ backgroundColor: "white" }}>
      {Array.isArray(job) && job.map((job) => (
          <div className="container py-1" key={job.jobId}>
            <div className="row">
              <div className="col-lg-2"></div>

              <div className="col-lg-9">
                <Card className="mb-4">
                  <CardContent>
                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Job ID</h5>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{job.jobId}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Job Qualification</h5>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{job.qualification}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Job Role</h5>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{job.rolename}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Job Status</h5>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{job.jobStatus}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Company ID</h5>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {job.company.companyId}
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Company Name</h5>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{job.company.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Company Website</h5>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{job.company.url}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row mb-5"></div>
                    <div className="col-sm-2">
                      <Link
                        to={"/jobview"}
                        type="submit"
                        className="btn btn-success btn-md"
                      >
                        Back
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default JobProfile;
