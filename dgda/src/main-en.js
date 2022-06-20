import Roomselection from './screens/room-selection';
import Afterroomselection from './screens/after-room-selection';
import Modelshow from './screens/model-show';
import Modellights from './screens/model-lights-screen';
import Basementfloors from './screens/basement-floors';
import Videowalls from './screens/videowalls';
import Lightsscreen from './screens/lightsscreen';

function Mainenglish() {
    return (
      <main className="main_en">
        <Roomselection />
        <Afterroomselection />
        <Modelshow />
        <Modellights />
        <Basementfloors />
        <Videowalls />
        <Lightsscreen />
      </main>
    );
  }
  
  export default Mainenglish;