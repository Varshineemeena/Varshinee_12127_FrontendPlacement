import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import StudentService from '../service/StudentService';


const EditStudent = () => {
    
    let navigate = useNavigate();

    const[student,setStudent] = useState({
        studentId:"",
        name: "",
        gender:"",
        email: "",

    })
    const{studentId,name, gender, email}= student;

    useEffect(() => {
        loadStudent();
    }, []);


    const loadStudent = async()=> {
        // console.log(id);
        await StudentService.findStudent(studentId).then((response)=>{
        setStudent(response.data);
    
});
    }

    const handleInputChange = (e) => {
        setStudent({...student, [e.target.studentId]: e.target.value });
      };
    
    const updateStudent = async(e) => {
        e.preventDefault();
        await StudentService.updateStudent(student);   
        navigate("/studentview");
    };
    
  return (
    <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <h2 className='mt-5'>Edit Student</h2>
      <form onSubmit={(e)=> updateStudent(e)}>
      <div className='input-group mb-5'>
            <label
            className='input-group-text'
            htmlFor="name">
                Id
            </label>
            <input
            className='form-control col-sm-6'
            type='text'
            name='studentId'
            id='studentId'
            required
            value={student? student.studentId: ''}

            onChange={(e) => handleInputChange(e)}
            />
            
        </div>
        <div className='input-group mb-5'>
            <label
            className='input-group-text'
            htmlFor="name">
                Name
            </label>
            <input
            className='form-control col-sm-6'
            type='text'
            name='name'
            id='name'
            required
            value={student? student.name: ''}
            onChange={(e) => handleInputChange(e)}
            />

        </div>
        <div className='input-group mb-5'>
            <label
            className='input-group-text'
            htmlFor="phnno">
                Gender 
            </label>
            <input
            className='form-control col-sm-6'
            type='text'
            name='gender'
            id='gender'
            required
            value={student? student.gender: ''}
            onChange={(e) => handleInputChange(e)}
            />
            
        </div>
        <div className='input-group mb-5'>
            <label
            className='input-group-text'
            htmlFor="email">
                Your E-mail
            </label>
            <input
            className='form-control col-sm-6'
            type='email'
            name='email'
            id='email'
            required
            value={student? student.email: ''}
            onChange={(e) => handleInputChange(e)}
            />
            
        </div>
        
        
        <div className='row mb-5'>
            <div className='col-sm-2'>
                <button
                type="submit"
                className='btn btn-outline-success btn-lg'>
                    Save
                </button>

            </div>
            <div className='col-sm-2'>
                <Link to={"/studentview"}
                type="submit"
                className='btn btn-outline-warning btn-lg'>
                    Cancel
                </Link>

            </div>


        </div>
      </form>
    </div>
  );
  };

export default EditStudent
