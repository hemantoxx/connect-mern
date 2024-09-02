const JobCard = (props) => {
  {/*
  company 
  position 
  salaryRange
      min 
      max
  jobtype // full time or intership
  location 
    */}
  return (
    <div className="cards_component">
      <h1>{props.jobTitle}</h1>
      <div className="tab-content">
          <div>
            {/* Render experience content here */}
            <ul className='exp_ul'>
            <li>Company</li>
            <span><button>{props.company}</button></span>
              <li>Job Description</li>
              <p style={{textAlign:'justify'}}>{props.jobtype}</p>
              <li>Salary</li>
              <span><button>{props.salaryMin} to {props.salaryMax}</button></span>
              <li>Location</li>
              <span><button>{props.location}</button></span>
            </ul>
          </div>
      </div>
      </div>
  );
};

export default JobCard;