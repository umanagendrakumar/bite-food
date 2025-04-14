import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => (
    <header className="header flex justify-between max-[366px]:px-0 px-8 lg:justify-around">
      <Logo />
      <Navbar />
    </header>
  );

export default Header;