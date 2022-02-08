import axios from "axios";
import React, { useEffect, useState } from "react";

function ImgMiddle() {
    const [imgMiddle, setImgMiddle] = useState([]);
    useEffect(async () => { 
        const res = await axios.get("http://localhost:5000/images/imagesmiddle");
        setImgMiddle(res.data);
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