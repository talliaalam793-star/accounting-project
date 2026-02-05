import React from 'react';
import taLogo from '../assets/TA.jpg';  // Keep your logo/image
import './Project.css';  // Fixed import name

const Projects = () => {
  const experiences = [
    {
      title: "Senior Store Officer (BPS-18)",
      desc: "Currently managing store operations, procurement, inventory control, and financial accounting in the Military Engineering Services, Ministry of Defence. Ensuring compliance with government regulations and efficient resource management.",
      client: "Military Engineering Services (Ministry of Defence)",
      status: "Present",
      technologies: ["QuickBooks", "Financial Reporting", "Procurement Rules", "Inventory Management"],
      link: "mailto:tariqalighunio@gmail.com"  // Links to contact for more details
    },
    {
      title: "Store Officer",
      desc: "Handled store management, stock verification, asset accounting, and coordination with suppliers in a high-responsibility government role.",
      client: "Military Engineering Services (Ministry of Defence)",
      status: "2013 – 2022",
      technologies: ["QuickBooks", "Stock Reconciliation", "Asset Management", "BPPRA Compliance"],
      link: "mailto:tariqalighunio@gmail.com"
    },
    {
      title: "Lower Division Clerk (LDC)",
      desc: "Managed official records, financial documentation, correspondence, and administrative accounting tasks in the Estate Office.",
      client: "Government of Pakistan Estate Office, Islamabad",
      status: "2008 – 2013",
      technologies: ["MS Office", "Record Keeping", "Financial Documentation", "Typing"],
      link: "mailto:tariqalighunio@gmail.com"
    },
    {
      title: "Senior Accountant",
      desc: "Responsible for full-cycle accounting, payroll processing, fee collection, and financial reporting in a private educational institution.",
      client: "St. John’s Group of Grammar Schools, Ghouspur Sindh",
      status: "2000 – 2008",
      technologies: ["Manual Accounting", "Payroll Management", "Financial Statements", "Ledger Maintenance"],
      link: "mailto:tariqalighunio@gmail.com"
    }
  ];

  return (
    <section className="projects-section" id="portfolio">
      <div className="projects-container">
        <p className="section-subtitle">— Experience —</p>
        <h2>My Professional Journey</h2>

        <div className="project-card-wrapper">
          {experiences.map((exp, index) => (
            <div key={index} className="project-card">
              <div className="project-image-side">
                <div className="badge">{exp.status}</div>
                <div className="logo-container">
                  <img 
                    src={taLogo} 
                    alt={exp.title} 
                    className="project-logo" 
                  />
                </div>
              </div>

              <div className="project-info-side">
                <h3 className="project-title">{exp.title}</h3>
                <p className="project-desc">{exp.desc}</p>

                <div className="project-details">
                  <div className="detail-row">
                    <span>Organization</span>
                    <span>{exp.client}</span>
                  </div>
                  <div className="detail-row">
                    <span>Duration</span>
                    <span className="status-badge">{exp.status}</span>
                  </div>
                  <div className="detail-row">
                    <span>Key Skills & Tools</span>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <a 
                  href={exp.link} 
                  className="view-website-btn"
                >
                  Contact for Details
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* Slider counter - updated for 4 items */}
          <div className="slider-controls">
            <p className="slider-counter">01 / 04</p>
            <div className="slider-arrows">
              <button className="arrow-btn prev">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="arrow-btn next active">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;