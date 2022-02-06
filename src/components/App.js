import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/useSlice";
import Login from "./Login";
import Logout from "./Logout";
import SocialNetworks from "./SocialNetworks";
import ImgTop from "./ImgTop";
import ImgMiddle from "./ImgMiddle";
import ImgBottom from "./ImgBottom";


function App() {
    const user = useSelector(selectUser);

    return(
        <div className="form_container">
            <div className="form_background"></div>
            <ImgTop />
            { user ? <Logout/> : <Login/> }
            <ImgMiddle />
            <div className="footer"></div>
            <SocialNetworks />
            <ImgBottom />
        </div>
    );
}

export default App;