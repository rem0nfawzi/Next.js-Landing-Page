import Service from './Service';
const Services = () => {
  return (
    <section id='services'>
      <div className='container'>
        <h1 className='main-title'>services we provide</h1>
        <p className='main-slogan'>
          high quality services with the best support
        </p>
        <div className='row'>
          <Service
            icon='/static/images/ui-ux.svg'
            title='UI/UX development'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus'
          />
          <Service
            icon='/static/images/ui-ux.svg'
            title='UI/UX development'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus'
          />
          <Service
            icon='/static/images/ui-ux.svg'
            title='UI/UX development'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus'
          />
          <Service
            icon='/static/images/ui-ux.svg'
            title='UI/UX development'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus'
          />
          <Service
            icon='/static/images/ui-ux.svg'
            title='UI/UX development'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus'
          />
          <Service
            icon='/static/images/ui-ux.svg'
            title='UI/UX development'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae sit
            ratione pariatur praesentium nulla ea voluptatibus'
          />
        </div>
      </div>
      <style jsx>
        {`
          #services .row {
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
    </section>
  );
};

export default Services;
