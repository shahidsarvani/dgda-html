import './bootstrap.min.css';
import './mystyle.css';
import Model from './images/model.svg';
import Videowall from './images/play.svg';
import Lights from './images/lighting.svg';
import Arabic from './images/ftr-arabic-icon.svg';
import move_showmodelactive from './move-showmodelactive';
import move_main_left from './move-main-left';
import videowallsactive from './move-videowallsactive';
import move_lightsactive from './move-lightsactive';

function Footer() {
  return (
    <div className="dgda-footer dg_ft_cont_en">

        <div className="container dg_ft_cont">
                <div className="row dg_ft_row">
                    <div className="col-12 dg_ft_col">
                        <div className="dg_ft_nav">
                            <ul className="dg_ft_nav_list">
                                <li className="dg_ft_nav_item">
                                    <a href="#" onClick={move_showmodelactive} data-fromdir="left">
                                        <div className="dg_ft_nav_img">
                                            <img src={Model} alt="Model"/>
                                        </div>
                                        <div className="dg_ft_nav_link">
                                            <h3>MODEL</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="dg_ft_nav_item">
                                    <a href="#" onClick={videowallsactive} data-fromdir="right">
                                        <div className="dg_ft_nav_img">
                                            <img src={Videowall} alt="VIDEOWALLS"/>
                                        </div>
                                        <div className="dg_ft_nav_link">
                                            <h3>VIDEO WALLS</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="dg_ft_nav_item">
                                    <a href="#" onClick={move_lightsactive} data-fromdir="right">
                                        <div className="dg_ft_nav_img">
                                            <img src={Lights} alt="LIGHTS"/>
                                        </div>
                                        <div className="dg_ft_nav_link">
                                            <h3>LIGHTS</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="dg_ft_nav_item">
                                    <a href="#" onClick={move_main_left}>
                                        <div className="dg_ft_nav_img">
                                            <img className="arabic_img" src={Arabic} alt="ARABIC"/>
                                        </div>
                                        <div className="dg_ft_nav_link">
                                            <h3>العربية</h3>
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
