import Box from '../Box/Box';
import classes from "./Logo.module.css";

const Logo = ({alternative = false}) =>{
  

  return (
    <Box 
    className={ ` ${classes.Container} ${alternative  ? classes.Alternative : ''}`}
    width='300' 
    height='115' 
    square 
    transparent>
      <div className={classes.Main}>
        <div className={classes.Icon}></div>
        <span className={classes.Title}>eutecnia</span>
      </div>
      <span className={classes.SubTitle}>El arte de hacer las cosas bien.</span>
    </Box>
  )
}

export default Logo; 