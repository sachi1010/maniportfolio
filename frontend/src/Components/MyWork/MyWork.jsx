
import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(mywork_data.length / cardsPerPage);

  const startIndex = currentPage * cardsPerPage;
  const visibleWorks = mywork_data.slice(startIndex, startIndex + cardsPerPage);

  const flipPage = (direction) => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage((prev) =>
        direction === 'next' ? prev + 1 : prev - 1
      );
      setIsFlipping(false);
    }, 800); 
  };

  return (
    <div id='work' className='mywork'>
      <div className="title-box" data-aos="flip-up">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className={`flip-book ${isFlipping ? 'flipping' : ''}`} data-aos="fade-up">
        <div className="flip-page">
          {visibleWorks.map((work, index) => (
            <div className="mywork-card" key={index}>
              <img src={work.w_img} alt={`Project ${work.w_no}`} />
              <p>{work.w_name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mywork-navigation" data-aos="fade-up">
        <button onClick={() => flipPage('prev')} disabled={currentPage === 0}>
          &#8592; Previous
        </button>
        <button
          onClick={() => flipPage('next')}
          disabled={currentPage === totalPages - 1}
        >
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default MyWork;
