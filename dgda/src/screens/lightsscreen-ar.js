import '../bootstrap.min.css';
import '../bootstrap.rtl.min.css';
import '../mystyle.css';
import '../css/rtl.css';              

function Lightsscreenar() {
  return (
    <div className="room_selection_screen_ar">

        <section id="dg_lights_screen" className="dg_lights_screen">
            <div className="container dg_lights_container">
                <div className="row dg_lights_row">
                    <div className="col-4 dg_col_content">
                        <div className="dg_lights_content_wrap dg_lights_morning">
                            <a href="#">
                                <h3>الصباح</h3>
                                <h3>٨٠%</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 dg_col_content">
                        <div className="dg_lights_content_wrap dg_lights_afternoon">
                            <a href="#">
                                <h3>الظهيرة</h3>
                                <h3>١٠٠%</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 dg_col_content">
                        <div className="dg_lights_content_wrap dg_lights_evening">
                            <a href="#">
                                <h3>المساء</h3>
                                <h3>٤٠%</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 dg_col_content">
                        <div className="dg_lights_content_wrap dg_lights_entery">
                            <a href="#">
                                <h3>مشهد الدخول</h3>
                                <h3>٠%</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 dg_col_content">
                        <div className="dg_lights_content_wrap dg_lights_exit">
                            <a href="#">
                                <h3>مشهد الخروج</h3>
                                <h3>٢٠%</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Lightsscreenar;
