import '../styles/header.css';

export default function Header() {
    return (
        <header>
            <div className="image-3d">
                <img src="src/assets/sea.jpg" alt="sea" className="sea-pic" />
            </div>  
            <nav className="header-nav">
                <h1>My Travel Diary</h1>
                <div className="nav-con">
                    <div className="sub-nav-div">
                        <p>All Trips</p>
                        <p>Solo Trips</p>
                        <p>Work Trips</p>
                        <p>Family Trips</p>
                        <img src="src/assets/black woman.jfif" alt="profile-pic" className='profile-pic'/>            
                    </div>
                </div>
            </nav>
        </header>
    )
}