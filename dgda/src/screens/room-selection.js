import '../bootstrap.min.css';
import '../mystyle.css';
import diriyahRoom from '../images/room-diriyah.png';
import wadiSafRoom from '../images/room-wadi-safar.png';
import move_left_en from '../move-left-en';
import { useState, useEffect } from 'react'

function Roomselection() {
    const [rooms, setRoom] = useState([]);
    const tempFunc = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/rooms`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            console.log(data);
            setRoom(data.response)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        console.log('meow')
        tempFunc()
    }, [])

    return (
        <div className="room_selection_screen">

            <section id="dg_rs_screen" className="dg_rs_screen">
                <div className="overlay_sc"></div>
                <div className="container dg_rs_container">
                    <div className="row dg_rs_row">
                        {
                            rooms.map(function (room) {
                                return (
                                    <div className="col-6 dg_rs_col">
                                        <a href="#" onClick={move_left_en}>
                                            <div id="{room.name}-room" className="dg_rs_wrap">
                                                <img src={room.image} alt={room.name} />
                                                <h3>{room.name}</h3>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="col-6 dg_rs_col">
                            <a href="#" onClick={move_left_en}>
                                <div id="wadisafar-room" className="dg_rs_wrap">
                                    <img src={wadiSafRoom} alt="diriyah" />
                                    <h3>WADI SAFAR</h3>
                                </div>
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Roomselection;
