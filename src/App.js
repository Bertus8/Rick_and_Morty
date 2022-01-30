import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Characters } from './pages/Characters/Characters';
import { Location} from './pages/Location/Location';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <NavLink to="" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
      <NavLink to="characters" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Characters</NavLink>
      <NavLink to="locations" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Locations</NavLink>
      </header>
      
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="characters" element={<Characters />} />
      <Route path="locations" element={<Location />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
