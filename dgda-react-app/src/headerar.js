import './bootstrap.min.css';
import './mystyle.css';
import ar_logo from './images/diriyah-ar-logo.svg';
import eng_logo from './images/dgda_logo.svg';
//import move_left_en from './move-left-en';
import move_main_right from './move-main-right';

function Headerar() {
  return (
    <div className="header-wrap">

        {/* <header id="header">
            <div className="container diri_header_cont">
                <div className="header_inner">
                    <div className="row diri_header_row">
                        <div className="col-31 logo_col_1">
                            <div className="load_log_col">
                                <div className="logo_diriyah">
                                    <a href="#">
                                        <img src={ar_logo} alt="logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="header-menu-elements">
                            <div className="col-61 head_separator_col">
                                <div className="head_separator"></div>
                            </div>
                            <div className="col-31 nav_col_1">
                                <nav className="navbar navbar-expand-sm navbar_dir bg-transparent">
                                    <div className="nav_cp_dp collapse navbar-collapse btn-10" id="collapsibleNavbar">
                                        <ul className="navbar-nav">
                                            <li className="nav-item nav-item-ar1">
                                                <a className="nav-link nav-link-ar1 active" href="#">الدرعية</a>
                                            </li>
                                            <li className="nav-item nav-item-ar2">
                                                <a className="nav-link nav-link-ar2" href="#">وادي صفر</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header> */}






        <header id="header">
            <div className="container diri_header_cont">
                <div className="header_inner">
                    <div className="row diri_header_row">
                        <div className="col-31 logo_col_1">
                            <div className="load_log_col">
                                <div className="logo_diriyah">
                                    <a href="#">
                                        <img className="ar_logo" src={ar_logo} alt="logo" />
                                        <img className="eng_logo" src={eng_logo} alt="logo" />
                                    </a>
                                </div>
                                <div className="lang-switcher">
                                    <div className="lang_items">
                                        <a className="lang_en_item" href="#" onClick={move_main_right}>ENGLISH</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-menu-elements">
                            <div className="col-61 head_separator_col">
                                <div className="head_separator"></div>
                            </div>
                            <div className="col-31 nav_col_1">
                                <nav className="navbar navbar-expand-sm navbar_dir bg-transparent">
                                    <div className="nav_cp_dp collapse navbar-collapse btn-10" id="collapsibleNavbar">
                                        <ul className="navbar-nav">
                                            <li className="nav-item nav-item-ar1">
                                                <a className="nav-link nav-link-ar1 active" href="#">
                                                    <img src="./assets/images/icons/diriyah-icon.svg" alt="diriyah"/>
                                                    <span>الدرعية</span>
                                                </a>
                                            </li>
                                            <li className="nav-item nav-item-ar2">
                                                <a className="nav-link nav-link-ar2" href="#">
                                                    <img src="./assets/images/icons/wadi-safar-icon.svg" alt="wadi-safar"/>
                                                    <span>وادي صفر</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>






    </div>
  );
}

export default Headerar;
