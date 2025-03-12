import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../features/auth/authApi";
import { setUser } from "../../features/auth/authSlice";

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const response = await loginUser(data).unwrap();
      const { token, user } = response;
      dispatch(setUser({ user }));
      alert("Login successfully");
      navigate("/");
    } catch (error) {
      setMessage("Please enter a valid email and password");
    }
  };

  return (
    <section style={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" , backgroundColor: "#f4e5ec" }}>
      <div style={{ maxWidth: "400px", border: "1px solid #ddd", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", backgroundColor: "white", padding: "32px", borderRadius: "8px" ,width:'60%'}}>
        <h2 style={{fontSize:"25px", textAlign: "center",fontWeight:"bold",fontFamily:"initial"}}>Please Login</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "20px" }}>
          <input 
            type="email" 
            name="email" 
            id="email" 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email Address" 
            style={{ width: "100%", backgroundColor: "#f3f4f6", padding: "12px", borderRadius: "4px", border: "1px solid #ccc", outline: "none" }}
          />
          <input 
            type="password" 
            name="password" 
            id="password" 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
            style={{ width: "100%", resize: "vertical" ,backgroundColor: "#f3f4f6", padding: "12px", borderRadius: "4px", border: "1px solid #ccc", outline: "none" }}
          />
          {message && <p style={{ color: "red" }}>{message}</p>}
        
        
          <button 
            type="submit" 
className="hover:bg-blue-700"
            style={{ width: "100%",  borderRadius: "6px", cursor: "pointer", border: "none" }}
           
            onMouseOver={(e) => (e.target.style.backgroundColor = "#9f20f9")} 
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ed3849")}
          >
           <h2 style={{color:"white",fontWeight: "500", padding: "12px", borderRadius: "6px"}}>Login</h2> 
          </button>
          <p>
            Don't have an account?
            <Link to="/signup" style={{ textDecoration: "none", color: "red", marginLeft: "5px" }}>
              Signup
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
