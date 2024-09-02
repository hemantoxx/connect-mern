import { yellow } from '@material-ui/core/colors';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultProfileDetails = {
  profileImage: '',
  name: 'Shyamm',
  age: 20,
  qualification: 'BE',
  post: 'Front End Developer',
  language: 'Hindi English Marathi',
  skills:"HTML CSS Python Ruby",
  resume: '',
  experience: '2+ Years of Experience',
  projects: '20+ Projects Completed',
  customers: '2 Job Opening',
  awards: '10+ Awards Won',
  education: [
    { year: '2019', title: 'Front End Development', description: 'Did major projects' },
    { year: '2020', title: 'Back End Development', description: 'Did PHP' },
    { year: '2021', title: 'React js', description: '' },
    { year: '2021', title: 'MERN Stack Development', description: '' },
  ],
};

const ProfileView = ({ profileDetails = defaultProfileDetails }) => {
  const navigate = useNavigate();
  const aboutSectionRef = useRef(null);
  const educationSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const handleButtonClick = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
      {/* Sidebar */}
      <div style={{ width: '25%', backgroundColor: '#1c1c1c', color: '#e0e0e0', padding: '30px', textAlign: 'center' }}>
        <img
          src={profileDetails.profileImage || 'https://via.placeholder.com/100'}
          alt="Profile"
          style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px', border: '3px solid #1f77b4' }}
        />
        <h2 style={{ color: '#1f77b4', marginBottom: '10px' }}>{profileDetails.name}</h2>
        <p>{profileDetails.post}</p>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '15px 0' }}>
              <button
                onClick={() => handleButtonClick(aboutSectionRef)}
                style={{
                  background: 'none',
                  border: '2px solid #1f77b4',
                  color: '#1f77b4',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            
              >
                About
              </button>
            </li>
            <li style={{ margin: '15px 0' }}>
              <button
                onClick={() => handleButtonClick(educationSectionRef)}
                style={{
                  background: 'none',
                  border: '2px solid #1f77b4',
                  color: '#1f77b4',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                
              >
                Education
              </button>
            </li>
            <li style={{ margin: '15px 0' }}>
              <button
                onClick={() => handleButtonClick(contactSectionRef)}
                style={{
                  background: 'none',
                  border: '2px solid #1f77b4',
                  color: '#1f77b4',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                
              >
                Contact
              </button>
            </li>
            {/* Add more buttons as needed */}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ width: '75%', padding: '50px', color: '#e0e0e0', backgroundColor: '#0a0a0a', overflowY: 'auto' }}>
        {/* About Section */}
        <section ref={aboutSectionRef} style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#1f77b4', marginBottom: '30px' }}>About Me</h1>
          <div style={{ display: 'flex', marginBottom: '30px' }}>
            <div style={{ flex: '1', marginBottom: '30px' }}>
              <p style={{ marginBottom: '15px' }}><strong>Name:</strong> {profileDetails.name}</p>
              <p style={{ marginBottom: '15px' }}><strong>Age:</strong> {profileDetails.age}</p>
              <p style={{ marginBottom: '15px' }}><strong>Qualification:</strong> {profileDetails.qualification}</p>
              <p style={{ marginBottom: '15px' }}><strong>Post:</strong> {profileDetails.post}</p>
              <p style={{ marginBottom: '15px' }}><strong>Language:</strong> {profileDetails.language}</p>
              <p style={{ marginBottom: '15px' }}><strong>Skills:</strong> {profileDetails.skills}</p>
              <button
                style={{ padding: '10px 20px', fontSize: '16px', color: '#ffffff', backgroundColor: '#28a745', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Download CV
              </button>
            </div>
            <div style={{ flex: '1', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '45%', backgroundColor: '#1c1c1c', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', color: '#1f77b4' }}>{profileDetails.experience}</p>
              </div>
              <div style={{ width: '45%', backgroundColor: '#1c1c1c', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', color: '#1f77b4' }}>{profileDetails.projects}</p>
              </div>
              <div style={{ width: '45%', backgroundColor: '#1c1c1c', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', color: '#1f77b4' }}>{profileDetails.customers}</p>
              </div>
              <div style={{ width: '45%', backgroundColor: '#1c1c1c', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', color: '#1f77b4' }}>{profileDetails.awards}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section ref={educationSectionRef} style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#1f77b4', marginBottom: '30px' }}>My Education</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {profileDetails.education.map((edu, index) => (
              <div key={index} style={{ backgroundColor: '#1c1c1c', padding: '20px', borderRadius: '8px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '-15px', backgroundColor: '#1f77b4', padding: '10px', borderRadius: '50%' }}>
                  <span style={{ color: '#0a0a0a' }}>{edu.year}</span>
                </div>
                <h3 style={{ color: '#1f77b4', marginBottom: '10px' }}>{edu.title}</h3>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactSectionRef} style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#1f77b4', marginBottom: '30px' }}>Contact Me</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            {/* Contact Details */}
            <div style={{ flex: '1', backgroundColor: '#1c1c1c', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#1f77b4', marginBottom: '20px' }}>Contact Details</h2>
              <p style={{ marginBottom: '15px' }}><strong>Phone:</strong> +1234567890</p>
              <p style={{ marginBottom: '15px' }}><strong>Email:</strong> example@example.com</p>
              <p style={{ marginBottom: '15px' }}><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer" style={{ color: '#1f77b4' }}>linkedin.com/in/example</a></p>
              {/* Add more contact details as needed */}
            </div>
            
            {/* Contact Form */}
            <div style={{ flex: '1', backgroundColor: '#1c1c1c', padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ color: '#1f77b4', marginBottom: '20px' }}>Get in Touch</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{ padding: '10px', borderRadius: '4px', border: '1px solid #1f77b4', backgroundColor: '#0a0a0a', color: '#e0e0e0' }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{ padding: '10px', borderRadius: '4px', border: '1px solid #1f77b4', backgroundColor: '#0a0a0a', color: '#e0e0e0' }}
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  style={{ padding: '10px', borderRadius: '4px', border: '1px solid #1f77b4', backgroundColor: '#0a0a0a', color: '#e0e0e0' }}
                ></textarea>
                <button
                  type="submit"
                  style={{ padding: '10px 20px', fontSize: '16px', color: '#ffffff', backgroundColor: '#28a745', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileView;
