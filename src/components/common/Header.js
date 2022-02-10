import logo from "../../images/logovector.png";
function Header() {
  return (
    <header className="App-header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navBar">
        <a href="/#" className="navLink">
          Home
        </a>
        <a href="/#" className="navLink">
          About
        </a>
        <a href="/#" className="navLink">
          Expertise
        </a>
        <a href="/#" className="navLink">
          Teams
        </a>
        <a href="/#" className="navLink">
          Works
        </a>
        <a href="/#" className="navLink">
          People Say
        </a>
        <a href="/#" className="navLink">
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
