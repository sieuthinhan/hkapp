import arrowdownimg from "../assets/arrowdown.png";
import arrowupimg from "../assets/arrowup.png";
import dateimg from "../assets/date.png";
import sanluongimg from "../assets/sanluong.png";

function Page10({ clickchaiky1 }) {
    return (
        <div className="page9">
            <p className="page101">Sản lượng chải kỹ theo ngày</p>

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

            <img src={sanluongimg} alt="sanluongimg" className="page102"/>

            <div className="page54" onClick={clickchaiky1}>X</div>
        </div>
    )
}

export default Page10