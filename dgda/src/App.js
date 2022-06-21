import './App.css';
import './bootstrap.min.css';
import './mystyle.css';
import Headeren from './header';
import Footeren from './footer';
import Mainenglish from './main-en';
//import Mainarabic from './main-ar';
import Welcomesection from './screens/welcome-video-screen';


function App() {
  return (
    <div className="App">
      <Headeren />
      <Welcomesection />
      <Mainenglish />
      <Footeren />
    </div>
  );
}

export default App;
