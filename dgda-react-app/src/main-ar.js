import Roomselectionar from './screens/room-selection-ar';
import Afterroomselectionar from './screens/after-room-selection-ar';
import Modelshowar from './screens/model-show-ar';
import Modellightsar from './screens/model-lights-screen-ar';
import Basementfloorsar from './screens/basement-floors-ar';
import Videowallsar from './screens/videowalls-ar';
import Lightsscreenar from './screens/lightsscreen-ar';

function Mainarabic() {
    return (
      <main className="main_ar">
        <Roomselectionar />
        <Afterroomselectionar />
        <Modelshowar />
        <Modellightsar />
        <Basementfloorsar />
        <Videowallsar />
        <Lightsscreenar />
      </main>
    );
  }
  
  export default Mainarabic;