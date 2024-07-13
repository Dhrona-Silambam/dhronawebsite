

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './form.css'

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Form validation...

        // Redirect to FormDataPage upon successful form submission
        const body = { firstName, lastName, dob, gender, category, phoneNumber, email };
        const response = await fetch(`http://localhost:5000/form-data`,{
            method:'POST',
            headers: {
                "Content-type":"application/json"
            },
            body:JSON.stringify(body)
        })

        const data = await response.json();
        const user_id = data.user_id.serial_number
        console.log(user_id)
        if(data.message ==="success"){
            alert("Successfully logged")
        }

        history.push('/formData', { formData: { firstName, lastName, dob, gender, category, phoneNumber, email,user_id } });
    };

    return (
        <div className="form-container">
            <div className="form-heading">
                <h2>Registration Form</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="text-sm text-gray-600 font-bold">First Name</label>
                    <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='Enter your first name'
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                    />
                </div>
                <br/>

                <div>
                    <label className="text-sm text-gray-600 font-bold">Last Name</label>
                    <input
                        type="text"
                        required
                        value={lastName}
                        placeholder='Enter your last name'
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                    />
                </div>
                <br/>

                <div>
                    <label className="text-sm text-gray-600 font-bold">Date of Birth</label>
                    <input
                        type="date"
                        required
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                    />
                </div>
                <br/>

                <div>
                    <label className="text-sm text-gray-600 font-bold">Gender</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                    >
                       
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <br/>

                <div>
                    <label className="text-sm text-gray-600 font-bold">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                    >
                        <option value="">Select Category</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <br/>

                <div>
                    <label className="text-sm text-gray-600 font-bold">Phone Number</label>
                    <input
                        type="tel"
                        required
                        value={phoneNumber}
                        placeholder='Enter your phone number'
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                    />
                </div>
                <br/>
                <div>
                    <label className="text-sm text-gray-600 font-bold">Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        placeholder='Enter your email'
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                    />
                </div>
                <br/>

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
