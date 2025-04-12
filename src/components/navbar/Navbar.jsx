import useStyles from './styles';
import LOGO from './../../assets/img/namava-logo.png';
import MAIL from './../../assets/img/namava-mail-icon.png';
import PROFILE from './../../assets/img/namava-profile.png';
import SEARCH from './../../assets/img/search1.png';
import SearchIcons from '../icons/SearchIcons';
import MailIcon from '../icons/MailIcon';
import NamavaIcon from '../icons/NamavaIcon';
const Navbar = () => {
  const styleClass = useStyles();

  return (
    <>
      <nav className={styleClass.nav}>
        <div className={styleClass.navbarContainer}>
          <div className={styleClass.navbarList}>
            <div className="items">
              <NamavaIcon/>
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
              <SearchIcons className={styleClass.navbarIcons} />
            </div>
            <div className="navbar-icons">
              <MailIcon/>
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
