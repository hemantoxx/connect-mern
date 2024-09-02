import React, { useState } from 'react';


const DonationForm = () => {
  const [activeTab, setActiveTab] = useState('Monthly');
  const [activeValue, setActiveValue] = useState('10');
  const [donationAmount, setDonationAmount] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleActiveValue = (value) => {
    setActiveValue(value);
  };

  const handleDonationAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  return (
    <table className="form">
      <tr>
        <td style={{ paddingTop: '10px', paddingBottom: '20px', paddingLeft: '30px', paddingRight: '40px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>Help us do more </h2>
          <p>
            Your contributions make a significant impact on our programs, facilities, and student support. If every alumni contributes $10 monthly, we can ensure continued excellence and growth. Your support is crucial for us to thrive and make a difference in the lives of our students.
          </p>
        </td>
        <tr>
        <td>
          <div className="separator"></div>
        </td>
      </tr>
        <td rowSpan={2}>
          <form onSubmit={(e) => e.preventDefault()} action="https://buy.stripe.com/test_3cs01lguj9fO9I4cMM">
            {/* Gift Frequency Section */}
            <header className="title">
              <h4 style={{ marginBottom: '1rem' }}>Donation Frequency</h4>
              <div className="tabs">
                <div
                  className={`tab ${activeTab === 'Monthly' ? 'activeTab' : ''}`}
                  onClick={() => handleTabClick('Monthly')}
                >
                  <small style={{ marginLeft: '15%' }}>Monthly</small>
                </div>
                <div
                  className={`tab ${activeTab === 'One-Time' ? 'activeTab' : ''}`}
                  onClick={() => handleTabClick('One-Time')}
                >
                  <small style={{ marginLeft: '6%' }}>One-Time</small>
                </div>
              </div>
            </header>

            {/* Select Amount Section */}
            <div className="section">
              <header className="title">
                <h4 style={{ marginBottom: '1rem' }}>Select Amount (in US dollars)</h4>
                <div className="tabs1">
                  <div
                    className={`tab1 ${activeValue === '10' ? 'activeValue' : ''}`}
                    onClick={() => handleActiveValue('10')}
                  >
                    <small style={{ marginLeft: '25%' }}>$10</small>
                  </div>
                  <div
                    className={`tab1 ${activeValue === '20' ? 'activeValue' : ''}`}
                    onClick={() => handleActiveValue('20')}
                  >
                    <small style={{ marginLeft: '23%' }}>$20</small>
                  </div>
                  <div
                    className={`tab1 ${activeValue === '50' ? 'activeValue' : ''}`}
                    onClick={() => handleActiveValue('50')}
                  >
                    <small style={{ marginLeft: '23%' }}>$50</small>
                  </div>
                  <div
                    className={`tab1 ${activeValue === '100' ? 'activeValue' : ''}`}
                    onClick={() => handleActiveValue('100')}
                  >
                    <small style={{ marginLeft: '18%' }}>$100</small>
                  </div>
                  <div
                    className={`tab1 ${activeValue === '500' ? 'activeValue' : ''}`}
                    onClick={() => handleActiveValue('500')}
                  >
                    <small style={{ marginLeft: '17%' }}>$500</small>
                  </div>
                  <div
                    className={`tab1 ${activeValue === 'other' ? 'activeValue' : ''}`}
                    onClick={() => handleActiveValue('other')}
                  >
                    <small style={{ marginLeft: '10%' }}>Other</small>
                  </div>
                  <br />
                  {activeValue === 'other' && (
                    <div style={{ marginTop: '10px', marginLeft: '10%' }}>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        value={donationAmount}
                        style={{ width: '80%', padding: '5px' }}
                        onChange={handleDonationAmountChange}
                      />
                    </div>
                  )}
                </div>
              </header>
            </div>

            {/* Agreement Checkbox Section */}
            <label className="lbl">
              <input type="checkbox" id="agreement-checkbox" className="checkbox" />
              Yes, I’ll generously add $0.75 each month to cover the transaction fees.
            </label>
            <br />

            {/* Name Input Section */}
            <input
              className="input"
              type="text"
              id="name-input"
              placeholder="Enter your name (Optional)"
            />
            <a href="https://buy.stripe.com/test_3cs01lguj9fO9I4cMM" className="link">
              Click here to give in honor of another person
            </a>

            {/* Submit Button */}
            <br />
            <a href="https://buy.stripe.com/test_3cs01lguj9fO9I4cMM" className="button">
              Donate now
            </a>
          </form>
        </td>
      </tr>
    </table>
  );
};

export default DonationForm;
