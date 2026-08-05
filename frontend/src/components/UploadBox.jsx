import { useRef, useState } from "react";
import api from "../services/api";

function UploadBox() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Allowed file types
    const allowedTypes = ["application/pdf", "text/csv"];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF and CSV files are allowed.");

      fileInputRef.current.value = "";

      return;
    }

    // Maximum size (5 MB)
    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("File size should not exceed 5 MB.");

      fileInputRef.current.value = "";

      return;
    }

    setSelectedFile(file);
  };
  // Remove selected file
  const removeFile = () => {
    setSelectedFile(null);

    fileInputRef.current.value = "";
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("statement", selectedFile);

      const token = localStorage.getItem("token");

      const response = await api.post("/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert(response.data.message);

      setSelectedFile(null);

      fileInputRef.current.value = "";

      console.log(response.data);
      
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Upload Failed");
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-icon">📄</div>
      <br />

      <h2 style={{color:"#454545"}}>Upload Bank Statement</h2>

      <p>Drag & Drop your PDF or CSV file here</p>

      <p className="or-text">OR</p>

      <input
        ref={fileInputRef}
        type="file"
        hidden
        onChange={handleFileChange}
      />

      <button className="btn" onClick={() => fileInputRef.current.click()}>
        Choose File
      </button>

      {selectedFile && (
        <button
          className="btn"
          style={{ marginTop: "15px" }}
          onClick={handleUpload}
        >
          Upload Statement
        </button>
      )}

      {/* Selected File */}

      {selectedFile && (
        <div className="selected-file">
          <p>📄 {selectedFile.name}</p>

          <button className="remove-btn" onClick={removeFile}>
            Remove
          </button>
        </div>
      )}

      <p className="supported-files">Supported: PDF, CSV (Max 5 MB)</p>
    </div>
  );
}

export default UploadBox;
