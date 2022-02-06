import axios from "axios";
import React, {useEffect, useState} from "react";

function ImgTop() {
    const [imgTop, setImgTop] = useState([]);
    let cleanupFunction = false;
    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/images/imagestop");
        if(!cleanupFunction) setImgTop(res.data);
        return () => cleanupFunction = true;
    }, [])

    return (
        <>
            {imgTop.map(it => {
                return (
                    <img key={it.id} className={`${it.name}`} src={`./assets/img/${it.name}.png`} alt={`${it.name}`} />
                )
            })}
        </>
    )
}

export default ImgTop;