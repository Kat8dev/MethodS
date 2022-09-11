import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { NavbarWrapper } from "../styled/NavbarWrapper";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <NavbarWrapper>
      <div className="logo">
        <img src="./assets/logo.png" alt="logo" />
      </div>
      <div className="links">
        <NavLink to="/"
          style={({ isActive }) =>
            isActive ? activeStyle : nonActiveStyle
          }>
          Home
        </NavLink>
        <NavLink to="/about"
          style={({ isActive }) =>
            isActive ? activeStyle : nonActiveStyle
          }>
          About
        </NavLink>
        {
          !user && <NavLink to="signin"
            style={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }>
            Sign In
          </NavLink>
        }
        {
          user &&
          <NavLink to="/account"
            style={({ isActive }) =>
              isActive ? activeAccount : nonActiveAccount
            }>
            {user.email}
          </NavLink>
        }
        {user && <div className="user_logout">
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>}
      </div>
    </NavbarWrapper>
  )
}

export default Navbar;

export const activeStyle = {
  margin: "15px",
  color: "#2c6e49",
  fontSize: "27px",
  textDecoration: "none",
};

export const nonActiveStyle = {
  margin: "15px",
  textDecoration: "none",
  color: "#4c956c",
  fontSize: "25px",
};

export const activeAccount = {
  margin: "15px",
  fontSize: "15px",
  color: "#2c6e49",
  textDecoration: "none",
};

export const nonActiveAccount = {
  margin: "15px",
  fontSize: "10px",
  textDecoration: "none",
  color: "#4c956c",
};
