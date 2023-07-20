import React from 'react';

import { Header } from './components/header/header';
import { Footer } from './components/footer';
import FloatButton from '../FloatButton';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <div className="container">
        <FloatButton />
      </div>
      <Footer />
    </div>
  );
};
