// Summary.js
import React from 'react';
import './summary.css';

const Summary = ({ formData, onEdit, onSubmit }) => {
  return (
    <div className="summary-container">
      <h1 className="summary-title">Summary</h1>
      <div className="divider"></div>
      
      {/* Resume Section */}
      <div className="summary-section">
        <h2 className="section-title">Resume</h2>
        <div className="resume-info">
          <p>File name</p>
          <p className="file-name">{formData.resumeFileName || 'No file uploaded'}</p>
        </div>
      </div>

      <div className="divider"></div>

      {/* Basic Information Section */}
      <div className="summary-section">
        <h2 className="section-title">Basic information</h2>
        <table className="info-table">
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{formData.firstName || '-'}</td>
              <td>Last Name</td>
              <td>{formData.lastName || '-'}</td>
            </tr>
            <tr>
              <td>Email id</td>
              <td>{formData.email || '-'}</td>
              <td>Phone Number</td>
              <td>{formData.phone || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="divider"></div>

      {/* Skills Section */}
      <div className="summary-section">
        <h2 className="section-title">Skill Sets</h2>
        <table className="skills-table">
          <tbody>
            {formData.skills?.map((skill, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>Skill {index + 1}</td>
                  <td>{skill.name || '-'}</td>
                </tr>
                <tr>
                  <td>Experience Level</td>
                  <td>{skill.level || '-'}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divider"></div>

      {/* Education Section */}
      <div className="summary-section">
        <h2 className="section-title">Education</h2>
        <table className="education-table">
          <thead>
            <tr>
              <th>Degree Name</th>
              <th>University</th>
              <th>Year of Starting</th>
              <th>Year of Completion</th>
            </tr>
          </thead>
          <tbody>
            {formData.education?.map((edu, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{edu.degree || '-'}</td>
                  <td>{edu.university || '-'}</td>
                  <td>{edu.startYear || '-'}</td>
                  <td>{edu.endYear || '-'}</td>
                </tr>
                {/* Add empty row between entries except after last */}
                {index < formData.education.length - 1 && (
                  <tr className="empty-row">
                    <td colSpan="4">Degree Name    University    Year of Starting    Year of Completion</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Terms Section */}
      <div className="terms-section">
        <p>
          By submitting this form, you confirm that all information provided is accurate and complete to the best of your knowledge. 
          Any false or misleading information may result in disqualification from the recruitment process or termination of employment if discovered later.
        </p>
        <p>
          Submission of this form does not guarantee an interview or employment. Your personal data will be handled confidentially 
          and used solely for recruitment purposes in accordance with Beyond Labs LLC Privacy Policy.
        </p>
        <div className="terms-checkbox">
          <input type="checkbox" id="terms-agreement" />
          <label htmlFor="terms-agreement">By submitting, you agree to our Terms & Conditions.</label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="edit-button" onClick={onEdit}>EDIT</button>
        <button className="confirm-button" onClick={onSubmit}>CONFIRM</button>
      </div>
    </div>
  );
};

export default Summary;