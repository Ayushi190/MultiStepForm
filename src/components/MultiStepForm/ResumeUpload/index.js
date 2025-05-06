import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaFilePdf, FaFileWord, FaTimes, FaSpinner } from "react-icons/fa";
import "./resumeUpload.css";

const ResumeUpload = ({ resume, setResume, onContinue }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("idle"); // 'idle', 'uploading', 'completed'

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        startUpload(acceptedFiles[0]);
      }
    },
    noClick: true,
    noKeyboard: true,
  });

  const startUpload = (file) => {
    setResume(file);
    setUploadStatus("uploading");
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setUploadStatus("completed");
          return 100;
        }
        return newProgress;
      });
    }, 300);
  };

  const cancelUpload = () => {
    setUploadStatus("idle");
    setUploadProgress(0);
    setResume(null);
  };

  const formatFileSize = (bytes) => {
    return (bytes / 1024).toFixed(1);
  };

  return (
    <div className="upload-resume-container">
      <h2>Upload Resume</h2>

      {/* Always show the upload container */}
      <div
        {...getRootProps()}
        className={`upload-area ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        <div className="upload-icon">📄</div>
        <p className="upload-text">Choose a file or drag & drop it here</p>
        <p className="upload-format">Please Upload Your Resume (PDF, DOC formats only)</p>
        <button type="button" className="browse-button" onClick={open}>
          Browse File
        </button>
      </div>

      {/* Show upload progress below the container */}
      {uploadStatus !== "idle" && (
        <div className="upload-progress-container">
          <div className="file-info">
            {resume?.type.includes("pdf") ? (
              <FaFilePdf className="file-icon pdf" />
            ) : (
              <FaFileWord className="file-icon word" />
            )}
            <div className="file-details">
              <div className="file-name">{resume?.name}</div>
              <div className="progress-details">
                <span className="file-size">
                  {formatFileSize((resume?.size * uploadProgress) / 100)} KB of {formatFileSize(resume?.size)} KB
                </span>
                <span className="upload-indicator">
                  {uploadStatus === "uploading" ? (
                    <>
                      <FaSpinner className="spinner" /> Uploading...
                    </>
                  ) : (
                    <span className="completed">✓ Completed</span>
                  )}
                </span>
              </div>
            </div>
            {uploadStatus === "uploading" && (
              <button
                type="button"
                className="cancel-button"
                onClick={cancelUpload}
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;