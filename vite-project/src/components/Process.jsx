import React, { useState } from 'react';
import { 
  FaClipboardList, 
  FaCalculator, 
  FaCheckCircle, 
  FaFileInvoiceDollar 
} from 'react-icons/fa';
import './process.css';

const Process = () => {
  const [activeCard, setActiveCard] = useState(null);

  const processSteps = [
    {
      icon: <FaClipboardList />,
      title: "Initial Assessment",
      desc: "Gathering financial records, understanding client needs, and analyzing current accounting processes and requirements."
    },
    {
      icon: <FaCalculator />,
      title: "Data Processing & Recording",
      desc: "Accurate bookkeeping, transaction recording, ledger maintenance, and financial data entry using tools like QuickBooks."
    },
    {
      icon: <FaCheckCircle />,
      title: "Review & Reconciliation",
      desc: "Bank reconciliation, account verification, error checking, and ensuring compliance with relevant financial regulations."
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Reporting & Delivery",
      desc: "Preparing financial statements, balance sheets, profit & loss reports, and delivering clear, professional financial insights."
    }
  ];

  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <div className="process-header">
          <p className="section-subtitle">— Process —</p>
          <h2>My Accounting Process</h2>
          <p className="process-desc">
            As a professional accountant with over 15 years of experience, I follow a systematic and accurate approach to deliver reliable financial management and reporting services.
          </p>
        </div>

        <div className="process-cards">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`process-card ${activeCard === index ? 'active' : ''}`}
              onClick={() => setActiveCard(index)}
            >
              <div className="card-icon">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;