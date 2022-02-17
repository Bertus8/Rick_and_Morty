import './App.scss';
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Characters } from './pages/Characters/Characters';
import { Location} from './pages/Location/Location';
import { ProfileContext } from './pages/Context/ProfileContext';
import { useState } from 'react';
import Profile from './pages/Profile/Profile'
import CharacterDetail from './pages/Characters/CharacterDetail';



const profileDefault = {
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  }

function App() {
const [profile, setProfile] = useState(profileDefault);
  return (
    <BrowserRouter>
    <ProfileContext.Provider value={{profile, setProfile}}>
    <div className="App">
      <header className="App-header">
      
      <NavLink to="" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
      <NavLink to="characters" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Characters</NavLink>

      <NavLink to="locations" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Locations</NavLink>
      <Profile/>
      </header>
      
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="characters" element={<Characters />} />
      <Route path="/characters/:id" element={<CharacterDetail/>}></Route>
      <Route path="locations" element={<Location />} />
    </Routes>
    </ProfileContext.Provider>
    </BrowserRouter>
  );
}

export default App;
