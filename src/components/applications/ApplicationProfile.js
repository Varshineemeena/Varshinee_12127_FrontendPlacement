import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StudentService from "../service/StudentService";

const ApplicationProfile = () => {
  const { applicationId } = useParams();
  const [application, setApplication] = useState([]);

  useEffect(() => {
    loadApplication();
  }, []);

  const loadApplication = async () => {
    await StudentService.findApplication(applicationId).then((response) => {
      console.log(response.data);
      setApplication(response.data);
    });
  };

  return (
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      {application.map((application) => (
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-9">
              <div className="card mb-4">
                <div className="card-body application">
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0"> Application ID</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{application.applicationId}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Application Status</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{application.applicationStatus}</p>
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Student ID</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{application.student.studentId}</p>
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Student Name</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{application.student.name}</p>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Student Email</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{application.student.email}</p>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Student CGPA</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{application.student.cgpa}</p>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Company Name</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{application.job.company.name}</p>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Company Website</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{application.job.company.url}</p>
                    </div>
                  </div>

                  

            
                  

                    <div className="row mb-5"></div>
                    <div className="col-sm-2">
                      <Link
                        to={"/applicationview"}
                        type="submit"
                        className="btn btn-success btn-md"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      ))}
    </section>
  );
};

export default ApplicationProfile;
