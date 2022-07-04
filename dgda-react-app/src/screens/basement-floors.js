import '../bootstrap.min.css';
import '../mystyle.css';
import move_start_basementfloors_right from '../move-start-basementfloors-right';
import bf_up_icon from '../images/icons/bf-up-icon.svg';
import bf_down_icon from '../images/icons/bf-down-icon.svg';

function Basementfloors() {
  return (
    <div className="after_room_selection_screen">

        <section id="dg_bf_screen" className="dg_bf_screen">
            <div className="container dg_bf_container">
                <div className="row dg_bfc_row">
                    <div className="col-12 dg_bf_col">
                        <div className="dg_bf_list_wrap">
                            <ul className="dg_bf_list">
                                <li className="dg_bf_list_item">
                                    <a href="#">
                                        <img src={bf_up_icon} alt="basementfloors-up"/>
                                        <span>UP</span>
                                    </a>
                                </li>
                                <li className="dg_bf_list_item">
                                    <a href="#">
                                        <img src={bf_down_icon} alt="basementfloors-doen"/>
                                        <span>DOWN</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Basementfloors;
