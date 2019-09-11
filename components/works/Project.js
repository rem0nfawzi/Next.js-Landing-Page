import Link from 'next/link';

const Project = ({ bg, first }) => {
  return (
    <div className={first ? 'first project' : 'project'}>
      <Link href=''>
        <a style={{ backgroundImage: `url(${bg})` }}>
          <div className='more overlay-bg'>
            <span className='text'>more details</span>
            <img src='static/images/more-arrow.svg' alt='more' />
          </div>
          <span className='hash dark-bg'>
            <span className='text-second'>#</span> ui/ux
          </span>
        </a>
      </Link>
      <style jsx>
        {`
          .project {
            flex-basis: 50%;
            flex-grow: 1;
            padding: 5px;
          }
          .project a {
            background-color: #000;
            display: block;
            height: 100%;
            background-size: cover;
            background-position: center;
            position: relative;
          }
          .project a .hash {
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            color: #fff;
            text-transform: uppercase;
            border-radius: 5px;
            font-size: 13px;
            display: flex;
            align-items: center;
          }
          .project a .hash span {
            font-weight: bold;
            font-size: 18px;
            margin-right: 10px;
          }
          .project.first {
            height: 450px;
          }
          .project a .more {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            opacity: 0;
            transform: rotate(60deg);
            width: 100px;
            height: 100px;
            margin: auto;
            transition: all 0.3s ease-in-out;
            visibility: hidden;
          }
          .project a:hover .more {
            visibility: visible;
            opacity: 0.9;
            transform: rotate(0);
            width: 100%;
            height: 100%;
          }
          .project a .more {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .project a .more img,
          .project a .more .text {
            position: relative;
          }
          .project a .more img {
            width: 20px;
            animation: move 1.2s infinite linear;
          }
          .project a .more .text {
            color: #fff;
            text-transform: uppercase;
            font-size: 13px;
            margin-bottom: 5px;
          }

          @keyframes move {
            0% {
              opacity: 0.8;
              transform: translateX(-10px);
            }
            25% {
              opacity: 1;
              transform: translateX(0);
            }
            50% {
              opacity: 0.8;
              transform: translateX(10px);
            }
            75% {
              opacity: 1;
              transform: translateX(0);
            }
            100% {
              opacity: 0.8;
              transform: translateX(-10px);
            }
          }
          @media (max-width: 950px) {
            .project,
            .project.first {
              height: 300px;
            }
            .project {
              padding: 10px 0 10px 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Project;
