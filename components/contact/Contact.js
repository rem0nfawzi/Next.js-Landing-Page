import Info from './Info';
import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <section id='contact'>
      <div className='container'>
        <h1 className='main-title'>contact us</h1>
        <p className='main-slogan'>fee free to get in touch with us</p>
        <div className='row'>
          <div className='info second-bg'>
            <Info icon='static/images/whatsapp.svg' text='+02 012 0669 3375' />
            <Info
              icon='static/images/placeholder.svg'
              text='29 M Qodus St. Shoubra, Cairo, Egypt'
            />
            <Info icon='static/images/email.svg' text='remonfawzi0@gmail.com' />
          </div>

          <ContactForm />
        </div>
      </div>
      <style jsx>
        {`
          #contact .row {
            display: flex;
            flex-direction: column;
          }
          #contact .row .info {
            display: flex;
            border-top-right-radius: 50px;
            border-top-left-radius: 50px;
          }
          @media (max-width: 830px) {
            #contact .row .info {
              flex-direction: column;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
