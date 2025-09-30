import arrowdownimg from "../assets/arrowdown.png";
import arrowupimg from "../assets/arrowup.png";
import dateimg from "../assets/date.png";
import sanluongimg from "../assets/sanluong.png";
import tieuhaoimg from "../assets/tieuhao.png";
import hinhtronsanluongimg from "../assets/hinhtronsanluong.png";
import chuthichsanluongimg from "../assets/chuthichsanluong.png";

function Page9({ clickmathang, clickchaiky1 }) {
    return (
        <div className="page9">
            <div className="page91">
                <div className="page911">
                    <p>Chọn mặt hàng</p>
                    <img src={arrowdownimg} alt="arrowdownimg" className="downimg" />
                    <img src={arrowupimg} alt="arrowupimg" className="upimg" />
                    <div>
                        <p>Tất cả</p>
                        <p
                            className="chaiky1"
                            style={{ cursor: "pointer" }}
                            onClick={clickchaiky1}
                        >Chải kỹ 1</p>
                        <p>Chải kỹ 2</p>
                        <p>Chải kỹ 3</p>
                        <p>Chải kỹ 4</p>
                    </div>
                </div>

                <div className="page912">
                    <p>dd/mm/yy</p>
                    <img src={dateimg} alt="dateimg" />
                </div>

                <div className="page912">
                    <p>dd/mm/yy</p>
                    <img src={dateimg} alt="dateimg" />
                </div>
            </div>

            <div className="page92">
                <div className="page921">
                    <img src={sanluongimg} alt="sanluongimg" />
                    <p>Sản lượng chải kỹ theo ngày</p>
                </div>

                <div className="page922">
                    <div className="page9221">
                        <div className="page92211">LK</div>
                        <div className="page92212">
                            <p className="page922121">Lũy kế</p>
                            <p className="page922122">19,456</p>
                        </div>
                    </div>

                    <div className="page9221" style={{backgroundColor: "#997BDD"}}>
                        <div className="page92211">TH</div>
                        <div className="page92212">
                            <p className="page922121">Tỉ lệ tiêu hao</p>
                            <p className="page922122">17.37%</p>
                        </div>
                    </div>

                    <p className="page922123">Lũy kế và tiêu hao</p>
                </div>
            </div>

            <div className="page92">
                <div className="page921">
                    <img src={tieuhaoimg} alt="tieuhaoimg" />
                    <p>Tiêu hao F3 theo ngày</p>
                </div>

                <div className="page922">
                    <img src={hinhtronsanluongimg} alt="hinhtronsanluongimg" className="hinhtronsanluong"/>
                    <img src={chuthichsanluongimg} alt="chuthichsanluongimg" className="chuthichsanluong"/>
                    <p className="page922123">Sản lượng F3</p>
                </div>
            </div>

            <div className="page54" onClick={clickmathang}>X</div>
        </div>
    )
}

export default Page9