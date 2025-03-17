import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from './HorizontalBody.module.css';
import img1 from '../../../assets/about_images/hs_1.jpg';
import img2 from '../../../assets/about_images/hs_2.jpg';
import img3 from '../../../assets/about_images/hs_3.jpg';
import img4 from '../../../assets/about_images/hs_4.jpg';
import img5 from '../../../assets/about_images/hs_5.jpg';

gsap.registerPlugin(ScrollTrigger);

const images = [img1, img2, img3, img4, img5];

const HorizontalBody = () => {
  const { t } = useTranslation('global');
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const tl = gsap.timeline();

  const addAnim = () => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    const totalScroll = container.scrollWidth - container.offsetWidth;

    tl.add(
      gsap.to(slider, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          id: 'HorizontalSlide',
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScroll}`
        }
      })
    );
    ScrollTrigger.refresh();
  };

  const removeAnim = () => {
    tl.kill(true);
  };

  useEffect(() => {
    addAnim();
    return removeAnim;
  }, []);

  return (
    <div className={classes.HorizontalBody}>
      <div ref={containerRef} className={classes.HorizontalContainer}>
        <div ref={sliderRef} className={classes.HorizontalSlider}>
          {t('horizontalBody.sections', { returnObjects: true }).map((section, index) => (
            <div key={index} className={classes.SecctionContainer}>
              <div className={classes.ImgContainer}>
                <img src={images[index]} alt={`Section ${index + 1}`} />
              </div>
              <div className={classes.TextContainer}>
                {section.text.map((text, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBody;
