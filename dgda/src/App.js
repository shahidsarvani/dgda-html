import './App.css';
import './bootstrap.min.css';
import './mystyle.css';
import './css/rtl.css';
import Headeren from './header';
import Footeren from './footer';
import Footerar from './footer-ar';
import Mainenglish from './main-en';
import Welcomesection from './screens/welcome-video-screen';


function App() {
  return (
    <div className="App">
      <Headeren />
      <Welcomesection />
      <Mainenglish />
      <Footeren />
      <Footerar />
    </div>
  );
}

export default App;
