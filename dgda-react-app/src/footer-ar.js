import './bootstrap.min.css';
import './mystyle.css';
// import Model from './images/model.svg';
// import Videowall from './images/play.svg';
// import Lights from './images/lighting.svg';
// import English from './images/english-letter.svg';
// import move_main_right from './move-main-right';
import move_showmodelactive from './move-showmodelactive';
import move_videowallsactive from './move-videowallsactive';
import move_lightsactive from './move-lightsactive';
import lights_icon from './images/icons/ftr-lights-icon.svg';
import vwalls_nonactive_icon from './images/icons/ftr-vwalls-icon.svg';
import vwalls_active_icon from './images/icons/ftr-vwalls-icon.svg';
import model_icon from './images/icons/ftr-model-icon.svg';
import home_nonactive_icon from './images/icons/ftr-home-icon.svg';
import home_active_icon from './images/icons/home-selected-icon.svg';
import back_icon from './images/icons/backward-light-icon.svg';

function Footerar() {
  return (
    <div className="dgda-footer">

        {/* <div id="footer_ar" className="container dg_ft_cont_ar">
            <div className="row dg_ft_row">
                <div className="col-12 dg_ft_col">
                    <div className="dg_ft_nav">
                        <ul className="dg_ft_nav_list">
                            <li className="dg_ft_nav_item dg_ft_nav_item1 active">
                                <a href="#" onClick={move_showmodelactive} data-fromdir="left">
                                    <div className="dg_ft_nav_img">
                                        <img src={Model} alt="Model"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>المجسم</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="dg_ft_nav_item dg_ft_nav_item2">
                                <a href="#" onClick={move_videowallsactive} data-fromdir="right">
                                    <div className="dg_ft_nav_img">
                                        <img src={Videowall} alt="VIDEO WALLS"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>الشاشات الجدارية</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="dg_ft_nav_item dg_ft_nav_item3">
                                <a href="#" onClick={move_lightsactive} data-fromdir="right">
                                    <div className="dg_ft_nav_img">
                                        <img src={Lights} alt="LIGHTS"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>الإضاءات</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="dg_ft_nav_item dg_ft_nav_item4 dg_ft_nav_link_ar">
                                <a href="#" onClick={move_main_right}>
                                    <div className="dg_ft_nav_img dg_ft_nav_img_ar">
                                        <img src={English} alt="English"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>ENGLISH</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> */}

        <div id="footer_ar" className="container dg_ft_cont_ar">
            <div className="row dg_ft_row">
                <div className="col-12 dg_ft_col">
                    <div className="dg_ft_nav">
                        <div className="dg_ft_nav_titles">
                            <div className="dg_ft_navtitle_link">
                                <h3 className="page_title title_show_control">لوحة التحكم بالعرض</h3>
                                <h3 className="page_title title_night_scene">مناطق المجسم</h3>
                                <h3 className="page_title title_basement_floors">الطوابق السفلية</h3>
                                <h3 className="page_title title_lights">الإضاءة</h3>
                                <h3 className="page_title title_vwalls">الشاشات</h3>
                            </div>
                        </div>
                        <ul className="dg_ft_nav_list">
                            <li className="dg_ft_nav_item dg_ft_nav_item1 dg_ft_ar_back_item dg_ft_nav_item1">
                                <a href="#" id="bring_it_back_ar" onClick="move_step_back(this)" data-fromDir="left">
                                    <div className="dg_ft_nav_img">
                                        <img src={back_icon} alt="back"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>الرجوع</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="dg_ft_nav_item dg_ft_nav_item2 ft_main_page">
                                <a id="main_home_ar_to" href="#" onClick="move_homeactive_ar(this)" data-fromDir="right">
                                    <div className="dg_ft_nav_img">
                                        <img className="non_active_img" src={home_nonactive_icon} alt="main-page"/>
                                        <img className="active_img" src={home_active_icon} alt="main-page"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>الصفحة الرئيسية</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="dg_ft_nav_item dg_ft_nav_item3 active new_home_ar">
                                <a href="#" onClick={move_showmodelactive} data-fromDir="left">
                                    <div className="dg_ft_nav_img">
                                        <img src={model_icon} alt="Model"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>المجسم</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="dg_ft_nav_item dg_ft_nav_item4 ft_videowalls">
                                <a id="dg_ft_shahaat" href="#" onClick={move_videowallsactive} data-fromDir="right">
                                    <div className="dg_ft_nav_img">
                                        <img className="non_active_img" src={vwalls_nonactive_icon} alt="VIDEO WALLS"/>
                                        <img className="active_img" src={vwalls_active_icon} alt="VIDEO WALLS"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>الشاشات</h3>
                                    </div>
                                </a>
                            </li>
                            <li className="dg_ft_nav_item dg_ft_nav_item3">
                                <a id="click_ar_alzia" href="#" onClick={move_lightsactive} data-fromDir="right">
                                    <div className="dg_ft_nav_img">
                                        <img src={lights_icon} alt="LIGHTS"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>الإضاءة</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Footerar;
