import React, { useState } from "react";
import axios from 'axios';
const Form = () => {
 const [submitted, setSubmitted] = useState(false);
 const [isValid, setIsValid] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "email") {
        setIsValid(validateEmail(value));
        
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
   axios.post('http://localhost:5000/api/submit', formData)
    .then(response => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
    })
    .catch(error => {
      console.error(error);
    });
    
  };

  return (
    <div>
      <h2>Form Data</h2>
      {submitted && <div style={{width: "100",marginBottom: "5px", fontWeight: "bold",textAlign:"center"}}><p>Thank you! Your message has been submitted.</p></div>}

      <form onSubmit={handleSubmit} style={{display: "flex",flexDirection: "column", width: "300px",
  margin: "auto"}}>
        <label
          htmlFor="name"
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name} onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        />
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
              onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        />
        {!isValid && <div style={{width: "100",marginBottom: "5px", fontWeight: "bold",textAlign:"center"}}><p>Enter valid email id</p></div>}

        <label
          htmlFor="message"
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
              onChange={handleChange}
          required
          rows="5"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            resize: "vertical",
            boxSizing: "border-box",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: isValid ? "blue" : "grey",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            width: "100%",
            marginTop: "20px",
            cursor: isValid ? "pointer" : "not-allowed"
            
          }}
          disabled={!isValid}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};
export default Form;
