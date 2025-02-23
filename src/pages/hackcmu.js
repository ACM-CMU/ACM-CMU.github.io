import './hackcmu.css'

import Homepage from './components/Homepage'
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import FaqPage from './components/FaqPage';
import Winners from './components/Winners';
import Prizes from './components/Prizes';
import Team from './components/Team';
import Sponsors from './components/Sponsors';

function hackcmu() {
  return (
    <div className="hackcmu">
      <Navbar/>
      <Homepage/>
      <Schedule/>
      <Winners/>
      <FaqPage/>
      <Sponsors/>
    </div>
  );
}

export default hackcmu;
