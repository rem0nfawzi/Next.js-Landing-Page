const Info = ({ icon, text }) => {
  return (
    <div className='part'>
      <div className='icon'>
        <img src={icon} alt='whatsapp' />
      </div>
      <p className='text'>{text}</p>
      <style jsx>
        {`
          .part {
            flex-basis: 33.333%;
            padding: 40px;
            text-align: center;
          }
          .part .icon {
            position: relative;
            margin-bottom: 15px;
          }
          .part .icon img {
            width: 40px;
          }
          .part .text {
            font-weight: 900;
            font-size: 14px;
            color: #000;
          }
          @media (max-width: 830px) {
            .part:nth-of-type(2) {
              border-top: 1px solid rgb(0, 0, 0, 0.2);
              border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Info;
