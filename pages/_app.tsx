// pages/_app.js
import React from 'react';
import '../styles.scss';
import '../src/scss/obelisco.scss';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
