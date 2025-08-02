import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p className={isExpanded ? 'desc expanded' : 'desc'}>
                {service.s_desc}
              </p>
              <div className='services-readmore' onClick={() => toggleReadMore(index)}>
                <p>{isExpanded ? 'Show Less' : 'Read More'}</p>
                <img src={arrow_icon} alt="" className={isExpanded ? 'rotate' : ''} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
