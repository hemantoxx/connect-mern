const jobdata = [
    {
      company: "Tech Innovations",
      jobTitle: "Software Engineer",
      location: "San Francisco, CA",
      salaryMin: "$120,000",
      salaryMax: "$150,000",
      jobtype: [
        "Full-time: Develop and maintain software solutions in a collaborative environment.",
        "Remote: Opportunity to work from anywhere with flexible hours."
      ]
    },
    {
      company: "HealthTech Solutions",
      jobTitle: "Data Scientist",
      location: "New York, NY",
      salaryMin: "$100,000",
      salaryMax: "$130,000",
      jobtype: [
        "Full-time: Analyze and interpret complex data to assist in decision-making.",
        "On-site: Work in a fast-paced office environment."
      ]
    },
    {
      company: "FinServe Inc.",
      jobTitle: "Financial Analyst",
      location: "Chicago, IL",
      salaryMin: "$90,000",
      salaryMax: "$110,000",
      jobtype: [
        "Full-time: Provide financial planning and analysis support.",
        "Hybrid: Combination of remote work and on-site meetings."
      ]
    },
    {
      company: "NextGen Robotics",
      jobTitle: "Robotics Engineer",
      location: "Boston, MA",
      salaryMin: "$115,000",
      salaryMax: "$145,000",
      jobtype: [
        "Full-time: Create and test robotic systems for various applications.",
        "On-site: Work in our state-of-the-art robotics lab."
      ]
    },
    {
      company: "ByteLabs",
      jobTitle: "UX Designer",
      location: "San Jose, CA",
      salaryMin: "$100,000",
      salaryMax: "$130,000",
      jobtype: [
        "Full-time: Design user-friendly interfaces for web and mobile applications.",
        "Remote: Flexible work arrangement with occasional team meetings."
      ]
    },
    {
      company: "TechWave",
      jobTitle: "DevOps Engineer",
      location: "Seattle, WA",
      salaryMin: "$115,000",
      salaryMax: "$145,000",
      jobtype: [
        "Full-time: Implement and manage development operations.",
        "Remote: Flexible work with occasional team collaboration."
      ]
    },
    {
      company: "InnovateIT",
      jobTitle: "Cybersecurity Specialist",
      location: "Denver, CO",
      salaryMin: "$110,000",
      salaryMax: "$140,000",
      jobtype: [
        "Full-time: Protect information systems and data from cyber threats.",
        "Remote: Work from home with occasional in-person security briefings."
      ]
    },
    {
      company: "SmartTech",
      jobTitle: "Cloud Architect",
      location: "Dallas, TX",
      salaryMin: "$130,000",
      salaryMax: "$160,000",
      jobtype: [
        "Full-time: Design and manage cloud infrastructure solutions.",
        "Remote: Work with global teams on cloud projects."
      ]
    },
    {
      company: "DataMinds",
      jobTitle: "Data Engineer",
      location: "San Francisco, CA",
      salaryMin: "$120,000",
      salaryMax: "$150,000",
      jobtype: [
        "Full-time: Build and manage data pipelines and systems.",
        "Remote: Work from home with a focus on results."
      ]
    },
    {
      company: "AI Solutions",
      jobTitle: "Machine Learning Engineer",
      location: "San Diego, CA",
      salaryMin: "$125,000",
      salaryMax: "$155,000",
      jobtype: [
        "Full-time: Develop and implement machine learning algorithms.",
        "Remote: Work from anywhere with a focus on deliverables."
      ]
    },
    {
      company: "Digital Dynamics",
      jobTitle: "Product Manager",
      location: "Chicago, IL",
      salaryMin: "$105,000",
      salaryMax: "$135,000",
      jobtype: [
        "Full-time: Manage product development from concept to launch.",
        "Hybrid: Combination of remote work and on-site team meetings."
      ]
    },
    {
      company: "NextGen Finance",
      jobTitle: "Investment Banker",
      location: "Miami, FL",
      salaryMin: "$140,000",
      salaryMax: "$180,000",
      jobtype: [
        "Full-time: Manage investment portfolios and advise clients.",
        "On-site: Work in a fast-paced financial environment."
      ]
    },
    {
      company: "Insight Analytics",
      jobTitle: "Quantitative Analyst",
      location: "Boston, MA",
      salaryMin: "$105,000",
      salaryMax: "$135,000",
      jobtype: [
        "Full-time: Perform quantitative analysis and modeling.",
        "On-site: Work in a high-performance finance team."
      ]
    },
    {
      company: "Tech Innovators",
      jobTitle: "Software Architect",
      location: "San Diego, CA",
      salaryMin: "$135,000",
      salaryMax: "$165,000",
      jobtype: [
        "Full-time: Design and implement complex software architectures.",
        "Remote: Work from anywhere with a focus on deliverables."
      ]
    },
    {
      company: "Innovative Solutions",
      jobTitle: "Network Engineer",
      location: "Atlanta, GA",
      salaryMin: "$110,000",
      salaryMax: "$140,000",
      jobtype: [
        "Full-time: Design and maintain network infrastructure.",
        "On-site: Collaborate with IT teams and manage network systems."
      ]
    },
    {
      company: "BrightFuture Tech",
      jobTitle: "Marketing Manager",
      location: "Atlanta, GA",
      salaryMin: "$95,000",
      salaryMax: "$125,000",
      jobtype: [
        "Full-time: Develop and implement marketing strategies to drive growth.",
        "Hybrid: Split between remote work and office presence."
      ]
    },
    {
      company: "EcomExperts",
      jobTitle: "SEO Specialist",
      location: "Chicago, IL",
      salaryMin: "$90,000",
      salaryMax: "$120,000",
      jobtype: [
        "Full-time: Optimize websites for search engines and improve rankings.",
        "Remote: Work from home with virtual team collaboration."
      ]
    },
    {
      company: "LogiTech",
      jobTitle: "Supply Chain Manager",
      location: "San Francisco, CA",
      salaryMin: "$110,000",
      salaryMax: "$140,000",
      jobtype: [
        "Full-time: Manage supply chain logistics and vendor relationships.",
        "On-site: Work in a dynamic and fast-paced environment."
      ]
    },
    {
      company: "SpaceTech",
      jobTitle: "Aerospace Engineer",
      location: "Los Angeles, CA",
      salaryMin: "$125,000",
      salaryMax: "$155,000",
      jobtype: [
        "Full-time: Design and test aerospace systems and components.",
        "On-site: Work in our advanced aerospace lab."
      ]
    },
    {
      company: "AI Labs",
      jobTitle: "AI Research Scientist",
      location: "San Francisco, CA",
      salaryMin: "$130,000",
      salaryMax: "$160,000",
      jobtype: [
        "Full-time: Conduct research on artificial intelligence and machine learning.",
        "Hybrid: Remote work with periodic office collaborations."
      ]
    },
    {
      company: "GreenTech Energy",
      jobTitle: "IoT Engineer",
      location: "Austin, TX",
      salaryMin: "$110,000",
      salaryMax: "$140,000",
      jobtype: [
        "Full-time: Develop and implement IoT solutions for energy management.",
        "On-site: Work with cutting-edge technology in a collaborative environment."
      ]
    },
    {
      company: "Data Solutions",
      jobTitle: "Database Administrator",
      location: "Seattle, WA",
      salaryMin: "$95,000",
      salaryMax: "$125,000",
      jobtype: [
        "Full-time: Manage and optimize database systems.",
        "Remote: Work with a distributed team on database solutions."
      ]
    },
    {
      company: "Tech Partners",
      jobTitle: "Cloud Engineer",
      location: "Dallas, TX",
      salaryMin: "$120,000",
      salaryMax: "$150,000",
      jobtype: [
        "Full-time: Design and deploy cloud-based solutions.",
        "Hybrid: Combination of remote and office work."
      ]
    },
    {
      company: "CyberGuard",
      jobTitle: "Penetration Tester",
      location: "Washington, DC",
      salaryMin: "$125,000",
      salaryMax: "$155,000",
      jobtype: [
        "Full-time: Identify and address security vulnerabilities.",
        "Remote: Flexible work with occasional in-person assessments."
      ]
    },
    {
      company: "Data Science Corp.",
      jobTitle: "Big Data Analyst",
      location: "San Diego, CA",
      salaryMin: "$110,000",
      salaryMax: "$140,000",
      jobtype: [
        "Full-time: Analyze large datasets to extract meaningful insights.",
        "Remote: Work from home with virtual team meetings."
      ]
    },
    {
      company: "SmartData Solutions",
      jobTitle: "Business Intelligence Developer",
      location: "Denver, CO",
      salaryMin: "$105,000",
      salaryMax: "$135,000",
      jobtype: [
        "Full-time: Develop and manage BI solutions to support business decisions.",
        "Hybrid: Combination of remote work and on-site collaboration."
      ]
    },
    {
      company: "CloudX",
      jobTitle: "DevOps Engineer",
      location: "New York, NY",
      salaryMin: "$115,000",
      salaryMax: "$145,000",
      jobtype: [
        "Full-time: Implement and manage development operations.",
        "Remote: Work from home with occasional team collaboration."
      ]
    },
    {
      company: "Innovative Systems",
      jobTitle: "Systems Analyst",
      location: "Boston, MA",
      salaryMin: "$100,000",
      salaryMax: "$130,000",
      jobtype: [
        "Full-time: Analyze and improve IT systems and processes.",
        "Hybrid: Combination of remote work and office presence."
      ]
    },
    {
      company: "Tech Solutions",
      jobTitle: "Frontend Developer",
      location: "Los Angeles, CA",
      salaryMin: "$95,000",
      salaryMax: "$125,000",
      jobtype: [
        "Full-time: Design and implement user interfaces for web applications.",
        "Remote: Flexible work with virtual team meetings."
      ]
    },
    {
      company: "Digital Innovations",
      jobTitle: "Backend Developer",
      location: "San Francisco, CA",
      salaryMin: "$105,000",
      salaryMax: "$135,000",
      jobtype: [
        "Full-time: Develop and maintain backend systems for web applications.",
        "Remote: Work from home with periodic team meetings."
      ]
    },
    {
      company: "NextWave Tech",
      jobTitle: "Full Stack Developer",
      location: "Seattle, WA",
      salaryMin: "$120,000",
      salaryMax: "$150,000",
      jobtype: [
        "Full-time: Develop both frontend and backend components of web applications.",
        "Hybrid: Combination of remote work and on-site development."
      ]
    },
    {
      company: "TechPioneers",
      jobTitle: "Artificial Intelligence Engineer",
      location: "Austin, TX",
      salaryMin: "$125,000",
      salaryMax: "$155,000",
      jobtype: [
        "Full-time: Develop and implement AI models and algorithms.",
        "Remote: Work with a global team on AI research and development."
      ]
    },
    {
      company: "SecureTech",
      jobTitle: "Information Security Analyst",
      location: "Philadelphia, PA",
      salaryMin: "$105,000",
      salaryMax: "$135,000",
      jobtype: [
        "Full-time: Protect information systems from cyber threats.",
        "On-site: Work in a collaborative security environment."
      ]
    },
    {
      company: "TechCore",
      jobTitle: "IT Support Specialist",
      location: "Chicago, IL",
      salaryMin: "$85,000",
      salaryMax: "$115,000",
      jobtype: [
        "Full-time: Provide technical support and troubleshooting.",
        "On-site: Assist users and manage IT infrastructure."
      ]
    },
    {
      company: "GreenTech",
      jobTitle: "Blockchain Developer",
      location: "San Diego, CA",
      salaryMin: "$130,000",
      salaryMax: "$160,000",
      jobtype: [
        "Full-time: Develop and maintain blockchain applications.",
        "Remote: Work with a distributed team on blockchain projects."
      ]
    },
    {
      company: "NextLevel Tech",
      jobTitle: "Augmented Reality Developer",
      location: "Denver, CO",
      salaryMin: "$120,000",
      salaryMax: "$150,000",
      jobtype: [
        "Full-time: Create and implement AR applications.",
        "Hybrid: Work from home with periodic office meetings."
      ]
    },
    {
      company: "TechForward",
      jobTitle: "Virtual Reality Developer",
      location: "San Francisco, CA",
      salaryMin: "$125,000",
      salaryMax: "$155,000",
      jobtype: [
        "Full-time: Develop VR applications and experiences.",
        "Remote: Work with cutting-edge VR technologies."
      ]
    },
    {
      company: "DataWorks",
      jobTitle: "ETL Developer",
      location: "Austin, TX",
      salaryMin: "$110,000",
      salaryMax: "$140,000",
      jobtype: [
        "Full-time: Design and implement ETL processes for data integration.",
        "On-site: Work with data teams on ETL solutions."
      ]
    },
    {
      company: "SmartTech Innovations",
      jobTitle: "Quality Assurance Engineer",
      location: "New York, NY",
      salaryMin: "$100,000",
      salaryMax: "$130,000",
      jobtype: [
        "Full-time: Ensure the quality of software through testing and validation.",
        "Hybrid: Combination of remote work and on-site testing."
      ]
    },
    {
      company: "Cloud Innovations",
      jobTitle: "Site Reliability Engineer",
      location: "Chicago, IL",
      salaryMin: "$120,000",
      salaryMax: "$150,000",
      jobtype: [
        "Full-time: Maintain and improve site reliability and performance.",
        "Remote: Flexible work with periodic office visits."
      ]
    },
    {
      company: "TechVision",
      jobTitle: "Embedded Systems Engineer",
      location: "San Jose, CA",
      salaryMin: "$115,000",
      salaryMax: "$145,000",
      jobtype: [
        "Full-time: Design and develop embedded systems for various applications.",
        "On-site: Work with hardware and software integration."
      ]
    },
    {
      company: "Digital Horizon",
      jobTitle: "Application Support Analyst",
      location: "San Diego, CA",
      salaryMin: "$90,000",
      salaryMax: "$120,000",
      jobtype: [
        "Full-time: Provide support and maintenance for software applications.",
        "Hybrid: Combination of remote work and on-site support."
      ]
    },
    {
      company: "TechSavvy",
      jobTitle: "IT Project Manager",
      location: "Austin, TX",
      salaryMin: "$105,000",
      salaryMax: "$135,000",
      jobtype: [
        "Full-time: Manage IT projects from initiation to completion.",
        "Hybrid: Combination of remote work and office-based project management."
      ]
    },
    {
      company: "Innovative Tech",
      jobTitle: "Systems Administrator",
      location: "Dallas, TX",
      salaryMin: "$95,000",
      salaryMax: "$125,000",
      jobtype: [
        "Full-time: Administer and manage IT systems and infrastructure.",
        "On-site: Work in a collaborative IT environment."
      ]
    },
    {
      company: "TechPulse",
      jobTitle: "JavaScript Developer",
      location: "Philadelphia, PA",
      salaryMin: "$100,000",
      salaryMax: "$130,000",
      jobtype: [
        "Full-time: Develop and maintain JavaScript-based applications.",
        "Remote: Work from home with virtual team meetings."
      ]
    },
    {
      company: "NextGen Solutions",
      jobTitle: "PHP Developer",
      location: "Boston, MA",
      salaryMin: "$95,000",
      salaryMax: "$125,000",
      jobtype: [
        "Full-time: Develop and maintain PHP-based applications.",
        "Hybrid: Combination of remote work and on-site development."
      ]
    },
    {
      company: "TechFusion",
      jobTitle: "Ruby on Rails Developer",
      location: "Seattle, WA",
      salaryMin: "$110,000",
      salaryMax: "$140,000",
      jobtype: [
        "Full-time: Build and manage Ruby on Rails applications.",
        "Remote: Work from home with occasional team meetings."
      ]
    },
    {
      company: "Digital Edge",
      jobTitle: "Java Developer",
      location: "San Francisco, CA",
      salaryMin: "$115,000",
      salaryMax: "$145,000",
      jobtype: [
        "Full-time: Design and develop Java-based applications.",
        "Hybrid: Combination of remote work and office development."
      ]
    },
    {
      company: "TechMinds",
      jobTitle: "C++ Developer",
      location: "Denver, CO",
      salaryMin: "$120,000",
      salaryMax: "$150,000",
      jobtype: [
        "Full-time: Develop and optimize C++ applications.",
        "On-site: Work with a dynamic development team."
      ]
    },
    {
      company: "FutureTech",
      jobTitle: "Web Developer",
      location: "Chicago, IL",
      salaryMin: "$95,000",
      salaryMax: "$125,000",
      jobtype: [
        "Full-time: Build and maintain websites and web applications.",
        "Remote: Flexible work with virtual team collaboration."
      ]
    },
    {
      company: "TechFront",
      jobTitle: "Mobile App Developer",
      location: "Austin, TX",
      salaryMin: "$110,000",
      salaryMax: "$140,000",
      jobtype: [
        "Full-time: Develop mobile applications for iOS and Android platforms.",
        "Hybrid: Combination of remote work and on-site development."
      ]
    },
    {
      company: "DataDriven",
      jobTitle: "Business Analyst",
      location: "New York, NY",
      salaryMin: "$100,000",
      salaryMax: "$130,000",
      jobtype: [
        "Full-time: Analyze business needs and provide solutions.",
        "Remote: Work from home with occasional office meetings."
      ]
    },
    {
      company: "Innovative Networks",
      jobTitle: "Network Security Engineer",
      location: "San Diego, CA",
      salaryMin: "$115,000",
      salaryMax: "$145,000",
      jobtype: [
        "Full-time: Ensure the security of network systems.",
        "On-site: Work in a high-security environment."
      ]
    }
  ];  
  
export default jobdata;