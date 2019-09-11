const Statistic = ({ icon, name, number }) => {
  return (
    <div className='sta'>
      <div className='name'>
        <img src={icon} alt={name} />
        <p>{name}</p>
      </div>
      <h1 className='number text-second'>+ {number}</h1>
      <style>
        {`
        .sta {
            flex-basis: 50%;
            padding: 80px;
            position: relative;
            z-index: 1;
          }
           .sta .name {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
          }
           .sta .name img {
            width: 40px;
          }
           .sta .name p {
            color: #fff;
            margin-left: 20px;
            text-transform: uppercase;
            font-size: 18px;
          }
           .sta .number {
            text-align: center;
            font-size: 40px;
          }
          @media (max-width: 660px){
            .sta{
              padding: 50px;
              text-align: center;
            }
          }
              `}
      </style>
    </div>
  );
};

export default Statistic;
