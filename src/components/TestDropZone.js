import React from "react";
import { useDropzone } from "react-dropzone";

const TestDropzone = () => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log("✅ Drop triggered:", acceptedFiles);
      alert("Dropped: " + acceptedFiles[0]?.name);
    }
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #ccc",
        borderRadius: "8px",
        padding: "50px",
        textAlign: "center",
        margin: "50px auto",
        width: "400px",
        cursor: "pointer"
      }}
    >
      <input {...getInputProps()} />
      <p>Drag 'n' drop or click to upload</p>
    </div>
  );
};

export default TestDropzone;
