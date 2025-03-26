// Marquee.jsx
import React from 'react'
import classes from './Marquee.module.css'

/**
 * Marquee component for seamless horizontal scrolling animation.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to animate inside the marquee.
 *
 * @example
 * <Marquee>
 *   <span>Item 1</span>
 *   <span>Item 2</span>
 * </Marquee>
 */
const Marquee = ({ children }) => {
  return (
    <div className={classes.Marquee}>
      <div className={classes.MarqueeTrack}>
        <div className={classes.MarqueeContent}>
          {children}
        </div>
        <div className={classes.MarqueeContent}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Marquee
