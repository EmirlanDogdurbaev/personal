import classes from "./Home.module.scss";
import img1 from "../../../image/img1.png";
import inst from "../../../image/inst.svg";
import git from "../../../image/git.svg";
import gmail from "../../../image/gmail.svg";
import link from "../../../image/linkedin.svg";
import telegram from "../../../image/telegram.svg";
import what from "../../../image/what.svg";
const Home = () => {
  return (
    <main className={classes.home}>
      <section>
        <div className={classes.first__cont}>
          <p className={classes.p1}>Hi my name is Emirlan.</p>
          <div>
            <p className={classes.p2}>I am 17 years old .</p>
            <p className={classes.p3}> This is probably all.</p>
          </div>
        </div>

        <div className={classes.second__cont}>
          <div className={classes.second__mini__cont}>
            <img src={img1} alt="loading.." />
          </div>
        </div>
      </section>
      <footer>
        <div className={classes.line}></div>
        <div className={classes.img__cont}>
          <a href="https://www.instagram.com/" rel="noreferrer">
            <img src={inst} alt="loading" />
          </a>
          <a href="https://github.com/EmirlanDogdurbaev" rel="noreferrer">
            <img src={git} alt="loading" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" rel="noreferrer">
            <img src={gmail} alt="loading" />
          </a>
          <a
            href="https://www.linkedin.com/in/emirlan-dogdurbaev-b3279920a/"
            rel="noreferrer"
          >
            <img src={link} alt="loading" />
          </a>
          <a href="https://t.me/Emirlan04" rel="noreferrer">
            <img src={telegram} alt="loading" />
          </a>
          <a href="https://wa.me/qr/S4W73XOPP2D5J1" rel="noreferrer">
            <img src={what} alt="loading" />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
