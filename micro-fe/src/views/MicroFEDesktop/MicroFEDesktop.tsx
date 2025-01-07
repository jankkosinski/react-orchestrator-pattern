import React from 'react';
import { LangButton, WelcomeBox } from '../../components';
import styles from './microfedesktop.module.scss';

export const MicroFEDesktop = () => {
  return (
    <div className={styles.wrapper}>
      <WelcomeBox />
      <LangButton />
    </div>
  );
};
