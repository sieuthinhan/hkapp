import thongtinimg from "../assets/thongtin.png";
import { useState } from "react";

function Page3({ clickproduction }) {

    return (
        <div className="page3">
            <img src={thongtinimg} alt="thongtinimg" className="thongtinimg" onClick={clickproduction} />
            <div ></div>
        </div>
    )
}

export default Page3