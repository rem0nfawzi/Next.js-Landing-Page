const Package = ({ title, advantages, price }) => {
  return (
    <div className='package second-bg'>
      <h1 className='title text-dark'>{title}</h1>
      <ul>
        {advantages.map((adv, index) => {
          return (
            <li className='text-dark' key={index}>
              {adv}
            </li>
          );
        })}
      </ul>
      <h1 className='price'>
        <span>$</span>
        {price}
      </h1>
      <button className='btn first'>join now</button>
      <style jsx>
        {`
          .package {
            flex-basis: 350px;
            text-align: center;
            padding: 50px;
            border-radius: 50px;
          }
          .package .title {
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(20, 28, 36, 0.26);
            margin-bottom: 20px;
          }
          .package ul {
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(20, 28, 36, 0.26);
            margin-bottom: 20px;
          }
          .package ul li {
            margin-bottom: 10px;
            text-transform: capitalize;
            font-size: 15px;
            font-weight: bold;
          }
          .package .price {
            font-size: 40px;
            margin-bottom: 20px;
          }
          .package .price span {
            font-size: 20px;
            vertical-align: top;
          }
          @media (max-width: 1287px) {
            .package {
              flex-basis: 320px;
            }
          }
          @media (max-width: 1230px) {
            .package {
              flex-basis: 300px;
            }
          }
          @media (max-width: 1140px) {
            .package {
              flex-basis: 280px;
            }
          }
          @media (max-width: 1080px) {
            .package {
              flex-basis: 270px;
            }
          }
          @media (max-width: 960px) {
            .package {
              width: 400px;
              margin-bottom: 20px;
            }
            .package:last-of-type {
              margin-bottom: 0;
            }
          }
          @media (max-width: 460px) {
            .package {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Package;
