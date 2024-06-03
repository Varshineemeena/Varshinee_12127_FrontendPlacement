import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/loginregister/Login";
import Home from "./components/home/Home";
import Register from "./components/registration/Register";
import LoginStudent from "./components/loginregister/LoginStudent";
import RegisterStudent from "./components/registration/RegisterStudent";
import LoginCompany from "./components/loginregister/LoginCompany";
import RegisterCompany from "./components/registration/RegisterCompany";
// import DashAdmin from "./components/dashboard/DashAdmin";
import StudentView from "./components/student/StudentView";
import StudentProfile from "./components/student/StudentProfile";
import EditStudent from "./components/student/EditStudent";
import CompanyView from "./components/company/CompanyView";
import CompanyProfile from "./components/company/CompanyProfile";
import JobView from "./components/job/JobView";
import EditCompany from "./components/company/EditCompany";
// import DashStudent from "./components/dashboardstudent/dashboard/DashStudent";
import JobViewStudent from "./components/student/JobViewStudent";
import ApplicationView from "./components/applications/ApplicationView";
import AppliViewStud from "./components/student/AppliViewStud";
import JobProfile from "./components/job/JobProfile";
import ApplicationProfile from "./components/applications/ApplicationProfile";
import ApplicationViewAdmin from "./components/applications/AppliViewAdmin";
import AppliProStud from "./components/student/AppliProStud";
import DashCompany from "./components/dashcompany/DashCompany";
import JobViewCompany from "./components/company/JobViewCompany";
import AddJob from "./components/job/AddJob";
import AddApplication from "./components/applications/AddApplication";
import JobProfileStud from "./components/student/JobProfileStud";
import JobProfileCompany from "./components/company/JobProfileCompany";
import ProdileCompany from "./components/company/ProdileCompany";
import AdminNavBar from "./components/dashcompany/AdminNavBar";
import StudentNavBar from "./components/student/StudentNavBar";
import CompanyNavBar from "./components/company/CompanyNavBar";
import ProdileStudent from "./components/student/ProdileStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginstudent" element={<LoginStudent />} />
        <Route path="/logincompamy" element={<LoginCompany />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerstudent" element={<RegisterStudent />} />
        <Route path="/registercompany" element={<RegisterCompany />} />
        {/* <Route path="/admindashboard" element={<DashAdmin />} /> */}
        {/* <Route path="/studentdashboard/:userId" element={<DashStudent />} /> */}

        <Route
          path="/studentdashboardddd/:userId"
          element={<StudentNavBar />}
        />
        {/* <Route path="/companydashboard/:userId" element={<DashCompany />} /> */}
        <Route path="/companydashboard/:userId" element={<CompanyNavBar />} />
        <Route path="/studentview" element={<StudentView />} />
        <Route path="/companyview" element={<CompanyView />} />
        <Route path="/jobview" element={<JobView />} />
        <Route path="/applicationview" element={<ApplicationView />} />
        <Route
          path="/applicationviewadmin"
          element={<ApplicationViewAdmin />}
        />
        <Route
          path="/applicationviewstudent/:studentId"
          element={<AppliViewStud />}
        />
        <Route path="/jobviewcompany/:companyId" element={<JobViewCompany />} />
        <Route path="/studentProfile/:studentId" element={<StudentProfile />} />
        <Route path="/companyProfile/:companyId" element={<CompanyProfile />} />
        <Route path="/profileCompany/:companyId" element={<ProdileCompany />} />
        <Route path="/prodileStudent/:studentId" element={<ProdileStudent />} />

        <Route path="/jobProfile/:jobId" element={<JobProfile />} />
        <Route
          path="/addapplication/:applicationId"
          element={<AddApplication />}
        />
        <Route
          path="/applicationprofile/:applicationId"
          element={<ApplicationProfile />}
        />
        <Route
          path="/applicationprofilestudentpro/:applicationId"
          element={<AppliProStud />}
        />
        <Route path="/editstudent/:studentId" element={<EditStudent />} />
        <Route path="/editcompany" element={<EditCompany />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/jobviewstudentFjo" element={<JobViewStudent />} />
        <Route
          path="/jobprofilecompany/:jobId"
          element={<JobProfileCompany />}
        />
        <Route path="/jobprofilestudent/:jobId" element={<JobProfileStud />} />
        <Route path="/admindashboardnav" element={<AdminNavBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
