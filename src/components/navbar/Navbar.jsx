import useStyles from './styles';
import LOGO from './../../assets/img/namava-logo.png';
import MAIL from './../../assets/img/namava-mail-icon.png';
import PROFILE from './../../assets/img/namava-profile.png';
import SEARCH from './../../assets/img/search1.png';
const Navbar = () => {
  const styleClass = useStyles();

  return (
    <>
      <nav className={styleClass.nav}>
        <div className={styleClass.navbarContainer}>
          <div className={styleClass.navbarList}>
            <div className="items">
              <img className={styleClass.logo} src={LOGO} alt="نماوا" />
            </div>
            <div className={styleClass.items}>خانه</div>
            <div className={styleClass.items}>فیلم ها</div>
            <div className={styleClass.items}>سریال ها</div>
            <div className={styleClass.items}>دسته بندی</div>
            <div className={styleClass.items}>تازه ها</div>
            <div className={styleClass.items}>کودکان</div>
            <div className={styleClass.items}>پردیس نماوا</div>
            <div className={styleClass.items}>نماوامگ</div>
          </div>
          <div className={styleClass.icons}>
            <div className="navbar-icons">
              <img
                className={styleClass.navbarIcons}
                src={SEARCH}
                alt="جست و جو"
              />
            </div>
            <div className="navbar-icons">
              <img
                className={styleClass.navbarIcons}
                src={MAIL}
                alt="نامه ها"
              />
            </div>
            <div className="navbar-icons">
              <img
                className={styleClass.navbarIcons}
                src={PROFILE}
                alt="پروفایل"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
