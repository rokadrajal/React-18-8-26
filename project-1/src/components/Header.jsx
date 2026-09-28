function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>✦</span> MyWebsite
      </div>

      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
}

export default Header;