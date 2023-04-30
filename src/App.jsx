
import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import About from './components/About';
import QueernessAndAnarchism from './components/QueernessAndAnarchism';
import Limitations from './components/Limitations';
import Sources from './components/Sources';
import TransnationalUtopias from './components/TransnationalUtopias';
import AmelioRoblesAvila from './components/AmelioRoblesAvila';
import IrinaLayevska from './components/IrinaLayevska';
import LuisaCapetillo from './components/LuisaCapetillo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<TransnationalUtopias />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="queerness-and-anarchism" element={<QueernessAndAnarchism />} />
        <Route path="amelio-robles-avila" element={<AmelioRoblesAvila />} />
        <Route path="irina-layevska" element={<IrinaLayevska />} />
        <Route path="luisa-capetillo" element={<LuisaCapetillo />} />
        <Route path="limitations" element={<Limitations />} />
        <Route path="sources" element={<Sources />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
