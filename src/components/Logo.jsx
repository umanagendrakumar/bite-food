import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => (
  <div className="logoWrapper w-30">
    <Link to="/">
      <img
        className="logo w-full"
        alt="logo"
        src={logo}
      />
    </Link>
  </div>
);

export default Logo;