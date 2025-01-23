import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    id: 1,
    header: 'What is HomyFind?',
    text: 'HomyFind is a platform designed to help individuals find affordable housing options tailored to their preferences and budget..',
  },
  {
    id: 2,
    header: 'Who can use HomyFind?',
    text: 'Anyone looking for affordable housing, whether you are a student, professional, or a family, can use our platform.',
  },
  {
    id: 3,
    header: 'Do I need to create an account to search for homes?',
    text: (
      <span>
        While you can browse some listings without an account, creating an account will give you access to additional features such as saving favorites and receiving personalized recommendations.{' '}
        <Link to="/explore">Directory</Link> section and entering the specific skill or domain you need help with. We will provide you with a list of alumni and seniors who possess expertise in that particular area, along with their contact information for further communication.
      </span>
    ),
  },
  {
    id: 4,
    header: 'Is it free to use HomyFind?',
    text: 'Yes, our basic search and browsing features are free. We also offer premium plans with added benefits such as advanced search filters and priority customer support.',
  },
  {
    id: 5,
    header: 'How often are new listings added?',
    text: (
        <span>
          New listings are added daily, and we update our database in real time to ensure users have access to the latest options.. We are open to {' '}
          <Link to="/reach-out">suggestions</Link> for listing new domains as well.
        </span>
      ),
  },

  {
    id: 6,
    header: 'Is my data safe on HomyFind?',
    text: `Yes, we take data security seriously and use industry-standard encryption to protect your personal information.`,
  },

  
  
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
          <h5 className="rc-accordion-title">{header}</h5>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={active === id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <div className="rc-accordion-body-2">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

const DetailSidebar = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-2">
            <div className="card">
              <div className="card-body">
                <h4 className="form-heading">Frequently Asked Questions [FAQs]</h4>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} active={active} handleToggle={handleToggle} faq={faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSidebar;
