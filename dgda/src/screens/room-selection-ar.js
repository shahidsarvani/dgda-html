import '../bootstrap.min.css';
import '../bootstrap.rtl.min.css';
import '../mystyle.css';
import '../css/rtl.css';
import Diriyahimg from '../images/room-diriyah.png';
import Wadiesafarimg from '../images/room-wadi-safar.png';
import move_left_ar from '../move-left-ar';

function Roomselectionar() {
  return (
    <div className="room_selection_screen_ar">

        <section id="dg_rs_screen" className="dg_rs_screen">
            <div className="container dg_rs_container">
                <div className="row dg_rs_row">
                    <div className="col-6 dg_rs_col">
                        <a href="#" onClick={move_left_ar}>
                            <div id="diriyah-room" className="dg_rs_wrap">
                                <img src={Diriyahimg} alt="diriyah"/>
                                <h3>الدرعية</h3>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 dg_rs_col">
                        <a href="#" onClick={move_left_ar}>
                            <div id="wadisafar-room" className="dg_rs_wrap">
                                <img src={Wadiesafarimg} alt="diriyah"/>
                                <h3>وادي صفر</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Roomselectionar;
