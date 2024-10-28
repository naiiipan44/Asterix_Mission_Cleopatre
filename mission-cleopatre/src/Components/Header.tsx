import "../Style/Header.css";

function Header() {
  return (
    <header>
      <div>
        <img
          src="./src/Images/logo3-normal.png"
          alt="logo"
          className="logoasterix"
        />
      </div>
      <nav className="navlinks">
        <a href="">Personnages</a>
        <a href="">Histoire</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
