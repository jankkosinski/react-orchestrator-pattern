import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './welcomebox.module.scss';

export const WelcomeBox = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.animatedText}>{t('welcome')}</div>
    </div>
  );
};
