import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './TitleMarquee.module.css';
import Marquee from '../../../../components/Marquee/Marquee';

/**
 * TitleMarquee component for displaying a scrolling marquee of words.
 * 
 * @returns {JSX.Element} The TitleMarquee component.
 */
const TitleMarquee = () => {
  const { t } = useTranslation("global");
  const words = t("main.WordRevealLoop", { returnObjects: true });

  const wordList = Array.isArray(words) ? words : [];

  return (
    <Marquee>
      {wordList.map((word, index) => (
        <span key={index} className={classes.Word}>
          {word} <span className={classes.Separator}>•</span>
        </span>
      ))}
    </Marquee>
  );
};

export default TitleMarquee;
