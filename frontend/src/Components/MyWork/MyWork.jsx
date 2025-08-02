// import React, { useState } from 'react';
// import './MyWork.css';
// import theme_pattern from '../../assets/theme_pattern.svg';
// import mywork_data from '../../assets/mywork_data';
// import arrow_icon from '../../assets/arrow_icon.svg';

// const MyWork = () => {
//   const [showAll, setShowAll] = useState(false);

//   const visibleWorks = showAll ? mywork_data : mywork_data.slice(0, 6);

//   const toggleShowMore = () => {
//     setShowAll(!showAll);
//   };

//   return (
//     <div id='work' className='mywork'>
//       <div className="title-box">
//         <h1>My Latest Work</h1>
//         <img src={theme_pattern} alt="" />
//       </div>

//       <div className="mywork-container">
//         {visibleWorks.map((work, index) => (
//           <div className="mywork-card" key={index}>
//             <img src={work.w_img} alt={`Project ${work.w_no}`} />
//             <p>{work.w_name}</p>
//           </div>
//         ))}
//       </div>

//       {mywork_data.length > 6 && (
//         <div className="mywork-showmore" onClick={toggleShowMore}>
//           <p>{showAll ? 'Show Less' : 'Show More'}</p>
//           <img src={arrow_icon} alt="arrow" className={showAll ? 'rotate' : ''} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyWork;








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
    }, 800); // match with CSS animation duration
  };

  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className={`flip-book ${isFlipping ? 'flipping' : ''}`}>
        <div className="flip-page">
          {visibleWorks.map((work, index) => (
            <div className="mywork-card" key={index}>
              <img src={work.w_img} alt={`Project ${work.w_no}`} />
              <p>{work.w_name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mywork-navigation">
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
