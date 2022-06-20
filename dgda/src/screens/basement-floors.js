import '../bootstrap.min.css';
import '../mystyle.css';

function Basementfloors() {
  return (
    <div className="after_room_selection_screen">

        <section id="dg_bf_screen" className="dg_bf_screen">
            <div className="container dg_bf_container">
                <div className="row dg_bfb_row">
                    <div className="col-12 breadcrumbs_col">
                        <a href="javascript:void(0)" onclick="move_start_basementfloors_right()">
                            <h3 className="breadcrumbs"> BASEMENT FLOORS </h3>
                        </a>
                    </div>
                </div>
                <div className="row dg_bfc_row">
                    <div className="col-12 dg_bf_col">
                        <div className="dg_bf_list_wrap">
                            <ul className="dg_bf_list">
                                <li className="dg_bf_list_item">
                                    <a href="#">
                                        UP
                                    </a>
                                </li>
                                <li className="dg_bf_list_item">
                                    <a href="#">
                                        DOWN
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
