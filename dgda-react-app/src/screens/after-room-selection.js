import '../bootstrap.min.css';
import '../mystyle.css';
import move_startshow_left from '../move-startshow-left';
import move_start_modellights_left from '../move-start-modellights-left';
import move_start_basementfloors_left from '../move-start-basementfloors-left';
import start_show_icon from '../images/icons/play-icon.svg';
import model_districts from '../images/icons/model-zones.svg';
import Basementfloors_icon from '../images/icons/basement-floors-updated.svg';

function Afterroomselection() {
  return (
    <div className="after_room_selection_screen">

        <section id="dg_afrs_screen" className="dg_afrs_screen">
            <div className="container dg_afrs_container">
                <div className="row dg_afrs_row">
                    <div className="col-4 dg_afrs_col">
                        <a className='start_show_a' href="#" onClick={move_startshow_left}>
                            <img class="start_show_icon" src={start_show_icon} alt="start-show"/>
                            <h3 className="dg_afrs_col1_h">START SHOW</h3>
                        </a>
                    </div>
                    <div className="col-4 dg_afrs_col">
                        <a className='start_modelzone_a' href="#" onClick={move_start_modellights_left}>
                            <img class="screensaver_icon" src={model_districts} alt="night-scene"/>
                            <h3 className="dg_afrs_col2_h">MODEL DISTRICTS</h3>
                        </a>
                    </div>
                    <div className="col-4 dg_afrs_col">
                        <a className='start_basementfloors_a' href="#" onClick={move_start_basementfloors_left}>
                            <img class="basementfloors_icon" src={Basementfloors_icon} alt="basementfloors"/>
                            <h3 className="dg_afrs_col3_h">BASEMENT FLOORS</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Afterroomselection;
