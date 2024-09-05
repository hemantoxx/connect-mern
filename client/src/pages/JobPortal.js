import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import JobCard from '../components/JobCard';
import jobdata from './jobdata';
import { ReactTyped } from 'react-typed';

const JobPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [job, setJob] = useState("Search");

  // Load initial job data
  useEffect(() => {
    setMainData(jobdata);
    setFilteredData(jobdata);
  }, []);

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter using mainData to include both initial and new jobs
    const filtered = mainData.filter(jobData => {
      const company = jobData.company ? jobData.company.toLowerCase() : '';
      const jobTitle = jobData.jobTitle ? jobData.jobTitle.toLowerCase() : '';
      const location = jobData.location ? jobData.location.toLowerCase() : '';
      const salaryMin = jobData.salaryMin ? jobData.salaryMin.toLowerCase() : '';
      const salaryMax = jobData.salaryMax ? jobData.salaryMax.toLowerCase() : '';
      const jobtype = jobData.jobtype ? jobData.jobtype.join(' ').toLowerCase() : '';

      return (
        company.includes(query) ||
        jobTitle.includes(query) ||
        location.includes(query) ||
        salaryMin.includes(query) ||
        salaryMax.includes(query) ||
        jobtype.includes(query)
      );
    });
    setFilteredData(filtered);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const form = event.target;

    if (form.checkValidity()) {
      const formData = new FormData(form);
      const formValues = {};
      formData.forEach((value, key) => {
        formValues[key] = value;
      });

      const newJob = {
        company: formValues.company,
        jobTitle: formValues.jobTitle,
        jobtype: [formValues.jobtype],
        salaryMin: formValues.salaryMin,
        salaryMax: formValues.salaryMax,
        location: formValues.location
      };

      setMainData(prevData => {
        const updatedData = [newJob,...prevData];
        setFilteredData(updatedData); // Update filtered data to include new job
        return updatedData;
      });

      setJob("Search"); // Go back to the search view after submission
    } else {
      console.log('Please fill out all required fields.');
    }
  };

  return (
    <>
              
      {job === "Search" && (
        <>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            onChange={handleSearchChange}
            style={{
              marginBottom: '20px',
              marginTop: '8rem',
              marginLeft: '2rem',
              background: 'white',
              borderRadius: '20px',
              width: '80%',
            }}
          />
          {/* Don't Remove this Comment
          <Button
            style={{
              width: '10%',
              background: '#FF4D4D',
              marginTop: '2.5rem',
              marginLeft: '1rem',
              borderRadius: '20px',
              color: 'white',
            }}
            onClick={handleSearchChange}
          >Clear</Button>*/}
          <Button
            style={{
              width: '10%',
              background: 'blue',
              marginTop: '9rem',
              marginLeft: '1rem',
              borderRadius: '20px',
              color: 'white',
            }}
            onClick={() => setJob("Addjob")}
          >
            Add Jobs
          </Button>
          <div className='cards_set_head'>
            <div className='cards1_set'>
              {filteredData.length > 0 ? (
                filteredData.map((jobDataList, index) => (
                  <JobCard
                    key={index}
                    company={jobDataList.company}
                    jobTitle={jobDataList.jobTitle}
                    salaryMin={jobDataList.salaryMin}
                    salaryMax={jobDataList.salaryMax}
                    jobtype={jobDataList.jobtype}
                    location={jobDataList.location}
                  />
                ))
              ) : (
                jobdata.map((jobDataList, index) => (
                  <JobCard
                    key={index}
                    company={jobDataList.company}
                    jobTitle={jobDataList.jobTitle}
                    salaryMin={jobDataList.salaryMin}
                    salaryMax={jobDataList.salaryMax}
                    jobtype={jobDataList.jobtype}
                    location={jobDataList.location}
                  />
                ))
              )}
            </div>
          </div>
        </>
      )}

      {job === "Addjob" && (
        <div className='cards_set_head'>
          <div style={{ background: '#DADADA', borderRadius: '40px', marginLeft: '35%', width: '30%', padding: '1%', marginTop: '7rem' }}>
            <Button
              style={{ marginLeft: '3.5%', background: '#1E90FF', borderRadius: '40px', color: 'white' }}
              onClick={() => {
                setJob("Search");
                setSearchQuery("");}
              }
            >
              Back
            </Button>
            <form onSubmit={handleSubmit}>
              <ul className='exp_ul'>
                <li>
                  <TextField label="Enter Company" name='company' variant="outlined" fullWidth required />
                </li>
                <li>
                  <TextField label="Enter Title" name='jobTitle' variant="outlined" fullWidth required />
                </li>
                <li>
                  <TextField label="Job Description" name='jobtype' variant="outlined" fullWidth required />
                </li>
                <li>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <TextField label="Minimum Salary" name='salaryMin' variant="outlined" fullWidth required />
                        </td>
                        <td>
                          <TextField label="Maximum Salary" name='salaryMax' variant="outlined" fullWidth required />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <TextField label="Location" name='location' variant="outlined" fullWidth required />
                </li>
                <li>
                  <Button
                    type='submit'
                    style={{ background: '#1E90FF', width: '100%', borderRadius: '40px', color: 'white' }}
                  >
                    ADD
                  </Button>
                </li>
              </ul>
            </form>
          </div>
          <br/>
        </div>
      )}
    </>
  );
};

export default JobPage;
