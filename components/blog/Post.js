import Link from 'next/link';

const Post = ({ title, thumbnail, excerpt }) => {
  return (
    <div className='post'>
      <Link href='/'>
        <a
          className='img'
          style={{ backgroundImage: `url('${thumbnail}')` }}
        ></a>
      </Link>
      <div className='description'>
        <Link href='/'>
          <a>
            <h2 className='link-hov'>{title}</h2>
          </a>
        </Link>
        <p>{excerpt} ...</p>
      </div>
      <style jsx>
        {`
          .post {
            flex-basis: 50%;
            background-color: #fff;
          }
          .post:nth-of-type(odd) {
            margin-right: 20px;
          }
          .post:nth-of-type(even) {
            margin-left: 20px;
          }
          .post .img {
            display: block;
            height: 350px;
            background-size: cover;
            background-position: center;
            position: relative;
          }
          .post .img:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: #000;
            opacity: 0;
            transition: all 0.2s ease-in-out;
          }
          .post:hover .img:before {
            opacity: 0.3;
          }
          .post .description {
            padding: 40px;
          }
          .post .description h2 {
            margin-bottom: 10px;
          }
          @media (max-width: 980px) {
            .post .img {
              height: 250px;
            }
          }
          @media (max-width: 800px) {
            .post {
              margin-bottom: 20px;
            }
            .post:last-of-type {
              margin-bottom: 0;
            }
            .post:nth-of-type(odd) {
              margin-right: 0;
            }
            .post:nth-of-type(even) {
              margin-left: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Post;
