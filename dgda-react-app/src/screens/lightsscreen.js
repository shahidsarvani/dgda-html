import '../bootstrap.min.css';
import '../mystyle.css';
import { useState, useEffect } from 'react';
import twenty_percent from '../images/icons/lights/20percent-lights.svg';
import fourty_percent from '../images/icons/lights/40percent-lights.svg';
import natural_soft from '../images/icons/lights/natural-soft-lights.svg';
import sixty_percent from '../images/icons/lights/60percent-lights.svg';
import eighty_percent from '../images/icons/lights/80percent-lights.svg';
import natural_bright from '../images/icons/lights/natural-bright-lights.svg';
import model_bright from '../images/icons/lights/model-bright-lights.svg';
import model_soft from '../images/icons/lights/model-soft-lights.svg';
import all_lights_on from '../images/icons/lights/all-lights-on.svg';
import all_lights_off from '../images/icons/lights/all-light-off.svg';

function Lightsscreen() {

  return (
    <div className="lights_screen_wrap">

        <section id="dg_lights_screen" className="dg_lights_screen">
            <div className="container dg_lights_container">
            <div className="row dg_lights_main_row">
                    <div className="col-6">
                        <div className="row dg_lights_row">
                            <div className="col-12 dg_lights_col">
                                <div className="dg_lights_content_wrap dg_lights_20">
                                    <a href="#">
                                        <h3>LIGHTS 20%</h3>
                                        <img src={twenty_percent} alt="20percent-lights"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 dg_lights_col">
                                <div className="dg_lights_content_wrap dg_lights_40">
                                    <a href="#">
                                        <h3>LIGHTS 40%</h3>
                                        <img src={fourty_percent} alt="40percent-lights"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 dg_lights_col">
                                <div className="dg_lights_content_wrap dg_lights_40">
                                    <a href="#">
                                        <h3>NATURAL SOFT</h3>
                                        <img src={natural_soft} alt="natural-soft-lights"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row dg_lights_row">
                            <div className="col-12 dg_lights_col">
                                <div className="dg_lights_content_wrap dg_lights_60">
                                    <a href="#">
                                        <h3>LIGHTS 60%</h3>
                                        <img src={sixty_percent} alt="60percent-lights"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 dg_lights_col">
                                <div className="dg_lights_content_wrap dg_lights_entery">
                                    <a href="#">
                                        <h3>LIGHTS 80%</h3>
                                        <img src={eighty_percent} alt="80percent-lights"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 dg_lights_col">
                                <div className="dg_lights_content_wrap dg_lights_entery">
                                    <a href="#">
                                        <h3>NATURAL BRIGHT</h3>
                                        <img className="model_bright_lights" src={natural_bright} alt="natural-bright-lights"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row dg_lights_main_row dg_lights_main_row2">
                    <div className="col-6">
                        <div className="row dg_lights_row">
                            <div className="col-12 dg_lights_col">
                                <div className="dg_lights_content_wrap dg_lights_60">
                                    <a href="#">
                                        <h3>MODEL BRIGHT</h3>
                                        <img className="model_bright_lights" src={model_bright} alt="model-bright-lights"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 dg_lights_col">
                                <div className="dg_lights_content_wrap dg_lights_20">
                                    <a href="#">
                                        <h3>MODEL SOFT</h3>
                                        <img src={model_soft} alt="model-soft-lights"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row dg_lights_row">
                            <div className="col-12 dg_lights_col">
                                <div className="dg_lights_content_wrap dg_lights_entery">
                                    <a href="#">
                                        <h3>ALL LIGHTS ON</h3>
                                        <img src={all_lights_on} alt="all-lights-on"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 dg_lights_col">
                                <div className="dg_lights_content_wrap all_no_lights1">
                                    <a href="#">
                                        <h3>ALL LIGHTS OFF</h3>
                                        <img src={all_lights_off} alt="all-lights-off"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Lightsscreen;
