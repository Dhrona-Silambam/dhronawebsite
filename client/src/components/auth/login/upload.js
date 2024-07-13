import React, { useState } from 'react';
import './upload.css'; // Import your CSS file
import { useHistory } from 'react-router-dom'; 

function Upload() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    type: '',
    department: '',
    batch: ''
  });
  const history = useHistory(); // Initialize useHistory


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('image', file);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('college', formData.college);
    formDataToSend.append('type', formData.type);
    formDataToSend.append('department', formData.department);
    formDataToSend.append('batch', formData.batch);
  
    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formDataToSend
      });
      const data = await response.json();
      if(data.message ==="success"){
        console.log(data); 
        window.alert("File and data inserted successfully")
        history.push('/services');
       
    }

     
      
    } catch (err) {
      
      console.error('Error occurred during upload:', err);
     
      window.alert("Error occurred during upload. Please try again later.");
    }
  };

  return (
    <div>
      <br/><br/>
      <div className="u-container">
        <br/>
        <h1 style={{color:"black"}}>Image Upload</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} />
          <input type="text" name="college" placeholder="College" onChange={handleChange} />
          <select
            value={formData.type}
            onChange={handleTypeChange} // Use handleTypeChange for the select element
          >
            <option value="">Select type</option>
            <option value="international">International</option>
            <option value="national">National</option>
            <option value="state">State</option>
            <option value="district">District</option>
            <option value="cmtrophy">CMTrophy</option>
          </select>
          <input type="text" name="department" placeholder="Department" onChange={handleChange} />
          <input type="text" name="batch" placeholder="Batch" onChange={handleChange} />
          <input type="file" onChange={handleFileChange}/>
          <input type="text" name="filers" placeholder={file ? `Selected File: ${file.name}` : "non exists"} />
          <button type="submit">Upload</button>
        </form>
      </div>
      <br/><br/>
    </div>
  );
}

export default Upload;
