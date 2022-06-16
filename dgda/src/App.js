import './App.css';
import './bootstrap.min.css';
import './mystyle.css';
import Header from './header';
import Footer from './footer';
import Roomselection from './screens/room-selection';
import Afterroomselection from './screens/after-room-selection';
import Modelshow from './screens/model-show';
//import Welcomesection from './screens/welcome-video-screen';


function App() {
  return (
    <div className="App">
      <Header />
      <Roomselection />
      <Afterroomselection />
      <Modelshow />
      <Footer />
    </div>
  );
}

export default App;
