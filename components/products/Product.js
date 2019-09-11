import Slider from 'react-slick';
import Link from 'next/link';

const NextArrow = props => {
  const { onClick } = props;
  return (
    <div
      className='arrow dark-bg'
      onClick={onClick}
      style={{ backgroundImage: `url('static/images/nextArrow.svg')` }}
    >
      <style jsx>
        {`
          .arrow {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            z-index: 2;
            width: 50px;
            height: 50px;
            background-size: 18px;
            background-position: center;
            background-repeat: no-repeat;
            cursor: pointer;
            opacity: 0;
            transition: all 0.4s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};
const PrevArrow = props => {
  const { onClick } = props;
  return (
    <div
      className='arrow dark-bg'
      onClick={onClick}
      style={{ backgroundImage: `url('static/images/prevArrow.svg')` }}
    >
      <style jsx>
        {`
          .arrow {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            z-index: 2;
            width: 50px;
            height: 50px;
            background-size: 18px;
            background-position: center;
            background-repeat: no-repeat;
            cursor: pointer;
            opacity: 0;
            transition: all 0.4s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

const Product = ({ images, title, excerpt }) => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className='product'>
      <div className='images'>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <div
                className='img'
                style={{ backgroundImage: `url('${img}')` }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='content'>
        <h1>{title}</h1>
        <p>{excerpt} ...</p>
        <Link href='/'>
          <a className='more-btn'>read more</a>
        </Link>
      </div>
      <style jsx>
        {`
          .product {
            background-color: #fff;
            overflow: hidden;
            margin-bottom: 50px;
          }
          .product:last-of-type {
            margin-bottom: 0;
          }
          .product .images,
          .product .content {
            float: left;
            width: 50%;
          }
          .product .images .img {
            height: 350px;
            background-size: cover;
            background-position: center;
          }
          .product .content {
            padding: 50px;
          }
          .product .content h1 {
            margin-bottom: 30px;
          }
          .product .content p {
            margin-bottom: 30px;
          }
          .product .content .more-btn {
            display: inline-block;
          }
          .product .content .btn.more {
            padding: 10px 30px;
          }
          @media (max-width: 800px) {
            .product .images,
            .product .content {
              width: 100%;
              float: none;
            }
            .product .images .img {
              height: 250px;
            }
            .product .content {
              padding: 30px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Product;
