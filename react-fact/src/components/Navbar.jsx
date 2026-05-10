import reactLogo from "../assets/images/react-logo.png";

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="react logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}
