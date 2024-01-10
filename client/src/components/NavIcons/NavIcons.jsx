import React from "react";
import { logout } from "../../actions/AuthActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavIcons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
      dispatch(logout(navigate));
  };
  return (
    <div className="navIcons">
        <button className="button logout-button" onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default NavIcons;
