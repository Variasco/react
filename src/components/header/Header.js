import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <nav className="menu">
                <Link className="menu__link" to="/">Home</Link>
                <Link className="menu__link" to="/chats">Chats</Link>
                <Link className="menu__link" to="/profile">Profile</Link>
            </nav>
        </div>
    );
};