import Package from './Package';
const Packages = () => {
  const advantages = [
    'website',
    'mobile app',
    'social media designs',
    'customer support',
    'free host'
  ];
  return (
    <section
      id='packages'
      className='dark-bg overlay-bg'
      style={{ backgroundImage: 'url(/static/images/home-bg.png)' }}
    >
      <div className='container'>
        <h1 className='main-title '>our packages</h1>
        <p className='main-slogan'>you can ask for a custom package</p>
        <div className='row'>
          <Package advantages={advantages} title='basic plan' price='500' />
          <Package advantages={advantages} title='premium plan' price='700' />
          <Package advantages={advantages} title='regular plan' price='600' />
        </div>
      </div>
      <style jsx>
        {`
          #packages {
            position: relative;
            background-size: cover;
            background-position: center;
          }
          #packages .container {
            position: relative;
            z-index: 2;
          }
          #packages .main-title {
            color: #fff;
          }
          #packages .main-slogan {
            color: #ccc;
          }
          #packages .row {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          @media (max-width: 960px) {
            #packages .row {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Packages;
