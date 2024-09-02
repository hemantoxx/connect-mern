import React, { useState } from "react";

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState({
    name: "John Doe",
    education: [
      {
        institutionName: "Microsoft",
        startYear: "2015",
        endYear: "2019",
      },
    ],
    skills: [],
    resume: "",
    profileImage: null,
  });

  const [education, setEducation] = useState(profileDetails.education);
  const [selectedSkill, setSelectedSkill] = useState("");

  const handleInput = (key, value) => {
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileDetails((prevDetails) => ({
          ...prevDetails,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSkillSelect = (event) => {
    const skill = event.target.value;
    if (skill && !profileDetails.skills.includes(skill)) {
      setProfileDetails((prevDetails) => ({
        ...prevDetails,
        skills: [...prevDetails.skills, skill],
      }));
    }
    setSelectedSkill(""); // Reset dropdown after selection
  };

  const handleSkillDeselect = (skillToRemove) => {
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      skills: prevDetails.skills.filter(skill => skill !== skillToRemove),
    }));
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        institutionName: "",
        startYear: "",
        endYear: "",
      },
    ]);
  };

  const handleUpdate = () => {
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      education,
    }));
    console.log("Updated profile details:", profileDetails);
    alert("Profile details updated successfully!");
  };

  return (
    <div style={{ padding: "30px", minHeight: "93vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ padding: "30px", backgroundColor: "#fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px", width: "100%", maxWidth: "600px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Edit Profile</h2>
        
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          {profileDetails.profileImage ? (
            <img
              src={profileDetails.profileImage}
              alt="Profile"
              style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "2px solid #007bff" }}
            />
          ) : (
            <div
              style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "#f0f0f0", display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid #007bff" }}
            >
              <span style={{ color: "#888" }}>No Image</span>
            </div>
          )}
        </div>
        
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#555" }}>
            Name:
            <input
              type="text"
              value={profileDetails.name}
              onChange={(event) => handleInput("name", event.target.value)}
              style={{ display: "block", padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
            />
          </label>
        </div>
        
        {education.map((obj, key) => (
          <div key={key} style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#555" }}>
              Job Name:
              <input
                type="text"
                value={obj.institutionName}
                onChange={(event) => {
                  const updatedEdu = education.map((edu, index) =>
                    index === key ? { ...edu, institutionName: event.target.value } : edu
                  );
                  setEducation(updatedEdu);
                }}
                style={{ display: "block", padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
              />
            </label>
            <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#555" }}>
              Start Year:
              <input
                type="number"
                value={obj.startYear}
                onChange={(event) => {
                  const updatedEdu = education.map((edu, index) =>
                    index === key ? { ...edu, startYear: event.target.value } : edu
                  );
                  setEducation(updatedEdu);
                }}
                style={{ display: "block", padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
              />
            </label>
            <label style={{ display: "block", fontWeight: "bold", color: "#555" }}>
              End Year:
              <input
                type="number"
                value={obj.endYear}
                onChange={(event) => {
                  const updatedEdu = education.map((edu, index) =>
                    index === key ? { ...edu, endYear: event.target.value } : edu
                  );
                  setEducation(updatedEdu);
                }}
                style={{ display: "block", padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
              />
            </label>
          </div>
        ))}
        
        <button
          onClick={handleAddEducation}
          style={{ padding: "10px 20px", marginTop: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", width: "100%" }}
        >
          Add another job
        </button>
        
        <div style={{ marginTop: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#555" }}>
            Skills:
            <select
              value={selectedSkill}
              onChange={handleSkillSelect}
              style={{ display: "block", padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
            >
              <option value="">Select a skill</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Python">Python</option>
            </select>
          </label>
        </div>
        
        <div style={{ marginTop: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#555" }}>
            Selected Skills:
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {profileDetails.skills.map((skill, index) => (
                <div
                  key={index}
                  style={{ padding: "5px 10px", borderRadius: "4px", border: "1px solid #ccc", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", gap: "5px" }}
                >
                  {skill}
                  <button
                    onClick={() => handleSkillDeselect(skill)}
                    style={{ background: "none", border: "none", color: "#ff4d4d", cursor: "pointer" }}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </label>
        </div>
        
        <div style={{ marginTop: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#555" }}>
            Resume (.pdf):
            <input
              type="file"
              onChange={(event) => handleInput("resume", event.target.files[0])}
              style={{ display: "block", padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
            />
          </label>
        </div>
        
        <div style={{ marginTop: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#555" }}>
            Profile Photo (.jpg/.png):
            <input
              type="file"
              onChange={handleImageUpload}
              style={{ display: "block", padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
            />
          </label>
        </div>
        
        <button
          onClick={handleUpdate}
          style={{ padding: "10px 20px", marginTop: "20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", width: "100%" }}
        >
          Update Details
        </button>
      </div>
    </div>
  );
};

export default Profile;
