import React, { useState } from "react";

const HousingSchemeFinder = () => {
  const [income, setIncome] = useState("");
  const [output, setOutput] = useState("");

  const styles = {
    body: {
      fontFamily: "'Poppins', sans-serif",
      margin: 0,
      padding: 0,
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      overflow: "hidden",
    },
    container: {
      maxWidth: "600px",
      width: "90%",
      background: "rgba(255, 255, 255, 0.1)",
      padding: "20px",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      textAlign: "center",
      boxShadow: '0 4px 8px rgba(255, 255, 255, 0.3)',
    },
    h1: {
      fontSize: "2rem",
      color: "#fff",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    },
    p: {
      fontSize: "1rem",
      color: "#ddd",
    },
    input: {
      width: "calc(100% - 24px)",
      padding: "12px",
      margin: "10px 12px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "1rem",
      background: "rgba(255, 255, 255, 0.2)",
      color: "#fff",
      outline: "none",
    },
    inputFocus: {
      borderColor: "#7f00ff",
      boxShadow: "0 0 8px rgba(127, 0, 255, 0.5)",
    },
    button: {
      width: "calc(100% - 24px)",
      margin: "10px 12px",
      backgroundColor: "#7f00ff",
      color: "white",
      padding: "12px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#4b0082",
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(75, 0, 130, 0.4)",
    },
    result: {
      marginTop: "20px",
      padding: "15px",
      borderRadius: "10px",
      background: "rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      color: "#fff",
    },
  };

  const findScheme = () => {
    const parsedIncome = parseFloat(income);

    if (isNaN(parsedIncome) || parsedIncome <= 0) {
      setOutput('<p style="color: red; ">Please enter a valid income.</p>');
      return;
    }

    let schemes = "";

    if (parsedIncome <= 300000) {
      schemes = `
        <h2 style="color: #e100ff;">Economically Weaker Section (EWS)</h2>
        Pradhan Mantri Awas Yojana (PMAY - Urban & Rural)
        State Housing Schemes
        <p><strong>Key Benefits:</strong> Subsidy of 6.5% on home loans; Financial assistance for housing construction or renovation.</p>
      `;
    } else if (parsedIncome <= 600000) {
      schemes = `
        <h2 style="color: #e100ff;">Low-Income Group (LIG)</h2>
        <ul>
          <li>Pradhan Mantri Awas Yojana (PMAY - Urban & Rural)</li>
          <li>State Housing Schemes</li>
        </ul>
        <p><strong>Key Benefits:</strong> Subsidy of 6.5% on home loans; Priority under affordable housing projects.</p>
      `;
    } else if (parsedIncome <= 1200000) {
      schemes = `
        <h2 style="color: #e100ff;">Middle-Income Group (MIG-I)</h2>
        <ul>
          <li>Pradhan Mantri Awas Yojana (PMAY - Urban)</li>
          <li>State Housing Schemes</li>
        </ul>
        <p><strong>Key Benefits:</strong> Subsidy of 4% on loans up to ₹9 lakh.</p>
      `;
    } else if (parsedIncome <= 1800000) {
      schemes = `
        <h2 style="color: #e100ff;">Middle-Income Group (MIG-II)</h2>
        <ul>
          <li>Pradhan Mantri Awas Yojana (PMAY - Urban)</li>
          <li>State Housing Schemes</li>
        </ul>
        <p><strong>Key Benefits:</strong> Subsidy of 3% on loans up to ₹12 lakh.</p>
      `;
    } else {
      schemes = `
        <h2 style="color: #e100ff;">No Income Restriction</h2>
          Awas Yojana (RAY)
          DDA Housing Scheme
          MHADA Housing Scheme
          State Housing Schemes
        <p><strong>Key Benefits:</strong> Slum redevelopment; Lottery-based affordable housing allocation.</p>
      `;
    }

    setOutput(schemes);
  };

  const noIncomeRestriction = () => {
    const schemes = `
      <h2>No Income Restriction</h2>
        Rajiv Awas Yojana (RAY)<br>
        DDA Housing Scheme<br>
        MHADA Housing Scheme<br>
        State Housing Schemes
      <p><strong>Key Benefits:</strong> Slum redevelopment; Lottery-based affordable housing allocation.</p>
    `;
    setOutput(schemes);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Find Your Applicable Housing Scheme</h1>
        <p style={styles.p}>
          Enter your annual income to see the housing schemes you qualify for:
        </p>
        <input
          type="number"
          placeholder="Enter your annual income in ₹"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={findScheme}>
          Find Scheme
        </button>
        <button style={styles.button} onClick={noIncomeRestriction}>
          Show Schemes with No Income Restriction
        </button>
        <div
          style={styles.result}
          dangerouslySetInnerHTML={{ __html: output }}
        ></div>
      </div>
    </div>
  );
};

export default HousingSchemeFinder;
