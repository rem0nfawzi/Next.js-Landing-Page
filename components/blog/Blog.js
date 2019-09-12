import Post from './Post';

const Blog = () => {
  return (
    <section id='blog'>
      <div className='container'>
        <h1 className='main-title'>our latest news</h1>
        <p className='main-slogan'>
          we always make you up to date with our news
        </p>
        <div className='posts'>
          <Post
            title='post title'
            thumbnail='static/images/p3.png'
            excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolores nostrum accusantium'
          />
          <Post
            title='post title'
            thumbnail='static/images/p4.png'
            excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolores nostrum accusantium'
          />
        </div>
        <div className='btn-wrap'>
          <button className='btn first'>load more</button>
        </div>
      </div>
      <style jsx>
        {`
          #blog {
            background-color: #f7f7f7;
          }
          #blog .posts {
            display: flex;
          }
          @media (max-width: 800px) {
            #blog .posts {
              flex-direction: column;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Blog;
