import React, { useState } from "react";
import { X } from "lucide-react";
import "./educationSection.css";

const EducationSection = ({ onBack, onNext }) => {
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [educationEntries, setEducationEntries] = useState([]);

  const handleAddEducation = () => {
    if (university && degree) {
      // Extract years if dates are provided, otherwise use placeholders
      const startYear = startDate ? new Date(startDate).getFullYear() : "YYYY";
      const endYear = endDate ? new Date(endDate).getFullYear() : "YYYY";
      
      const newEntry = {
        id: Date.now(),
        degree,
        university,
        location,
        years: `${startYear}-${endYear}`,
      };
      
      setEducationEntries([...educationEntries, newEntry]);
      
      // Clear form fields after adding
      setUniversity("");
      setDegree("");
      setLocation("");
      setStartDate("");
      setEndDate("");
    }
  };

  const handleRemoveEntry = (id) => {
    setEducationEntries(educationEntries.filter(entry => entry.id !== id));
  };

  return (
    <div className="education-form">
      <h2 className="education-title">Add Education</h2>

      <div className="education-inputs">
        <div className="input-group">
          <label>Add Degree</label>
          <input
            type="text"
            className="input-field"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>University/College</label>
          <input
            type="text"
            className="input-field"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </div>

        <div className="input-group">
  <label>Starting Year</label>
  <div className="date-input-wrapper">
    <input
      type="date"
      className="date-input"
      value={startDate}
      onChange={(e) => setStartDate(e.target.value)}
    />
  </div>
</div>

<div className="input-group">
  <label>Ending Year</label>
  <div className="date-input-wrapper">
    <input
      type="date"
      className="date-input"
      value={endDate}
      onChange={(e) => setEndDate(e.target.value)}
    />
  </div>
</div>
      </div>

      <div className="add-education-button">
        <button className="add-button" onClick={handleAddEducation}>
          Add <span className="plus-icon">+</span>
        </button>
      </div>

      {/* Education tags display */}
      <div className="education-tags">
        {educationEntries.map((entry) => (
          <div key={entry.id} className="education-tag">
            <span className="tag-icon">•</span>
            <span className="tag-text">{entry.degree}-{entry.university} ({entry.years})</span>
            <button className="tag-remove" onClick={() => handleRemoveEntry(entry.id)}>
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="form-navigation">
        <button className="back-button" onClick={onBack}>
          BACK
        </button>
        <button className="next-button" onClick={onNext}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default EducationSection;