import '../bootstrap.min.css';
import '../mystyle.css';
import Playicon from '../images/video-controls/video-play-control-icon.svg';
import Pauseicon from '../images/video-controls/video-pause-control-icon.svg';
import Stopicon from '../images/video-controls/video-stop-control-icon.svg';
import Lowvolicon from '../images/video-controls/video-low-volum-icon.svg';
import Fullvolicon from '../images/video-controls/video-full-volum-icon.svg';
import Muteicon from '../images/video-controls/video-mute-icon.svg';
import Videothumb from '../images/play-video-thumb.png';
import move_startshow_right from '../move-startshow-right';

function Modelshow() {
  return (
    <div className="room_selection_screen">

        <section id="dg_sm_screen" className="dg_sm_screen">
            <div className="container dg_sm_screen_cont">
                <div className="row dg_sm_row">
                    <div className="col-12 dg_sm_col">
                        <a href="javascript:void(0)" onClick={move_startshow_right}>
                            <h3 className="breadcrumbs">
                                MODEL SHOW
                            </h3>
                        </a>
                    </div>
                    <div className="dg_sm_video_wrap">
                        <div className="sm_video">
                            <img src={Videothumb} alt="video thumb"/>
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
                                        <img src={Playicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_pause_item">
                                    <a href="#">
                                        <img src={Pauseicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_stop_item">
                                    <a href="#">
                                        <img src={Stopicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_lowvol_item">
                                    <a href="#">
                                        <img src={Lowvolicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_heighvol_item">
                                    <a href="#">
                                        <img src={Fullvolicon} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_mute_item">
                                    <a href="#">
                                        <img src={Muteicon} alt="sm-video-play"/>
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

export default Modelshow;
