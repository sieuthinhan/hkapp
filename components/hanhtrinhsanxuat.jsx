import Trangthai75 from "../assets/75.png";
import { useState } from "react";
import leadingimg from "../assets/leading.png";
import searchimg from "../assets/search.png";

function Page8({ clicksanxuat, clickmathang }) {

    const handleChange = (row) => {
        if (row.trangthai === "Dự kiến còn 10 ngày") {
            return { color: "#4F46E5" };
        } else if (row.trangthai === "Dự kiến còn 20 ngày") {
            return { color: "#EC3515" };
        }
        return {};
    };

    const handleHover = (row) => {
        if (row.trangthai === "Dự kiến còn 20 ngày") {
            return { cursor: "pointer", border: "#4F46E5 1px solid" };
        }
    }

    const handleRowClick = (row) => {
        if (row.mathang === "NE32 CD") {
            clickmathang();
        }
    };

    const rawDatasanxuat = [
        ["1", "NE30 CVCV", "PO012 - 10.000Kg", "1/1/2025", "Dự kiến còn 10 ngày"],
        ["2", "NE32 CD", "PO013 - 15.000Kg", "5/1/2025", "Dự kiến còn 20 ngày"],
        ["3", "NE24 CD", "PO014 - 12.000Kg", "10/1/2025", "Dự kiến còn 10 ngày"],
        ["4", "NE16 CD", "PO015 - 8.000Kg", "15/1/2025", "Dự kiến còn 10 ngày"],
        ["5", "NE42 CD", "PO016 - 20.000Kg", "20/1/2025", "Dự kiến còn 10 ngày"],
    ];

    const datasanxuat = rawDatasanxuat.map(([stt, mathang, donhang, ngaygiao, trangthai]) => ({
        stt, mathang, donhang, ngaygiao, trangthai
    }));

    const [search, setsearch] = useState("");
    const filteredDatasanxuat = datasanxuat.filter(
        (row) =>
            row.mathang.toLowerCase().includes(search.toLowerCase()) ||
            row.donhang.toLowerCase().includes(search.toLowerCase()) ||
            row.trangthai.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page5">
            <div className="page51">
                <p>Hành trình sản xuất</p>

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
                            <th className="page5221">Mặt hàng</th>
                            <th className="page5231">Đơn hàng</th>
                            <th className="page5231">Ngày giao</th>
                            <th className="page5231">Trạng thái</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredDatasanxuat.length > 0 ? (
                            filteredDatasanxuat.map((row) => (
                                <tr
                                    key={row.stt}
                                    onClick={() => handleRowClick(row)}
                                    style={handleHover(row)}
                                >
                                    <td>{row.stt}</td>
                                    <td>{row.mathang}</td>
                                    <td>{row.donhang}</td>
                                    <td>{row.ngaygiao}</td>
                                    <td style={handleChange(row)}>
                                        {row.trangthai}
                                        <img src={Trangthai75} alt="75%" className="giatri75" />
                                    </td>
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

            <div className="page54" onClick={clicksanxuat}>X</div>

            {/* <img src={Trangthai75} alt="75%" className="page81" />
            <img src={Trangthai75} alt="75%" className="page82" />
            <img src={Trangthai75} alt="75%" className="page83" />
            <img src={Trangthai75} alt="75%" className="page84" />
            <img src={Trangthai75} alt="75%" className="page85" /> */}
        </div>
    )
}

export default Page8