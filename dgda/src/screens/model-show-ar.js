import '../bootstrap.min.css';
import '../bootstrap.rtl.min.css';
import '../mystyle.css';
import '../css/rtl.css';
import Videothumb from '../images/play-video-thumb.png';
import Videoplay from '../images/video-controls/video-play-control-icon.svg';
import Videopause from '../images/video-controls/video-pause-control-icon.svg';
import Videostop from '../images/video-controls/video-stop-control-icon.svg';
import Videolowvol from '../images/video-controls/video-low-volum-icon.svg';
import Videohighvol from '../images/video-controls/video-full-volum-icon.svg';
import Videomute from '../images/video-controls/video-mute-icon.svg';
import move_startshow_right from '../move-startshow-right';

function Modelshowar() {
  return (
    <div className="modelshow_screen_ar">

        <section id="dg_sm_screen" className="dg_sm_screen">
            <div className="container dg_sm_screen_cont">
                <div className="row dg_sm_row">
                    <div className="col-12 dg_sm_col">
                        <a href="#" onClick={move_startshow_right}>
                            <h3 className="breadcrumbs">
                               عرض المجسم
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
                                <span className="sm_video_start_timer">١:٤٥</span>
                                <span className="sm_video_end_timer">-٠:٣١</span>
                            </div>
                        </div>
                        <div className="sm_video_controls">
                            <ul className="sm_vc_list">
                                <li className="sm_vc_item sm_vc_play_item">
                                    <a href="#">
                                        <img src={Videoplay} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_pause_item">
                                    <a href="#">
                                        <img src={Videopause} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_stop_item">
                                    <a href="#">
                                        <img src={Videostop} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_lowvol_item">
                                    <a href="#">
                                        <img src={Videolowvol} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_heighvol_item">
                                    <a href="#">
                                        <img src={Videohighvol} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_mute_item">
                                    <a href="#">
                                        <img src={Videomute} alt="sm-video-play"/>
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

export default Modelshowar;
