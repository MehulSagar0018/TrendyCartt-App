import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Corrected import
import { useRegisterUserMutation } from "../../features/auth/authApi";

const SignUp = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setMessage("Passwords & ConfirmPassword do not match");
      return;
    }

    const data = {
      username,
      email,
      password,
      phone,
    };

    try {
      const response = await registerUser(data).unwrap();
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      setMessage("Registration failed");
    }
  };

  return (
    <section
      className=" flex items-center justify-center"
      style={{ backgroundColor: "#f4e5ec" ,paddingTop:"30px",paddingBottom:"30px"}}
    >
      <div
        className="max-w-sm border shadow bg-white mx-auto p-8"
        style={{
          padding: "15px",
          justifyContent: "center",
          alignItems: "center",
          width: "30%",
          border: "2px solid lightgray",
          borderRadius: "10px",
        }}
      >
        <h2
          className="font-bold pt-5"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px",
            marginBottom: "15px",fontFamily:"initial"
          }}
        >
          Please SignUp
        </h2>
        <div style={{ marginLeft: "10%" }}>
          <form onSubmit={handleSignup} className="space-y-5 max-w-sm mx-auto pt-8">
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              style={{ width: "90%" }}
              className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            />
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              style={{ width: "90%", padding: "12px", border: "1px solid #ccc", marginTop: "6px", marginBottom: "16px", resize: "vertical" }}
              className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{ width: "90%", padding: "12px", border: "1px solid #ccc", marginTop: "6px", marginBottom: "16px", resize: "vertical" }}
              className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              style={{ width: "90%", padding: "12px", border: "1px solid #ccc", marginTop: "6px", marginBottom: "16px", resize: "vertical" }}
              className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
              style={{ width: "90%", padding: "12px", border: "1px solid #ccc", marginTop: "6px", marginBottom: "16px", resize: "vertical" }}
              className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            />
            <div
              className="loginbtn"
              style={{
                marginTop: "0.75rem",
                width: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                marginLeft: "10%",
                borderRadius: "5px",
              }}
            >
              <button
                type="submit"
                style={{
                  width: "100%",
                  fontWeight: "500",
                  padding: "0.75rem",
                  borderRadius: "5px",
                  transition: "background-color 0.2s",
                  cursor: "pointer",
                }}
              >
                Signup
              </button>
            </div>
            {message && <p style={{ color: "red", textAlign: "center" }}>{message}</p>}
            <p style={{ paddingTop: "9px", marginLeft: "7%" }}>
              Already have an account?
              <Link to="/login" style={{ textDecoration: "none", color: "red" }}>
                &nbsp;Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;