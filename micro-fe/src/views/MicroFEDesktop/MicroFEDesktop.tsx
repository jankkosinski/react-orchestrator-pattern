import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './microfedesktop.module.scss';

export const MicroFEDesktop = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      {t('welcome')}
    </div>
  );
};
