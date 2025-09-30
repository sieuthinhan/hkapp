import homeimg from "../assets/home.png";
import groupimg from "../assets/group.png";
import alertimg from "../assets/alert.png";
import eyeimg from "../assets/eye.png";
import { useState } from 'react';

function home({ clickdonhang, clickkhieunai }) {
    return (
        <>
            <div className="khachhang">
                <p className="khachhang1">7,265</p>
                <img src={alertimg} alt="alertimg" />
                <p className="khieunai">265 <span>Khiếu nại</span></p>
                <button className="cong">+</button>
                <button
                    className="xem"
                    onClick={clickkhieunai}
                >
                    <img src={eyeimg} alt="eyeimg" />
                </button>

                <button className="homecircle">
                    <img src={homeimg} alt="homeimg" className="homeimg" />
                </button>
                <p className="khachhang2">KHÁCH HÀNG</p>
                <p className="khachhang3">Theo dõi quản lý thông tin khách hàng.</p>
            </div>

            <div
                className="donhang"
                onClick={clickdonhang}
            >
                <button className="homecircle">
                    <img src={homeimg} alt="homeimg" className="homeimg" />
                </button>
                <p className="khachhang2">KẾ HOẠCH ĐƠN HÀNG</p>
                <p className="khachhang3">Theo dõi và quản lý các đơn đặt hàng.</p>
            </div>

            <div className="quanlyhethong">
                <div>
                    <button className="circlehome">
                        <img src={homeimg} alt="homeimg" />
                    </button>
                    <p className="quanlyhethong1">Kho nguyên liệu</p>
                    <p className="quanlyhethong2">Kiểm soát tồn kho và nhập xuất nguyên liệu.</p>
                </div>

                <div>
                    <button className="circlehome">
                        <img src={homeimg} alt="homeimg" />
                    </button>
                    <p className="quanlyhethong1">Sản xuất</p>
                    <p className="quanlyhethong2">Giám sát quy trình và tiến đọ sản xuất.</p>
                </div>

                <div>
                    <button className="circlehome">
                        <img src={homeimg} alt="homeimg" />
                    </button>
                    <p className="quanlyhethong1">Kho thành phẩm</p>
                    <p className="quanlyhethong2">Quản lý tồn kho và xuất theo thành phẩm.</p>
                </div>
            </div>

            <div className="quanlyhethong">
                <div>
                    <button className="circlehome">
                        <img src={groupimg} alt="homeimg" />
                    </button>
                    <p className="quanlyhethong1">Nhân sự</p>
                    <p className="quanlyhethong2">Quản lý thông tin nhân viên và chấm công.</p>
                </div>

                <div>
                    <button className="circlehome">
                        <img src={groupimg} alt="homeimg" />
                    </button>
                    <p className="quanlyhethong1">Máy thiết bị</p>
                    <p className="quanlyhethong2">Theo dõi tình trạng và bảo trì máy móc.</p>
                </div>

                <div>
                    <button className="circlehome">
                        <img src={groupimg} alt="homeimg" />
                    </button>
                    <p className="quanlyhethong1">Tài chính</p>
                    <p className="quanlyhethong2">Quản lý doanh thu chi phí và lợi nhuận.</p>
                </div>
            </div>
        </>
    )
}

export default home