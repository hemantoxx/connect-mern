import React, { useState } from "react";

const GovernmentAid = () => {
  const [activeForm, setActiveForm] = useState("schemeFinder");

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
      background: "linear-gradient(to bottom right, #6a11cb, #2575fc)",
    },
    container: {
      maxWidth: "600px",
      width: "90%",
      background: "rgba(255, 255, 255, 0.1)",
      padding: "20px",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
    },
    h1: {
      fontSize: "2rem",
      color: "#fff",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#7f00ff",
      color: "white",
      padding: "10px 20px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
      transition: "0.3s",
    },
    buttonActive: {
      backgroundColor: "#4b0082",
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(75, 0, 130, 0.4)",
    },
    input: {
      width: "calc(100% - 24px)",
      padding: "12px",
      margin: "10px 12px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "1rem",
      background: "rgba(255, 255, 255, 0.2)",
      color: "black",
      outline: "none",
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

  const SchemeFinderForm = () => {
    const [income, setIncome] = useState("");
    const [output, setOutput] = useState("");

    const findScheme = () => {
      const parsedIncome = parseFloat(income);

      if (isNaN(parsedIncome) || parsedIncome <= 0) {
        setOutput("Please enter a valid income.");
        return;
      }

      let schemes = "";
      if (parsedIncome <= 300000) {
        schemes = "EWS: Pradhan Mantri Awas Yojana, State Housing Schemes";
      } else if (parsedIncome <= 600000) {
        schemes = "LIG: PMAY, Affordable Housing Projects";
      } else {
        schemes = "Higher Income: State & Private Housing Projects";
      }

      setOutput(schemes);
    };

    return (
      <div>
        <h2>Find Your Applicable Housing Scheme</h2>
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
        <div style={styles.result}>{output}</div>
      </div>
    );
  };

  const PMAYCalculatorForm = () => {
    const [incomeGroup, setIncomeGroup] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [loanTenure, setLoanTenure] = useState("");
    const [result, setResult] = useState("");

    const calculateSubsidy = () => {
      if (!incomeGroup || !loanAmount || !loanTenure) {
        setResult("Please fill all fields.");
        return;
      }

      let subsidyRate = 0;
      if (incomeGroup === "EWS/LIG") {
        subsidyRate = 6.5;
      } else if (incomeGroup === "MIG1") {
        subsidyRate = 4;
      } else if (incomeGroup === "MIG2") {
        subsidyRate = 3;
      }

      const eligibleLoan = Math.min(loanAmount, 1200000);
      const subsidy = (eligibleLoan * subsidyRate * loanTenure) / 100;

      setResult(`You are eligible for a subsidy of ₹${subsidy.toFixed(2)}.`);
    };

    return (
      <div>
        <h2>PMAY Subsidy Calculator</h2>
      
        <select
  value={incomeGroup}
  onChange={(e) => setIncomeGroup(e.target.value)}
  style={styles.input} // Applies the updated styles
>
  <option value="">Select Income Group</option>
  <option value="EWS/LIG">EWS/LIG (up to ₹6 lakh/year)</option>
  <option value="MIG1">MIG1 (₹6-12 lakh/year)</option>
  <option value="MIG2">MIG2 (₹12-18 lakh/year)</option>
</select>
        <input
          type="number"
          placeholder="Enter loan amount in ₹"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Enter loan tenure in years"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={calculateSubsidy}>
          Calculate Subsidy
        </button>
        <div style={styles.result}>{result}</div>
      </div>
    );
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Government Aid Finder</h1>
        <div style={styles.buttonContainer}>
          <button
            style={activeForm === "schemeFinder" ? { ...styles.button, ...styles.buttonActive } : styles.button}
            onClick={() => setActiveForm("schemeFinder")}
          >
            Find Scheme
          </button>
          <button
            style={activeForm === "pmayCalculator" ? { ...styles.button, ...styles.buttonActive } : styles.button}
            onClick={() => setActiveForm("pmayCalculator")}
          >
            PMAY Calculator
          </button>
        </div>
        {activeForm === "schemeFinder" && <SchemeFinderForm />}
        {activeForm === "pmayCalculator" && <PMAYCalculatorForm />}
      </div>
    </div>
  );
};

export default GovernmentAid;
