import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Marquee.module.css';

const Marquee = () => {
  const { t } = useTranslation("global");
  const words = t("main.WordRevealLoop", { returnObjects: true });

  const wordList = Array.isArray(words) ? words : [];

  return (
    <div className={classes.Marquee}>
      <div className={classes.MarqueeContent}>
        {wordList.concat(wordList).map((word, index) => (
          <span key={index} className={classes.Word}>
            {word} <span className={classes.Separator}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
