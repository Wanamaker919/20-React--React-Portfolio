import { Link } from 'react-router-dom';
import '../App.css'

function Navapp(){
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="d-flex flex-grow-1">
        <span className="w-100 d-lg-none d-block">hidden</span>
        <a className="navbar-brand d-none d-lg-inline-block" href="#"> LaShawn Wanamaker</a>
        <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
            <img src="//placehold.it/40?text=LOGO" alt="logo"></img>
        </a>
        <div className="w-100 text-right">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
    <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul className="navbar-nav ms-auto flex-nowrap">
            <li className="nav-item">
                <Link to="/about" className="nav-link m-2 menu-item nav-active">About Me</Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" className="nav-link m-2 menu-item nav-active">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link m-2 menu-item">Contact</Link>
            </li>
            <li className="nav-item">
                <Link href="/Resume" className="nav-link m-2 menu-item">Resume</Link>
            </li>
        </ul>
    </div>
</nav>
 </div>
     )
}
export default Navapp;