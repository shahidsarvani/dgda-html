import './bootstrap.min.css';
import './mystyle.css';
import Model from './images/model.svg';
import Videowall from './images/play.svg';
import Lights from './images/lighting.svg';
import English from './images/english-letter.svg';
import move_main_right from './move-main-right';

function Footerar() {
  return (
    <div className="dgda-footer">

        <div id="footer_ar" class="container dg_ft_cont_ar">
            <div class="row dg_ft_row">
                <div class="col-12 dg_ft_col">
                    <div class="dg_ft_nav">
                        <ul class="dg_ft_nav_list">
                            <li class="dg_ft_nav_item dg_ft_nav_item1 active">
                                <a href="#" onclick="move_showmodelactive(this)" data-fromDir="left">
                                    <div class="dg_ft_nav_img">
                                        <img src={Model} alt="Model"/>
                                    </div>
                                    <div class="dg_ft_nav_link">
                                        <h3>المجسم</h3>
                                    </div>
                                </a>
                            </li>
                            <li class="dg_ft_nav_item dg_ft_nav_item2">
                                <a href="#" onclick="move_videowallsactive(this)" data-fromDir="right">
                                    <div class="dg_ft_nav_img">
                                        <img src={Videowall} alt="VIDEO WALLS"/>
                                    </div>
                                    <div class="dg_ft_nav_link">
                                        <h3>الشاشات الجدارية</h3>
                                    </div>
                                </a>
                            </li>
                            <li class="dg_ft_nav_item dg_ft_nav_item3">
                                <a href="#" onclick="move_lightsactive(this)" data-fromDir="right">
                                    <div class="dg_ft_nav_img">
                                        <img src={Lights} alt="LIGHTS"/>
                                    </div>
                                    <div class="dg_ft_nav_link">
                                        <h3>الإضاءات</h3>
                                    </div>
                                </a>
                            </li>
                            <li class="dg_ft_nav_item dg_ft_nav_item4 dg_ft_nav_link_ar">
                                <a href="javascript:void(0)" onClick={move_main_right}>
                                    <div class="dg_ft_nav_img dg_ft_nav_img_ar">
                                        <img src={English} alt="English"/>
                                    </div>
                                    <div class="dg_ft_nav_link">
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
