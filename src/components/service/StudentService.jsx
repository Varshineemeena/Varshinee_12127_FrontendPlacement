import axios from 'axios';
import React, { Component } from 'react';

const Add="http://localhost:8080/CreateStudent";
const Delete="http://localhost:8080/DeleteStudent/";
const Update="http://localhost:8080/updateStudent";
const Find="http://localhost:8080/getStudentById/";
const FindAll="http://localhost:8080/getAllStudents";
const FindAllCompany="http://localhost:8080/getAllCompany";
const FindAllJob="http://localhost:8080/getAllJob";
const FindAllApplication="http://localhost:8080/getAllApplication";
const FindCompany="http://localhost:8080/getCompanyById/";
const FindJob="http://localhost:8080/getJobById/";
const FindApplication="http://localhost:8080/getApplicationsById/";
const UpdateCompany="http://localhost:8080/UpdateCompany";
const FetchIdCompany="http://localhost:8080/GetCompanyIds";



class StudentService extends Component {

    addStudents=(student)=>{
        console.log(student)
        return axios.post(Add,student);
    }

    deleteStudent=(id)=> {
        return axios.delete(Delete+id);
    }

    updateStudent=(student)=>{
        return axios.put(Update,student);
    }

    updateCompany=(company)=>{
        return axios.put(UpdateCompany,company);
    }

    findStudent=(studentId)=>{
        return axios.get(Find+studentId);
    }

    findCompany=(companyId)=>{
        return axios.get(FindCompany+companyId);
    }

    findJob=(jobId)=>{
        return axios.get(FindJob+jobId);
    }

    findApplication=(applicationId)=>{
        return axios.get(FindApplication+applicationId);
    }

    findallStudent=()=>{
        return axios.get(FindAll);
    }

    findallCompany=()=>{
        return axios.get(FindAllCompany);
    }

    findallApplication=()=>{
        return axios.get(FindAllApplication);
    }

    findallJob=()=>{
        return axios.get(FindAllJob);
    }
    
    
}
export default new StudentService();