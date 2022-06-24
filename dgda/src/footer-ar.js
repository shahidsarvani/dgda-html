import './bootstrap.min.css';
import './mystyle.css';
import Model from './images/model.svg';
import Videowall from './images/play.svg';
import Lights from './images/lighting.svg';
import English from './images/english-letter.svg';
import move_main_right from './move-main-right';
import move_showmodelactive from './move-showmodelactive';
import move_videowallsactive from './move-videowallsactive';
import move_lightsactive from './move-lightsactive';

function Footerar() {
  return (
    <div className="dgda-footer">

        <div id="footer_ar" className="container dg_ft_cont_ar">
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
        </div>

    </div>
  );
}

export default Footerar;
