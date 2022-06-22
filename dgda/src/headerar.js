import './bootstrap.min.css';
import './mystyle.css';
import logo from './images/diriyah-ar-logo.svg';
//import move_left_en from './move-left-en';

function Headerar() {
  return (
    <div className="header-wrap">

        <header id="header">
            <div class="container diri_header_cont">
                <div class="header_inner">
                    <div class="row diri_header_row">
                        <div class="col-31 logo_col_1">
                            <div class="load_log_col">
                                <div class="logo_diriyah">
                                    <a href="javascript:void(0)">
                                        <img src={logo} alt="logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="header-menu-elements">
                            <div class="col-61 head_separator_col">
                                <div class="head_separator"></div>
                            </div>
                            <div class="col-31 nav_col_1">
                                <nav class="navbar navbar-expand-sm navbar_dir bg-transparent">
                                    <div class="nav_cp_dp collapse navbar-collapse btn-10" id="collapsibleNavbar">
                                        <ul class="navbar-nav">
                                            <li class="nav-item nav-item-ar1">
                                                <a class="nav-link nav-link-ar1 active" href="#">الدرعية</a>
                                            </li>
                                            <li class="nav-item nav-item-ar2">
                                                <a class="nav-link nav-link-ar2" href="#">وادي صفر</a>
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
