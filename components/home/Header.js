import { Parallax, Background } from 'react-parallax';
import Navbar from '../layout/Navbar';
import { useState, useEffect } from 'react';

const Header = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 150);
  }, []);
  return (
    <Parallax
      blur={3}
      bgImage={'static/images/home-bg.webp'}
      bgImageAlt='the cat'
      strength={600}
    >
      <section id='header' className='overlay-bg'>
        <Navbar />
        <div className='content'>
          <div className='container'>
            <h1 className={`title ${loaded && 'loaded'}`}>
              <span>a</span>
              <span>n</span>
              <span>d</span>
              <span className='text-second'>a</span>
            </h1>
            <p className='slogan'>
              We provide all web & mobile solutions you need
            </p>
            <button className='btn second bold'>our works</button>
          </div>
        </div>
        <style jsx>{`
          #header {
            position: relative;
            min-height: 100vh;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          #header .content {
            padding-top: 50px;
            position: relative;
            z-index: 1;
            max-width: 800px;
            text-align: center;
          }
          #header .content .title {
            color: #fff;
            font-family: Exo_Black;
            text-transform: uppercase;
            font-size: 90px;
            margin-bottom: 20px;
          }
          #header .content .title span {
            position: relative;
            opacity: 0;
            transition: all 0.3s ease-in-out;
          }
          #header .content .title span:nth-of-type(odd) {
            top: -100px;
          }
          #header .content .title span:nth-of-type(even) {
            bottom: -100px;
          }
          #header .content .title.loaded span:nth-of-type(odd) {
            top: 0;
            opacity: 1;
          }
          #header .content .title.loaded span:nth-of-type(even) {
            bottom: 0;
            opacity: 1;
          }
          #header .content .slogan {
            color: #fff;
            text-transform: uppercase;
            font-size: 18px;
            letter-spacing: 1px;
            font-family: Worksans_Light;
            margin-bottom: 20px;
          }
          @media (max-width: 638px) {
            #header .content .title {
              font-size: 70px;
            }
            #header .content .slogan {
              font-size: 16px;
            }
          }
        `}</style>
      </section>
    </Parallax>
  );
};

export default Header;
