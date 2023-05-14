import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import Home from './Home';
import Keybinds from './Keybinds';

const Layout = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<MainMenu />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
                <Keybinds />
            </Router>
            
        </div>
    );
}


export default Layout;