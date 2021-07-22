import { NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Bacdrop"
import classes from "./Drawer.module.scss"
const Drawer = ({ open, closeDrawer }) => {
  const drawerClasses = [classes.content, open ? classes.open : classes.close];

  return (
    <div className={classes.Drawer}>
      <Backdrop show={open} click={closeDrawer} />
      <div className={drawerClasses.join(" ")}>
        <ul className={classes.ul}>
          <li>
            <NavLink to="/details">Товары</NavLink>
          </li>
          <li>
            <NavLink to="/about">О нас</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
