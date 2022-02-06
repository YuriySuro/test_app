import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../slices/useSlice";

function Logout() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = (event) => {
        event.preventDefault();
        dispatch(logout());
    };

    return(
        <div className="our_form">
            <h3>Welcome <span>{user.name}</span></h3>
            <button type="submit" onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout;