import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.scss";
import Logo from "../Logo/Logo";

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <ul className={classes.ul}>
        <Logo />
        <div className={classes.left}>
          <NavItem url="/">Home</NavItem>
          <NavItem url="/about">About</NavItem>
          <NavItem url="/project">Project</NavItem>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
