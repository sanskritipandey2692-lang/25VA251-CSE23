import React, { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([]);
  const validate = () => {
    let newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const newUser = { name, email };
      setUsers([...users, newUser]);
      setSuccess(true);
      setErrors({});
      setName("");
      setEmail("");
      setPassword("");
    } else {
      setErrors(validationErrors);
      setSuccess(false);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <button type="submit">Register</button>
        </form>
        {success && <p className="success">Registration Successful!</p>} 
        {/* NEW: Registered Users List */}
        <h3>Registered Users</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;