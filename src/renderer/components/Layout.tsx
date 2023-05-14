import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import Keybinds from './Keybinds';
import CharacterCreation from './CharacterCreation/CharacterCreation';

const Layout = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<MainMenu />} />
                    <Route path="/charactercreation" element={<CharacterCreation />} />
                </Routes>
                <Keybinds />
            </Router>
            
        </div>
    );
}


export default Layout;