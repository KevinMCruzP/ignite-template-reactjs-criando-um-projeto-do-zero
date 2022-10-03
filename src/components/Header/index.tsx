/* eslint-disable no-use-before-define */
import Link from 'next/link';
import React from 'react';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a href="/">
          <img src="/images/Logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
};

export default Header;
