import '../bootstrap.min.css';
import '../mystyle.css';
import move_startshow_left from '../move-startshow-left';
import move_start_modellights_left from '../move-start-modellights-left';
import move_start_basementfloors_left from '../move-start-basementfloors-left';

function Afterroomselection() {
  return (
    <div className="after_room_selection_screen">

        <section id="dg_afrs_screen" className="dg_afrs_screen">
            <div className="container dg_afrs_container">
                <div className="row dg_afrs_row">
                    <div className="col-4 dg_afrs_col">
                        <a href="javascript:void(0)" onClick={move_startshow_left}>
                            <h3 className="dg_afrs_col1_h">START<br/>SHOW</h3>
                        </a>
                    </div>
                    <div className="col-4 dg_afrs_col">
                        <a href="javascript:void(0)" onClick={move_start_modellights_left}>
                            <h3 className="dg_afrs_col2_h">MODEL<br/>LIGHTS</h3>
                        </a>
                    </div>
                    <div className="col-4 dg_afrs_col">
                        <a href="javascript:void(0)" onClick={move_start_basementfloors_left}>
                            <h3 className="dg_afrs_col3_h">BASEMENT<br/>FLOORS</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Afterroomselection;
