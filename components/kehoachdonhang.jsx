import leadingimg from "../assets/leading.png";
import searchimg from "../assets/search.png";
import { useState } from "react";

function Page6({ clickkehoachdonhang }) {

    const handleChange = (row) => {
        if (row.trangthai === "Đã xác nhận") {
            return { color: "#4F46E5" };
        } else if (row.trangthai === "Đang xử lý") {
            return { color: "#EC3515" };
        }
        return {};
    };

    const rawDatadonhang = [
        ["1", "Hà Gia Kính", "PO012 - 10.000Kg", "1/1/2025", "Đã xác nhận"],
        ["2", "Phạm Hương Giang", "PO012 - 10.000Kg", "1/1/2025", "Đang xử lý"],
        ["3", "Lại Văn Đại", "PO012 - 10.000Kg", "1/1/2025", "Đã xác nhận"],
        ["4", "Hoàng khánh Hòa", "PO012 - 10.000Kg", "1/1/2025", "Đã xác nhận"],
        ["5", "Nguyễn Chí Công", "PO012 - 10.000Kg", "1/1/2025", "Đã xác nhận"],
    ];

    const datadonhang = rawDatadonhang.map(([stt, khachhang, donhang, ngaygiao, trangthai]) => ({
        stt, khachhang, donhang, ngaygiao, trangthai
    }));

    const [search, setsearch] = useState("");
    const filteredDatadonhang = datadonhang.filter(
        (row) =>
            row.khachhang.toLowerCase().includes(search.toLowerCase()) ||
            row.trangthai.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page5">
            <div className="page51">
                <p>Kế hoạch đơn hàng khách hàng</p>
                <div className="search">
                    <img src={leadingimg} alt="leadingimg" />
                    <div>
                        <input
                            type='text'
                            placeholder='Hinted search text'
                            value={search}
                            onChange={(e) => setsearch(e.target.value)}
                        />
                        <img src={searchimg} alt="searchimg" />
                    </div>
                </div>
            </div>

            <div className="page52">

                <table className="page521">
                    <thead>
                        <tr>
                            <th className="page5211">STT</th>
                            <th className="page5221">Khách hàng</th>
                            <th className="page5231">Nội dung</th>
                            <th className="page5231">Ngày khiếu nại</th>
                            <th className="page5231">Trạng thái</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredDatadonhang.length > 0 ? (
                            filteredDatadonhang.map((row) => (
                                <tr key={row.stt}>
                                    <td>{row.stt}</td>
                                    <td>{row.khachhang}</td>
                                    <td>{row.donhang}</td>
                                    <td>{row.ngaygiao}</td>
                                    <td style={handleChange(row)}>{row.trangthai}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} style={{ textAlign: "center", padding: "10px" }}>
                                    Không tìm thấy dữ liệu
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>

            <div className="page53">
                <div className="page531">1</div>
                <div className="page532">2</div>
                <div className="page532">3</div>
                <div className="page533">...</div>
                <div className="page532">67</div>
                <div className="page532">68</div>
            </div>

            <div className="page54" onClick={clickkehoachdonhang}>X</div>
        </div>
    )
}

export default Page6