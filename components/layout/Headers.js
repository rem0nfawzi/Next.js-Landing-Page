import Head from 'next/head';
const Headers = props => {
  return (
    <Head>
      <meta
        name='description'
        content='ANDA is a creative agency which provide all technology solutions for you.'
      />
      <title>ANDA | Creative Agency</title>
      <link rel='stylesheet' href='/static/css/global.css' />
    </Head>
  );
};
export default Headers;
