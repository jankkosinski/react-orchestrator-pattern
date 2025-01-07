import React from 'react';
import { useTranslation } from 'react-i18next';
import { EN_LANG, PL_LANG } from '../../consts';
import { changeLanguage } from '../../utils';
import styles from './langbutton.module.scss';

export const LangButton = () => {
  const { i18n, t } = useTranslation();
  return (
    <div
      className={styles.container}
      onClick={() =>
        changeLanguage(i18n.language == EN_LANG ? PL_LANG : EN_LANG)
      }
    >
      {t('change-lang')}
    </div>
  );
};
