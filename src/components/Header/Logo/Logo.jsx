import logo from "../../../image/logo.svg"
import classes from "./Logo.module.scss"
const Logo = () => {
  return ( 
    <div className={classes.logo}>
      <img src={logo} alt="loading.." />
    </div>
   );
}
 
export default Logo;