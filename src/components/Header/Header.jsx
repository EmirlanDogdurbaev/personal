import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
import DrawerOpen from "./Drawer/DrawerOpen/DrawerOpen";
import Logo from "./Logo/Logo";

const Header = ({ openDrawer }) => {
  return (
    <div className={classes.header}>
      <DrawerOpen click={openDrawer} />
      <div className={classes.logo}>
        <Logo />
      </div>
      <Nav />
    </div>
  );
};

export default Header;
