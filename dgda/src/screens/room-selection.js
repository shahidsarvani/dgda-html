import '../bootstrap.min.css';
import '../mystyle.css';
import diriyahRoom from '../images/room-diriyah.png';
import wadiSafRoom from '../images/room-wadi-safar.png';
import move_left_en from '../move-left-en';

function Roomselection() {
  return (
    <div className="room_selection_screen">

        <section id="dg_rs_screen" className="dg_rs_screen">
            <div className="overlay_sc"></div>
            <div className="container dg_rs_container">
                <div className="row dg_rs_row">
                    <div className="col-6 dg_rs_col">
                        <a href="javascript:void(0)" onClick={move_left_en}>
                            <div id="diriyah-room" className="dg_rs_wrap">
                                <img src={diriyahRoom} alt="diriyah"/>
                                <h3>DIRIYAH</h3>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 dg_rs_col">
                        <a href="javascript:void(0)" onClick={move_left_en}>
                            <div id="wadisafar-room" className="dg_rs_wrap">
                                <img src={wadiSafRoom} alt="diriyah"/>
                                <h3>WADI SAFAR</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Roomselection;
