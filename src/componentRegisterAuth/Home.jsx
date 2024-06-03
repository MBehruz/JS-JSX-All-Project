import React, { useEffect, useState } from 'react';
import Register from './Register';
import './registerAll.css';
import axios from 'axios';
const HomeRegister = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/admin/users')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=''>
      <p>Hello</p>
      <Register />
      {/* 
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Password</th>
        </tr>

        {data.map((item, index) => (
          <tr>
            <th>{item.firstName}</th>
            <th>{item.lastName}</th>
            <th>{item.age}</th>
            <th>{item.address}</th>
            <th>{item.phone}</th>
            <th>{item.role}</th>
            <th>{item.password}</th>
          </tr>
        ))}
      </table> */}
    </div>
  );
};

export default HomeRegister;
