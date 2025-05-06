import React, { useState } from "react";
import "./multiStepForm.css";
import PersonalDetails from "./PersonalDetails";
import SkillsSection from "./SkillsSection";
import ResumeUpload from "./ResumeUpload";
import EducationSection from "./EducationSection"; // ✅ Import added
import Summary from "./Summary";
import Completed from "./Completed";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
  });




  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    // Mark both Summary (step 5) and Completed (step 6) as completed
    setCompletedSteps((prev) => [...prev, 5, 6]);
    setCurrentStep(6); // Move to completed step
    // Your form submission logic here
  };

  const steps = [
    "Upload Resume",
    "Basic Information",
    "Skill Set",
    "Education",
    "Summary",
    "Completed",
  ];

  return (
    <div className="app-container">
      {/* Top Navigation */}
      <nav className="topnav">
        <div className="left">
          <div className="logo">
            <span className="logo-b">B</span>
            <div className="logo-lines">
              <span className="logo-line"></span>
              <span className="logo-line"></span>
              <span className="logo-line"></span>
            </div>
            <span className="logo-text">YOND</span>
          </div>
        </div>
        <div className="middle">
          <ul className="nav-menu">
            <li>Company</li>
            <li>Case studies</li>
            <li>Impact</li>
            <li>Operations</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="build-button">Build with us</div>
      </nav>

      {/* Main Form Section */}
      <main className="main-content">
        <div className="form-wrapper">
          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-steps">
              {steps.map((label, index) => {
                const stepNumber = index + 1;
                const isCompleted = completedSteps.includes(stepNumber);
                const isActive = currentStep === stepNumber;

                return (
                  <div
                    key={label}
                    className={`progress-step ${
                      isCompleted ? "completed" : ""
                    } ${isActive ? "active" : ""}`}
                  >
                    <div className="step-indicator">
                      {isCompleted ? (
                        <div className="step-check">✓</div>
                      ) : (
                        <div className="step-dot" />
                      )}
                    </div>
                    <span className="step-label">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 1: Upload Resume */}
          {currentStep === 1 && (
            <>
              <ResumeUpload
                resume={resume}
                setResume={setResume}
                onContinue={handleNext}
              />
              <div className="button-container">
                <button className="next-button" onClick={handleNext}>
                  NEXT
                </button>
              </div>
            </>
          )}

          {/* Step 2: Basic Information */}
          {currentStep === 2 && (
            <>
              <h2 className="form-title">Basic Information</h2>
              <PersonalDetails formData={formData} setFormData={setFormData} />
              <div className="button-container">
                <button className="back-button" onClick={handleBack}>
                  BACK
                </button>
                <button className="next-button" onClick={handleNext}>
                  NEXT
                </button>
              </div>
            </>
          )}

          {/* Step 3: Skill Set */}
          {currentStep === 3 && (
            <SkillsSection onBack={handleBack} onNext={handleNext} />
          )}

          {/* ✅ Step 4: Education */}
          {currentStep === 4 && (
            <EducationSection onBack={handleBack} onNext={handleNext} />
          )}

          {/* Step 5 and Step 6 can be added next */}
          {/* Step 5: Summary */}
          {currentStep === 5 && (
            <Summary
              formData={{
                ...formData,
                resumeFileName: resume?.name || "No file uploaded",
              }}
              onEdit={() => setCurrentStep(1)} // Go back to first step
              onSubmit={handleSubmit} // Your submit handler
            />
          )}

          {/* Step 6: Completed */}
          {currentStep === 6 && <Completed />}
        </div>
      </main>
    </div>
  );
};

export default MultiStepForm;
