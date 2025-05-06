// BasicInfoForm.jsx
import React from "react";
import "./personalDetails.css";

const PersonalDetails = ({ formData, setFormData, onNext}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
      

  return (
    <div className="basic-info-form">
      <h2>Basic information</h2>

      <div className="form-row">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="contact-field">
          <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            {/* add more as needed */}
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="XXXXX XXXXX"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
