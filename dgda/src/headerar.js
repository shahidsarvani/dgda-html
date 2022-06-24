import './bootstrap.min.css';
import './mystyle.css';
import logo from './images/diriyah-ar-logo.svg';
//import move_left_en from './move-left-en';

function Headerar() {
  return (
    <div className="header-wrap">

        <header id="header">
            <div className="container diri_header_cont">
                <div className="header_inner">
                    <div className="row diri_header_row">
                        <div className="col-31 logo_col_1">
                            <div className="load_log_col">
                                <div className="logo_diriyah">
                                    <a href="#">
                                        <img src={logo} alt="logo" />
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
        </header>

    </div>
  );
}

export default Headerar;
