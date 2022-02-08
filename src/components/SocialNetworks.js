import axios from "axios";
import React, { useEffect, useState } from "react";

function SocialNetworks() {
    const [socialNetworks, setSocialNetworks] = useState([]);

    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/socialnetworks");
        setSocialNetworks(res.data);
    }, []);

    return (
        <div className="social_networks">
            {socialNetworks.map((sn => {
                return (
                    <a key={sn.id} href={`https://${sn.name}.com`}><img src={`./assets/img/${sn.name}.svg`} className={sn.name} alt={sn.name} /></a>  
                );
            }))}
        </div>
    )
}

export default SocialNetworks;