import '../bootstrap.min.css';
import '../mystyle.css';
import video from '../videos/dgda_intro.mp4';


function Welcomesection() {
  return (
    <div className="room_selection_screen">

        <section className="dg_vw_screen">
            <div className="container-fluid dg_vw_cont">
                <div className="row dg_vw_row">
                    <div className="col-12 dg_vw_col">
                        <video id="main_video" width="100%" height="100%" loop="true" controls="false" autoplay="autoplay" muted>
                                <source src={video} type="video/mp4"/>
                                <source src="movie.ogg" type="video/ogg"/>
                                Your browser does not support the video tag.
                        </video>
                        <div id="main_video_btn" className="main_video_btn" onclick="splash_video_fade();">
                            <a id="video_start_btn" href="#">TAP TO START</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Welcomesection;


























