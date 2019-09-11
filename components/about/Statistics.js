import React from 'react';
import Statistic from './Statistic';

const Statistics = () => {
  return (
    <div id='statistics' className='dark-bg'>
      <div className='stas overlay-bg'>
        <Statistic
          icon='static/images/customer.svg'
          name='customers'
          number={200}
        />
        <Statistic
          icon='static/images/projects.svg'
          name='projects'
          number={180}
        />
      </div>

      <div className='contact second-bg'>
        <h2>You are the next!</h2>
        <button className='btn first'>contact us</button>
      </div>
      <style jsx>
        {`
          #statistics {
            display: flex;
          }
          #statistics .stas {
            display: flex;
            flex-basis: 60%;
            background-image: url('static/images/home-bg.png');
            background-size: cover;
            background-position: center;
            position: relative;
            background-attachment: fixed;
          }
          #statistics .contact {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          #statistics .contact h2 {
            margin-bottom: 20px;
          }
          @media (max-width: 1090px) {
            #statistics {
              flex-direction: column;
            }
            #statistics .contact {
              padding: 50px;
            }
          }
          @media (max-width: 660px) {
            #statistics .stas {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Statistics;
