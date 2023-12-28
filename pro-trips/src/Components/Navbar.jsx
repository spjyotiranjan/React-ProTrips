import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="main">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <h1 className="Logo">Kalvium❤️</h1>
        </Link>
        <div className="right">
          <Link
            to={"/contact"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>Contact</h2>
          </Link>
          <Link
            to={"/registrationform"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>Registration Form</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
