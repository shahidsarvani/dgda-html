import './bootstrap.min.css';
import './mystyle.css';
import move_showmodelactive from './move-showmodelactive';
import move_homeactive_en from './move-homeactive-en';
import videowallsactive from './move-videowallsactive';
import move_lightsactive from './move-lightsactive';
import move_step_back from './move-step-back';
import lights_icon from './images/icons/ftr-lights-icon.svg';
import vwalls_icon from './images/icons/ftr-vwalls-icon.svg';
import model_icon from './images/icons/ftr-model-icon.svg';
import home_icon from './images/icons/ftr-home-icon.svg';
import back_icon from './images/icons/backward-light-icon.svg';
import './customjqjs';

function Footer() {
  return (
    <div className="dgda-footer dg_ft_cont_en">

        <div className="container dg_ft_cont">
                <div className="row dg_ft_row">
                    <div className="col-12 dg_ft_col">
                            <div class="dg_ft_nav">
                            <div class="dg_ft_nav_titles">
                                <div class="dg_ft_navtitle_link">
                                    <h3 class="page_title title_show_control">SHOW CONTROLS</h3>
                                    <h3 class="page_title title_night_scene">MODEL DISTRICTS</h3>
                                    <h3 class="page_title title_basement_floors">BASEMENT FLOORS</h3>
                                    <h3 class="page_title title_lights">LIGHTS</h3>
                                    <h3 class="page_title title_vwalls">VIDEO WALLS</h3>
                                </div>
                            </div>
                            <ul class="dg_ft_nav_list">
                                <li class="dg_ft_nav_item dg_ft_nav_item1">
                                    <a href="#" id="bring_it_back" onClick={move_step_back} data-fromDir="left">
                                        <div class="dg_ft_nav_img">
                                            <img src={back_icon} alt="back"/>
                                        </div>
                                        <div class="dg_ft_nav_link">
                                            <h3>BACK</h3>
                                        </div>
                                    </a>
                                </li>
                                <li class="dg_ft_nav_item dg_ft_nav_item2 ft_main_page">
                                    <a href="#" onClick={move_homeactive_en} data-fromDir="right">
                                        <div class="dg_ft_nav_img">
                                            <img src={home_icon} alt="main-page"/>
                                        </div>
                                        <div class="dg_ft_nav_link">
                                            <h3>MAIN PAGE</h3>
                                        </div>
                                    </a>
                                </li>
                                <li class="dg_ft_nav_item dg_ft_nav_item3 ft_model">
                                    <a href="#" onClick={move_showmodelactive} data-fromDir="left">
                                        <div class="dg_ft_nav_img">
                                            <img src={model_icon} alt="Model"/>
                                        </div>
                                        <div class="dg_ft_nav_link">
                                            <h3>MODEL</h3>
                                        </div>
                                    </a>
                                </li>
                                <li class="dg_ft_nav_item dg_ft_nav_item4 ft_videowalls">
                                    <a href="#" onClick={videowallsactive} data-fromDir="right">
                                        <div class="dg_ft_nav_img">
                                            <img src={vwalls_icon} alt="VIDEO WALLS"/>
                                        </div>
                                        <div class="dg_ft_nav_link">
                                            <h3>VIDEO WALLS</h3>
                                        </div>
                                    </a>
                                </li>
                                <li class="dg_ft_nav_item dg_ft_nav_item5 ft_lights">
                                    <a href="#" onClick={move_lightsactive} data-fromDir="right">
                                        <div class="dg_ft_nav_img">
                                            <img src={lights_icon} alt="LIGHTS"/>
                                        </div>
                                        <div class="dg_ft_nav_link">
                                            <h3>LIGHTS</h3>
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

export default Footer;
