const ContactForm = () => {
  return (
    <form className='dark-bg'>
      <h1>send a message</h1>
      <div className='two-inputs'>
        <div className='input-wrap two-inputs'>
          <input type='text' placeholder='Name*' className='capt' />
        </div>
        <div className='input-wrap'>
          <input type='text' placeholder='Email*' />
        </div>
      </div>
      <div className='input-wrap'>
        <textarea placeholder='Message*'></textarea>
      </div>
      <div className='submit-wrap'>
        <input type='submit' value='send message' className='btn second' />
      </div>
      <style jsx>
        {`
          form {
            flex-basis: 60%;
            padding: 80px 100px;
            border-bottom-right-radius: 50px;
            border-bottom-left-radius: 50px;
          }
          form h1 {
            color: #fff;
            margin-bottom: 40px;
          }
          @media (max-width: 900px) {
            form {
              padding: 50px;
            }
          }
          @media (max-width: 700px) {
            form {
              padding: 40px;
            }
          }
        `}
      </style>
    </form>
  );
};

export default ContactForm;
