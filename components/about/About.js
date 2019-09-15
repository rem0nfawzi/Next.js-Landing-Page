import React, { useState, useEffect } from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.aboutSection = React.createRef();
  }
  state = {
    scrolled: false
  };
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (
        window.pageYOffset >= this.aboutSection.current.offsetTop - 100 &&
        !this.state.scrolled
      ) {
        this.setState({
          scrolled: true
        });
      }
    });
  }
  render() {
    return (
      <section id='about' ref={this.aboutSection}>
        <div className='container'>
          <div className='row'>
            <div className={this.state.scrolled ? 'img-o scrolled' : 'img-o'}>
              <img src='static/images/about.svg' alt='anda' />
            </div>
            <div className='text'>
              <h1 className='main-title'>We are anza</h1>
              <p>
                <strong>Anda</strong> is a creative agency provides all
                technical services, we're in the market since 2009, we're always
                looking forward to develop powerful applications to attract the
                highest number of customers with an extensive user experience.
              </p>
              <p>We will be happy to work with you!</p>
              <button className='btn first'>contact us</button>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            #about .row {
              display: flex;
              align-items: center;
            }
            #about .row .text,
            #about .row .img-o {
              flex-basis: 50%;
            }
            #about .row .text {
              padding-right: 50px;
            }
            #about .row .text .main-title {
              text-align: left;
              margin-bottom: 40px;
            }
            #about .row .text p {
              margin-bottom: 10px;
              font-weight: light;
            }
            #about .row .text p:last-of-type {
              margin-bottom: 30px;
            }
            #about .row .img-o {
              text-align: center;
            }
            #about .row .img-o img {
              max-width: 400px;
              position: relative;
              top: 150px;
              opacity: 0;
              transition: all 0.5s ease-in-out;
            }
            #about .row .img-o.scrolled img {
              top: 0;
              opacity: 1;
            }

            @media (max-width: 900px) {
              #about .row {
                flex-direction: column;
              }
              #about .row .text {
                order: 1;
                padding-right: 0;
                margin-bottom: 50px;
              }
              #about .row .img-o {
                order: 2;
              }
              #about .row .img-o {
                width: 100%;
              }
              #about .row .text,
              #about .row .text .main-title {
                text-align: center;
              }
            }
          `}
        </style>
      </section>
    );
  }
}

export default About;
