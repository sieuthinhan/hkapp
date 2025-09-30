import alertimg from "../assets/alert.png";
import khachhangimg from "../assets/khachhang.png";
import rightarrowimg from "../assets/rightarrow.png";
import downarrowimg from "../assets/downarrow.png";
import donhangimg from "../assets/donhang.png";
import uparrowimg from "../assets/uparrow.png";
import khonguyenlieuimg from "../assets/khonguyenlieu.png";
import sanxuatimg from "../assets/sanxuat.png";
import khothanhphamimg from "../assets/khothanhpham.png";
import nhansuimg from "../assets/nhansu.png";
import maythietbiimg from "../assets/maythietbi.png";
import taichinhimg from "../assets/taichinh.png";

function Page4({ clickkhieunaikhachhang, clickkehoachdonhang, clickkhonguyenlieu, clicksanxuat, clickkhothanhpham, clicktheomay }) {
    return (
        <div className="page4">
            <div className="page41">
                <div
                    className="page411"
                    onClick={clickkhieunaikhachhang}
                >
                    <p className="page4111">726</p>
                    <img src={alertimg} alt="alertimg" className="page4112" />
                    <p className="page4113">65</p>
                    <img src={khachhangimg} alt="khachhangimg" className="page4114" />
                    <p className="page4115">Khách hàng</p>
                    <button className="page4116">+</button>
                </div>

                <img src={rightarrowimg} alt="rightarrow" className="page412" />

                <div
                    className="page413"
                    onClick={clickkehoachdonhang}
                >
                    <img src={donhangimg} alt="donhangimg" />
                    <p>Kế hoạch đơn hàng</p>
                </div>
            </div>

            <div className="page42">
                <div
                    className="page421"
                    onClick={clickkhonguyenlieu}
                >
                    <img src={khonguyenlieuimg} alt="khonguyenlieuimg" />
                    <p>Kho nguyên liệu</p>
                </div>

                <img src={rightarrowimg} alt="rightarrow" className="page422" />

                <div
                    className="page423"
                    onClick={clicksanxuat}
                >
                    <img src={sanxuatimg} alt="sanxuatimg" />
                    <p>Sản xuất</p>
                </div>

                <img src={rightarrowimg} alt="rightarrow" className="page424" />

                <div
                    className="page425"
                    onClick={clickkhothanhpham}
                >
                    <img src={khothanhphamimg} alt="khothanhphamimg" />
                    <p>Kho thành phẩm</p>
                </div>

                <img src={downarrowimg} alt="downarrowimg" className="page426" />
                <img src={uparrowimg} alt="uparrowimg" className="page427" />
            </div>

            <div className="page43">
                <div className="page431">
                    <img src={nhansuimg} alt="nhansuimg" />
                    <p>Nhân sự</p>
                </div>

                <div
                    className="page432"
                    onClick={clicktheomay}
                >
                    <img src={maythietbiimg} alt="maythietbiimg" />
                    <p>Máy thiết bị</p>
                </div>

                <div className="page433">
                    <img src={taichinhimg} alt="taichinhimg" />
                    <p>Tài chính</p>
                </div>
            </div>
        </div>
    )
}

export default Page4