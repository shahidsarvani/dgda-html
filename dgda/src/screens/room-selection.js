import '../bootstrap.min.css';
import '../mystyle.css';
import diriyahRoom from '../images/room-diriyah.png';
import wadiSafRoom from '../images/room-wadi-safar.png';

function Roomselection() {
  return (
    <div className="room_selection_screen">

        <section className="dg_rs_screen">
                <div className="container dg_rs_container">
                    <div className="row dg_rs_row">
                        <div className="col-6 dg_rs_col">
                            <a href="#">
                                <div className="dg_rs_wrap">
                                    <img src={diriyahRoom} alt="diriyah"/>
                                    <h3>DIRIYAH</h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 dg_rs_col">
                            <a href="#">
                                <div className="dg_rs_wrap">
                                    <img src={wadiSafRoom} alt="wadiSafRoom"/>
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