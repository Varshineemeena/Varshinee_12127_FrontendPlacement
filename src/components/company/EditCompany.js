import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentService from "../service/StudentService";
 
const EditCompany = () => {
  let navigate = useNavigate();
 
  const { companyId } = useParams();
 
  const [company, setCompany] = useState({
    name: "",
    address: "",
    email: "",
    url: "",
    status:"",
  });
  const { name, address, email, url, status } = company;
 
  useEffect(() => {
    loadCompany();
  }, []);
 
  const loadCompany = async () => {
    await StudentService.findCompany(companyId).then((response) => {
      console.log(company);
      setCompany(response.data);
    });
  };
 
  const handleInputChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };
 
  const EditCompany = async (e) => {
    e.preventDefault();
    console.log(company);
    await StudentService.updateCompany(company).then((response) => {
      setCompany(response.data);
      navigate("/viewall-train");
      alert("Train Object Updated!..");
    });
  };
  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Update Company Details</h2>
      <form onSubmit={(e) => EditCompany(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="trainName">
            Company Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
 
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="seatAvailability">
            Company Address
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="address"
            id="address"
            required
            value={address}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
 
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="viaDetails">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
 
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="date">
            URL
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="url"
            id="url"
            required
            value={url}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="date">
            Status
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="status"
            id="status"
            required
            value={status}
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
 
export default EditCompany;