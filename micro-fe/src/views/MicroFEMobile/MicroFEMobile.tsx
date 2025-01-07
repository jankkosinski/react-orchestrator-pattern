import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './microfemobile.module.scss';

export const MicroFEMobile = () => {
  const { t } = useTranslation();
  return <div className={styles.wrapper}>{t('welcome')}</div>;
};
