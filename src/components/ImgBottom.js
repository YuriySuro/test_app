import axios from "axios";
import React, { useEffect, useState } from "react";

function ImgBottom() {
    const [imgBottom, setImgBottom] = useState([]);

    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/images/imagesbottom");
        setImgBottom(res.data);
    }, []);

    return (
        <>
            {imgBottom.map(ib => {
                return (
                    <img key={ib.id} src={`./assets/img/${ib.name}.png`} alt={`${ib.name}`} className={`${ib.name}`} />
                )
            })}
        </>
    )
}

export default ImgBottom;