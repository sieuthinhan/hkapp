import userplusimg from "../assets/userplus.png";
import candiceimg from "../assets/candice.png";
import { useState } from "react";

function Page2({onxClick}) {

    return (
        <div className="page2">
            <div className="page21">
                <img src={userplusimg} alt="userplusimg" />
            </div>

            <p className="page22">Khiếu nại của khách hàng</p>
            <p className="page23">Ghi nhận các nội dung khiếu nại của khách hàng</p>

            <div className="page24">
                <img src={candiceimg} alt="candiceimg" />
                <div>
                    <p>Candice Wu</p>
                    <span>candice@untitledui.com</span>
                </div>
            </div>

            <button onClick={onxClick}>X</button>
        </div>
    )
}

export default Page2