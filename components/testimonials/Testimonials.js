import Slider from 'react-slick';
import Head from 'next/head';
import Comment from './Comment';
import { Parallax, Background } from 'react-parallax';

const Testimonials = () => {
  const settings = {
    infinite: true,
    centerPadding: '200px',
    slidesToShow: 2,
    speed: 500,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          centerPadding: '200px'
        }
      }
    ]
  };
  return (
    <section
      id='testimonials'
      className='overlay-bg'
      style={{ backgroundImage: `url('static/images/home-bg.webp')` }}
    >
      <Head>
        <link rel='stylesheet' href='/static/css/slick.min.css' />
        <link rel='stylesheet' href='/static/css/slick-theme.min.css' />
      </Head>
      <div className='container'>
        <h1 className='main-title'>What our clients said</h1>
        <p className='main-slogan'>
          Our main goal is our clients satisfication
        </p>

        <Slider {...settings}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </Slider>
      </div>
      <style jsx>
        {`
          #testimonials {
            position: relative;
            background-size: cover;
            background-position: center;
          }
          #testimonials .container {
            position: relative;
          }
          #testimonials .main-title {
            color: #fff;
          }
          #testimonials .main-slogan {
            color: #ccc;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
