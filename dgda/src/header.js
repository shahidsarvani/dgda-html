import './bootstrap.min.css';
import './mystyle.css';
import logo from './images/dgda_logo.svg';
import move_left_en from './move-left-en';

function Header() {
  return (
    <div className="header-wrap">

      <header className='header-app'>
            <div className="container diri_header_cont">
                <div className="header_inner">
                    <div className="row diri_header_row">
                        <div className="col-31 logo_col_1">
                            <div className="logo_diriyah">
                                <a href="#">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div class="header-menu-elements" onClick={move_left_en}>
                            <div className="col-61 head_separator_col">
                                <div className="head_separator"></div>
                            </div>
                            <div className="col-31 nav_col_1">
                                <nav className="navbar navbar-expand-sm navbar_dir bg-transparent">
                                    <div className="nav_cp_dp collapse navbar-collapse btn-10" id="collapsibleNavbar">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">DIRIYAH</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">WADI SAFAR</a>
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

export default Header;
