import React from 'react';

const Service = ({ icon, title, description }) => {
  return (
    <div className='service'>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <style jsx>
        {`
          .service {
            flex-basis: 33.333%;
            padding: 40px 30px;
            border: 1px solid #eee;
            text-align: center;
            transition: all 0.2s ease-in-out;
          }
          .service:hover {
            background-color: #f7f7f7;
          }
          .service img {
            margin-bottom: 10px;
            width: 60px;
          }
          .service h3 {
            margin-bottom: 10px;
          }
          @media (max-width: 950px) {
            .service {
              flex-basis: 50%;
            }
          }
          @media (max-width: 640px) {
            .service {
              flex-basis: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Service;
