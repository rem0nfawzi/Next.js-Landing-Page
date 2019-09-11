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
            thumbnail='static/images/p.png'
            excerpt='lorem'
          />
          <Post
            title='post title'
            thumbnail='static/images/p.png'
            excerpt='lorem'
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
