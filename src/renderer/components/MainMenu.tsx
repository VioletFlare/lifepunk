import "./MainMenu.scss";
import { Component } from "react";
import { Link } from 'react-router-dom'

class MainMenu extends Component {

    render() {
        return (
            <div className="mainMenu">
                <div className="logoContainer">
                    <div className="logo">
                        LIFEPUNK
                    </div>
                </div>
                <div className="lowerMenu">
                    <div className="buttonPanel">
                        <Link to="/home">New Game</Link>
                        <Link to="/">Load Game</Link>
                        <button>Quit</button>
                    </div>
                </div>
            </div>
        );
    }

}
  

export default MainMenu;