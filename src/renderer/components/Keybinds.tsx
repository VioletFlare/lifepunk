import { useNavigate } from "react-router-dom"

const Keybinds = () => {
    const navigate = useNavigate();

    class Events {
        _handleESCKeydown() {
            console.log("ESccc");
        }

        _handleKeydown(ev: KeyboardEvent) {
            switch (ev.key) {
                case "Escape":
                    this._handleESCKeydown();
                    break;

            }
        }

        _setEvents() {
            document.addEventListener(
                "keyup", (ev) => this._handleKeydown(ev)
            );
        }

        init() {
            this._setEvents();
        }   
    }

    new Events().init();

    return (null);
}




export default Keybinds;