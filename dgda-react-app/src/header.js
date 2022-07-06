import './bootstrap.min.css';
import './mystyle.css';
import logo from './images/dgda_logo.svg';
import move_left_en from './move-left-en';
import logo_ar from './images/diriyah-ar-logo.svg';
import diriyah_icon from './images/icons/diriyah-icon.svg';
import wadi_icon from './images/icons/wadi-safar-icon.svg';
import move_main_left from './move-main-left';
import './customjqjs';
import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            lang: '',
        }
    }
    setLang(lang) {
        this.props.onSetLang(lang);
    }
    render() {
        return (
            <div className="header-wrap">

            <header className='header-app'>
                    <div className="container diri_header_cont">
                        <div className="header_inner">
                            <div className="row diri_header_row">
                                <div className="col-31 logo_col_1">
                                    <div className="load_log_col">
                                        <div className="logo_diriyah">
                                            <a href="#">
                                                <img className="ar_logo" src={logo_ar} alt="logo" />
                                                <img src={logo} alt="logo" />
                                            </a>
                                        </div>
                                        <div className="lang-switcher">
                                            <div className="lang_items">
                                                <a className="lang_ar_item" href="#" onClick={move_main_left}>عربي</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-menu-elements" onClick={move_left_en}>
                                    <div className="col-61 head_separator_col">
                                        <div className="head_separator"></div>
                                    </div>
                                    <div className="col-31 nav_col_1">
                                        <nav className="navbar navbar-expand-sm navbar_dir bg-transparent">
                                            <div className="nav_cp_dp collapse navbar-collapse btn-10" id="collapsibleNavbar">
                                            <ul className="navbar-nav">
                                                    <li className="nav-item nav-item-en1">
                                                        <a className="nav-link nav-link-en1 active" href="#">
                                                            <img src={diriyah_icon} alt="diriyah"/>
                                                            <span>DIRIYAH</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item nav-item-en2">
                                                        <a className="nav-link nav-link-en2" href="#">
                                                            <img src={wadi_icon} alt="wadi-safar"/>
                                                            <span>WADI SAFAR</span>
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
}










// function Header() {
//   return (
//     <div className="header-wrap">

//       <header className='header-app'>
//             <div className="container diri_header_cont">
//                 <div className="header_inner">
//                     <div className="row diri_header_row">
//                         <div className="col-31 logo_col_1">
//                             <div className="load_log_col">
//                                 <div className="logo_diriyah">
//                                     <a href="#">
//                                         <img className="ar_logo" src={logo_ar} alt="logo" />
//                                         <img src={logo} alt="logo" />
//                                     </a>
//                                 </div>
//                                 <div className="lang-switcher">
//                                     <div className="lang_items">
//                                         <a className="lang_ar_item" href="#" onClick={move_main_left}>عربي</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="header-menu-elements" onClick={move_left_en}>
//                             <div className="col-61 head_separator_col">
//                                 <div className="head_separator"></div>
//                             </div>
//                             <div className="col-31 nav_col_1">
//                                 <nav className="navbar navbar-expand-sm navbar_dir bg-transparent">
//                                     <div className="nav_cp_dp collapse navbar-collapse btn-10" id="collapsibleNavbar">
//                                     <ul className="navbar-nav">
//                                             <li className="nav-item nav-item-en1">
//                                                 <a className="nav-link nav-link-en1 active" href="#">
//                                                     <img src={diriyah_icon} alt="diriyah"/>
//                                                     <span>DIRIYAH</span>
//                                                 </a>
//                                             </li>
//                                             <li className="nav-item nav-item-en2">
//                                                 <a className="nav-link nav-link-en2" href="#">
//                                                     <img src={wadi_icon} alt="wadi-safar"/>
//                                                     <span>WADI SAFAR</span>
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>

//     </div>
//   );
// }

export default Header;
