import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const [formData, setFormData] = useState({
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
      // Call login API
      const response = await axios.post(
        "http://localhost:8080/api/login",
        formData
      );
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      navigate("/");
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
      <h1>Login</h1>
      {error && <p className="text-danger">{error}</p>}
      <Form onSubmit={handleSubmit}>
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
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </Button>
        <span>
          For Register Click Here <Link to="/register">Register</Link>
        </span>
      </Form>
    </div>
  );
}

export default Login;
