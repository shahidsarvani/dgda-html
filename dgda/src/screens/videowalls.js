import '../bootstrap.min.css';
import '../mystyle.css';
import Videoplayicon from '../images/video-controls/video-play-control-icon.svg';
import Videopauseicon from '../images/video-controls/video-pause-control-icon.svg';
import Videostopicon from '../images/video-controls/video-stop-control-icon.svg';
import Videolowvolicon from '../images/video-controls/video-low-volum-icon.svg';
import Videohighvolicon from '../images/video-controls/video-full-volum-icon.svg';
import Videomutevolicon from '../images/video-controls/video-mute-icon.svg';
import move_vwalls_right from '../move-vwalls-right';

function Videowalls() {
  return (
    <div className="video_walls_screen_wrap">

        <section id="dg_vwalls_screen" className="dg_vwalls_screen">
            <div className="container dg_vwalls_container">
                <div className="row dg_vwalls_row">
                    <div className="col-12 dg_vwalls_col">
                        <a href="#" onClick={move_vwalls_right}>
                            <h3 className="breadcrumbs"> VIDEO WALLS </h3>
                        </a>
                    </div>
                    <div className="dg_sm_video_wrap">
                        <div className="sm_video">
                            
                        </div>
                        <div className="sm_video_track_wrap">
                            <div className="sm_video_track">
                                <div className="sm_video_unplayed_track"></div>
                                <div className="sm_video_played_track"></div>
                            </div>
                            <div className="sm_video_timers">
                                <span className="sm_video_start_timer">1:45</span>
                                <span className="sm_video_end_timer">-0.30</span>
                            </div>
                        </div>
                        <div className="sm_video_controls">
                            <ul className="sm_vc_list">
                                <li className="sm_vc_item sm_vc_play_item">
                                    <a href="#">
                                        <img src={Videoplayicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_pause_item">
                                    <a href="#">
                                        <img src={Videopauseicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_stop_item">
                                    <a href="#">
                                        <img src={Videostopicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_lowvol_item">
                                    <a href="#">
                                        <img src={Videolowvolicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_heighvol_item">
                                    <a href="#">
                                        <img src={Videohighvolicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_mute_item">
                                    <a href="#">
                                        <img src={Videomutevolicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="dg_media_list_wrap">
                            <h2>MEDIA</h2>
                            <ul className="dg_media_list">
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>1. ZONE 1</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>2. ZONE 2</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>3. ZONE 3</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>4. ZONE 4</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>5. ZONE 5</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>6. ZONE 6</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>7. ZONE 7</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>8. ZONE 8</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>9. ZONE 9</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>10. ZONE 10</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>11. ZONE 11</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>12. ZONE 12</h3>
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

export default Videowalls;
