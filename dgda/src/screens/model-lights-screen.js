import '../bootstrap.min.css';
import '../mystyle.css';
import DG1 from '../images/model-lights/dg1.png';
import DG2 from '../images/model-lights/dg1.png';
import DG3 from '../images/model-lights/dg1.png';
import move_start_modellights_right from '../move-start-modellights-right';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../axios';

function Modellights() {

    const [phases, setPhases] = useState([]);
    const tempFunc = async () => {
        try {
            let res = await axios.get('room/1/phases_with_zones');
            console.log(res.data);
            setPhases(res.data.response)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        console.log('meow')
        tempFunc()
    }, [])
    return (
        <div className="after_room_selection_screen">

            <section id="ml_lights_screen" className="ml_lights_screen">
                <div className="container ml_lights_container">
                    <div className="row ml_lights_row">
                        <div className="col-12 breadcrumbs_col">
                            <a href="#" onClick={move_start_modellights_right}>
                                <h3 className="breadcrumbs"> MODEL LIGHTS </h3>
                            </a>
                        </div>
                        <div className="col_12 ml_content_col">
                            {
                                phases.map(function (phase) {
                                    return (
                                        <div className="ml_content_container ml_content_container1 active">
                                            <div className="ml_image_wrap ml_dg_anchor1_wrap active">
                                                <img src={phase.image} alt={phase.name} />
                                                <h3>{phase.name}</h3>
                                            </div>
                                            <div className="ml_list_wrap ml_dg_antag1_wrap active">
                                                <ul className="ml_dg_list ml_dg1_list">
                                                    {
                                                        phase.zones.map(function(zone) {
                                                            return (
                                                                <li className="ml_dg_list_item">
                                                                    <a href="#">
                                                                        {zone.name}
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="ml_content_container ml_content_container2">
                                <div className="ml_image_wrap ml_dg_anchor2_wrap">
                                    <img src={DG2} alt="DG1" />
                                    <h3>DG2</h3>
                                </div>
                                <div className="ml_list_wrap ml_dg_antag2_wrap">
                                    <ul className="ml_dg_list ml_dg2_list">
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                1. ZONE 1
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                2. ZONE 2
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                3. ZONE 3
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                4. ZONE 4
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                5. ZONE 5
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                6. ZONE 6
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                7. ZONE 7
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ml_content_container ml_content_container3">
                                <div className="ml_image_wrap ml_dg_anchor3_wrap">
                                    <img src={DG3} alt="DG1" />
                                    <h3>DG3</h3>
                                </div>
                                <div className="ml_list_wrap ml_dg_antag3_wrap">
                                    <ul className="ml_dg_list ml_dg3_list">
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                1. ZONE 1
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                2. ZONE 2
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                3. ZONE 3
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                4. ZONE 4
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                5. ZONE 5
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                6. ZONE 6
                                            </a>
                                        </li>
                                        <li className="ml_dg_list_item">
                                            <a href="#">
                                                7. ZONE 7
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Modellights;
