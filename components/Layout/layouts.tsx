import React from 'react';

import { Header } from './components/header/header';
import { Footer } from './components/footer';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
