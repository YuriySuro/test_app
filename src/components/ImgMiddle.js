import axios from "axios";
import React, { useEffect, useState } from "react";

function ImgMiddle() {
    const [imgMiddle, setImgMiddle] = useState([]);
    let cleanupFunction = false;
    useEffect(async () => { 
        const res = await axios.get("http://localhost:5000/images/imagesmiddle");
        if(!cleanupFunction) setImgMiddle(res.data);
        return () => cleanupFunction = true;
    }, []);

    return (
        <>
            {imgMiddle.map(im => {
                return (
                    <img key={im.id} className={`${im.name}`} src={`./assets/img/${im.name}.png`} alt={`${im.name}`} />
                )
            })}
        </>
    )
}

export default ImgMiddle;