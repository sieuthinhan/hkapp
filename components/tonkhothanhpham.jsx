import chonmathangimg from "../assets/chonmathang.png";
import sanluongtonkhoimg from "../assets/sanluongtonkho.png";

function Page12({ clicktonkho }) {
    return(
        <div className="page12">
            <p className="page121">Tồn kho thành phẩm</p>

            <img src={chonmathangimg} alt="chonmathangimg" className="page122" />
            <img src={sanluongtonkhoimg} alt="sanluongtonkhoimg" className="page123" />

            <p className="page124">Sản lượng</p>

            <div className="page52">
                <div className="page522">
                    <div className="page5221">Ngày</div>
                    <div className="page5222">1/5/2025</div>
                    <div className="page5222">2/5/2025</div>
                    <div className="page5222">3/5/2025</div>
                </div>

                <div className="page522">
                    <div className="page5221">Khách hàng</div>
                    <div className="page5222">36CVCCM</div>
                    <div className="page5222">34CVCCM</div>
                    <div className="page5222">40COCM</div>
                </div>

                <div className="page522">
                    <div className="page5221">Sản xuất</div>
                    <div className="page5232">1000</div>
                    <div className="page5232">1000</div>
                    <div className="page5232">1000</div>
                </div>

                <div className="page522">
                    <div className="page5221">Nhập kho</div>
                    <div className="page5232">800</div>
                    <div className="page5232">800</div>
                    <div className="page5232">800</div>
                </div>

                <div className="page522">
                    <div className="page5221">Xuất kho</div>
                    <div className="page5222">800</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1100</div>
                </div>
            </div>

            <div className="page54" onClick={clicktonkho}>X</div>
        </div>
    )
}

export default Page12