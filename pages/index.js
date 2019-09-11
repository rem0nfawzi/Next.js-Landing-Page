import Header from '../components/home/Header';
import Layout from '../components/layout/Layout';
import About from '../components/about/About';
import Statistics from '../components/about/Statistics';
import Works from '../components/works/Works';
import Testimonials from '../components/testimonials/Testimonials';
import Services from '../components/services/Services';
import Products from '../components/products/Products';
import Packages from '../components/packages/Packages';
import Blog from '../components/blog/Blog';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Statistics />
      <Works />
      <Testimonials />
      <Services />
      <Products />
      <Packages />
      <Blog />
      <Contact />
    </Layout>
  );
};

export default Home;
