import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const { name, email, password } = formData;
      // Validate form data
      if (name && email && password) {
        // Call registration API
        const response = await axios.post(
          "http://localhost:8080/api/register",
          formData
        );
      }

      // Handle successful registration
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      navigate("/login");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="p-5 my-8 d-flex flex-column w-50 ">
      <h1>Register</h1>
      {error && <p className="text-danger">{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        &nbsp;
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        &nbsp;
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </Button>
        <span>
          For Login Click Here <Link to="/login">Login</Link>
        </span>
      </Form>
    </div>
    
  );
}

export default RegisterPage;


