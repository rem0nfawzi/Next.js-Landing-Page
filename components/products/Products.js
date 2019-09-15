import Product from './Product';

const Products = () => {
  const images1 = [
    'static/images/p2.png',
    'static/images/p3.png',
    'static/images/p4.png'
  ];
  const images2 = [
    'static/images/p4.png',
    'static/images/p.png',
    'static/images/p2.png'
  ];
  return (
    <section id='products'>
      <div className='container'>
        <h1 className='main-title'>ANzA Products</h1>
        <p className='main-slogan'>
          we are innovating new products for a better life
        </p>
        <div className='row'>
          <Product
            images={images1}
            title='first product'
            excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolores nostrum accusantium, blanditiis temporibus harum mollitia doloribus deleniti quam quis obcaecati quae repellendus inventore dolor quaerat, ab magni sed debitis.'
          />
          <Product
            images={images2}
            title='second product'
            excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolores nostrum accusantium, blanditiis temporibus harum mollitia doloribus deleniti quam quis obcaecati quae repellendus inventore dolor quaerat, ab magni sed debitis.'
          />
        </div>
      </div>
      <style jsx>
        {`
          #products {
            background-color: #f7f7f7;
          }
        `}
      </style>
    </section>
  );
};

export default Products;
