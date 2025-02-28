import Box from "../../../components/Box/Box";
import classes from "./SolutionComponent.module.css";

const SolutionComponent = ({number, title, sub1, sub2}) => {

  return (
    <div className={classes.Solution}>
      <div className={classes.Number}>{number}</div>
      <Box width={250} height={300} className={classes.Box}>
        <h1>{title}</h1>
        <h2>{sub1}</h2>
        <h2>{sub2}</h2>
      </Box>
    </div>

  )
}
export default SolutionComponent;