const Comment = () => {
  return (
    <div className='comment-wrap'>
      <div className='comment'>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <h4>Jhon doe</h4>
        <div
          className='user-img'
          style={{ backgroundImage: `url('/static/images/user.png')` }}
        />
      </div>
      <style jsx>
        {`
          .comment-wrap {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 40px;
            outline: 0;
          }
          .comment-wrap .comment {
            padding: 60px 40px 40px 40px;
            background-color: #fff;
            border-radius: 10px;
            text-align: center;
            position: relative;
            cursor: grab;
          }
          .comment-wrap .comment h4 {
            font-size: 16px;
          }
          .comment-wrap .comment p {
            margin-bottom: 20px;
            font-size: 15px;
          }
          .comment p:before {
            content: '"';
            color: #000;
            font-size: 25px;
            margin-right: 10px;
            line-height: 0;
            vertical-align: middle;
          }
          .comment p:after {
            content: '"';
            color: #000;
            font-size: 25px;
            margin-left: 10px;
            line-height: 0;
            vertical-align: middle;
          }
          .comment-wrap .comment .user-img {
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            top: -40px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-size: cover;
            background-position: center;
            border: 4px solid #fff;
          }
          @media (max-width: 950px) {
            .comment-wrap {
              padding-left: 0;
              padding-right: 0;
              margin-left: 20px;
              margin-right: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Comment;
