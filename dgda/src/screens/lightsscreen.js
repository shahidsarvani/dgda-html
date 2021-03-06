import '../bootstrap.min.css';
import '../mystyle.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../axios';

function Lightsscreen() {

    const [lightScenes, setlightScenes] = useState([]);
    const tempFunc = async () => {
        try {
            let res = await axios.get('room/1/light_scenes');
            console.log(res.data);
            setlightScenes(res.data.response)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        console.log('meow')
        tempFunc()
    }, [])
  return (
    <div className="lights_screen_wrap">

        <section id="dg_lights_screen" className="dg_lights_screen">
            <div className="container dg_lights_container">
                <div className="row dg_lights_row">
                    {
                        lightScenes.map(function(scene) {
                            return (
                                <div className="col-4 dg_col_content">
                                    <div className="dg_lights_content_wrap dg_lights_morning">
                                        <a href="#">
                                            <h3>{scene.name}</h3>
                                            <h3>80%</h3>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="col-4 dg_col_content">
                        <div className="dg_lights_content_wrap dg_lights_afternoon">
                            <a href="#">
                                <h3>AFTERNOON</h3>
                                <h3>100%</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 dg_col_content">
                        <div className="dg_lights_content_wrap dg_lights_evening">
                            <a href="#">
                                <h3>EVENING</h3>
                                <h3>40%</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 dg_col_content">
                        <div className="dg_lights_content_wrap dg_lights_entery">
                            <a href="#">
                                <h3>ENTERY SCENE</h3>
                                <h3>0%</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 dg_col_content">
                        <div className="dg_lights_content_wrap dg_lights_exit">
                            <a href="#">
                                <h3>EXIT SCENE</h3>
                                <h3>20%</h3>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    </div>
  );
}

export default Lightsscreen;
