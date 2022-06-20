import '../bootstrap.min.css';
import '../bootstrap.rtl.min.css';
import '../mystyle.css';
import '../css/rtl.css';

function Basementfloorsar() {
  return (
    <div className="basementfloors_screen_ar">

        <section id="dg_bf_screen" className="dg_bf_screen">
            <div className="container dg_bf_container">
                <div className="row dg_bfb_row">
                    <div className="col-12 breadcrumbs_col">
                        <a href="javascript:void(0)" onclick="move_start_basementfloors_right()">
                            <h3 className="breadcrumbs"> المواقف السفلية </h3>
                        </a>
                    </div>
                </div>
                <div className="row dg_bfc_row">
                    <div className="col-12 dg_bf_col">
                        <div className="dg_bf_list_wrap">
                            <ul className="dg_bf_list">
                                <li className="dg_bf_list_item">
                                    <a href="#">
                                        للأعلى
                                    </a>
                                </li>
                                <li className="dg_bf_list_item">
                                    <a href="#">
                                        للأسفل
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

export default Basementfloorsar;
