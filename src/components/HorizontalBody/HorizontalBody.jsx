import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classes from './HorizontalBody.module.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * HorizontalBody - A reusable horizontal scroll component
 * 
 * @param {Object} props
 * @param {React.ReactNode[]} props.children - The elements to be displayed in the horizontal scroll
 * 
 * @example
 * <HorizontalBody>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </HorizontalBody>
 */
const HorizontalBody = ({ children }) => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    const totalScroll = slider.scrollWidth - container.offsetWidth;

    tl.current.add(
      gsap.to(slider, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScroll}`,
        },
      })
    );

    return () => {
      tl.current.kill();
    };
  }, []);

  return (
    <div className={classes.HorizontalBody}>
      <div ref={containerRef} className={classes.HorizontalContainer}>
        <div ref={sliderRef} className={classes.HorizontalSlider}>
          {children.map((child, index) => (
            <div key={index} className={classes.SectionContainer}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBody;
