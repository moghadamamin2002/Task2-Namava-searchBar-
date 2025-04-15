import useStyles from './styles';
import SearchIcon from '../icons/SearchIcons';
import MailIcon from '../icons/MailIcon';
import LogoNamava from '../icons/NamavaIcon';
import PROFILE from './../../assets/img/namava-profile.png';

const Navbar = () => {
  const styleClass = useStyles();

  return (
    <>
      <nav className={styleClass.nav}>
        <div className={styleClass.navbarContainer}>
          <div className={styleClass.navbarList}>
            <div className="items">
              <LogoNamava className={styleClass.logo} />
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
              <SearchIcon className={styleClass.navbarIcons} alt="جست و جو" />
            </div>
            <div className="navbar-icons">
              <MailIcon className={styleClass.navbarIcons} alt="نامه ها" />
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
