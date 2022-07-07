import Roomselectionar from './screens/room-selection-ar';
import Afterroomselectionar from './screens/after-room-selection-ar';
import Modelshowar from './screens/model-show-ar';
import Modellightsar from './screens/model-lights-screen-ar';
import Basementfloorsar from './screens/basement-floors-ar';
import Videowallsar from './screens/videowalls-ar';
import Lightsscreenar from './screens/lightsscreen-ar';
import Showcontrolsar from './screens/show-controls-screen-ar';
import './customjqjs';

function Mainarabic() {
    return (
      <main className="main_ar">
        <Roomselectionar />
        <Afterroomselectionar />
        <Modelshowar />
        <Showcontrolsar/>
        <Modellightsar />
        <Basementfloorsar />
        <Videowallsar />
        <Lightsscreenar />
      </main>
    );
  }
  
  export default Mainarabic;