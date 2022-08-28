import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" className="link">
        Home
      </a>
      <a href="#about" className="link">
        About
      </a>
      <a href="#" className="logo">
        Dead Soul Society
      </a>
      <a href="#music" className="link">
        Music
      </a>
      <a href="#socials" className="link">
        Socials
      </a>
    </div>
  );
};

export default Navbar;
