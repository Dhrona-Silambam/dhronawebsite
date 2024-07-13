

import React from 'react';
import { useLocation } from 'react-router-dom';
import './formdata.css';
import logo from './logo.PNG'; // Import your logo image here

const FormData = () => {
    const location = useLocation();
    const formData = location.state.formData;

    // Function to handle printing the PDF
    const handlePrintPDF = () => {
        window.print(); // This triggers the browser's print dialog
    };

    return (
        <div className="tcontainer">
            <div className='print-heading'>
                <img src={logo} alt="Your Logo" className="plogo" />
                <h1>Dhrona Silambam</h1>
            </div>
            <div className='table-container'>
                <div className='theading'>
                    <h2>Submitted Form Data</h2>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>User Id</td>
                            <td>{formData.user_id}</td>
                        </tr>
                        <tr>
                            <td>First Name:</td>
                            <td>{formData.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>{formData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Date of Birth:</td>
                            <td>{formData.dob}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{formData.gender}</td>
                        </tr>
                        <tr>
                            <td>Category:</td>
                            <td>{formData.category}</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td>{formData.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{formData.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <button onClick={handlePrintPDF}>Print PDF</button>
        </div>
    );
};

export default FormData;
