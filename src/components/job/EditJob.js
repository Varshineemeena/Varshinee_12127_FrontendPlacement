import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RailwayService from "../Service/RailwayService";
import StudentService from "../service/StudentService";
 
const EditJob = () => {
  let navigate = useNavigate();
 
  const { jobId } = useParams();
 
  const [job, setJob] = useState({
    rolename: "",
    qualification: "",
    jobStatus: "",
    company:{
        companyId:""
    }
  });

  
  const { rolename, qualification, jobStatus, companyId } = job;

  useEffect(() => {
    axios.get("http://localhost:8081/GetEmployeeIds").then((response) => {
      console.log(response.data);
      setIdList(response.data);
    });
  }, []);
 
  useEffect(() => {
    loadJob();
  }, []);
 
  const loadJob = async () => {
    await StudentService.findJob(jobId).then((response) => {
      console.log(job);
      setJob(response.data);
    });
  };
 
  const handleInputChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };
 
  const EditJob = async (e) => {
    e.preventDefault();
    console.log(job);
    await StudentService.UpdateTrain(train).then((response) => {
      setTrain(response.data);
      navigate("/viewall-train");
      alert("Train Object Updated!..");
    });
  };
  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Update Train Details</h2>
      <form onSubmit={(e) => EditTrain(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="trainName">
            Train Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="trainName"
            id="trainName"
            required
            value={trainName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
 
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="seatAvailability">
            Seat Availability
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="seatAvailability"
            id="seatAvailability"
            required
            value={seatAvailability}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
 
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="viaDetails">
            Via Details
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="viaDetails"
            id="viaDetails"
            required
            value={viaDetails}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
 
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="date">
            Date
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="date"
            id="date"
            required
            value={date}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
 
        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-mx">
              Update
            </button>
          </div>
 
          <div className="col-sm-2">
            <Link
              to={"/viewall-train"}
              type="submit"
              className="btn btn-outline-warning btn-mx">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
 
export default EditJob;