import logo from './logo.png';

const Navbar = () => {
    return (  
        <header>
            <nav className="navbar nav nav__toggle 1-header">
            <img className="logo"src={logo} alt="logo" height="80px"></img>
                <div className="links">
                    <ul>
                        <li className="nav__item"><a href="/">CD</a></li>
                        <li className="nav__item"><a href="/">VINYL</a></li>
                        <li className="nav__item"><a href="/">SHEET MUSIC</a></li>
                        <li className="nav__item"> <a href="/">TOUR</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;