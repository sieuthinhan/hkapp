import leadingimg from "../assets/leading.png";
import searchimg from "../assets/search.png";
import { useState } from "react";

function Page5({ clickkhieunaikhachhang }) {

    const rawDatakhieunai = [
        ["1", "Hà Gia Kinh", "Sợi lẫn màu tạp", "1/1/2025", "Chưa xử lý"],
        ["2", "Phạm Hương Giang", "Sợi lẫn màu tạp", "1/1/2025", "Chưa xử lý"],
        ["3", "Lại Văn Đại", "Sợi lẫn màu tạp", "1/1/2025", "Chưa xử lý"],
        ["4", "Hoàng Khánh Hòa", "Sợi lẫn màu tạp", "1/1/2025", "Chưa xử lý"],
        ["5", "Nguyễn Chí Công", "Sợi lẫn màu tạp", "1/1/2025", "Chưa xử lý"],
    ];

    const datakhieunai = rawDatakhieunai.map(([stt, khachhang, noidung, ngaykhieunai, trangthai]) => ({
        stt, khachhang, noidung, ngaykhieunai, trangthai
    }));
    
    const [search, setsearch] = useState("");
    const filteredDatakhieunai = datakhieunai.filter(
        (row) =>
            row.khachhang.toLowerCase().includes(search.toLowerCase()) ||
            row.trangthai.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page5">
            <div className="page51">
                <p>Bảng theo dõi thông tin khiếu nại</p>
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
                        {filteredDatakhieunai.length > 0 ? (
                            filteredDatakhieunai.map((row) => (
                                <tr key={row.stt}>
                                    <td>{row.stt}</td>
                                    <td>{row.khachhang}</td>
                                    <td>{row.noidung}</td>
                                    <td>{row.ngaykhieunai}</td>
                                    <td>{row.trangthai}</td>
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

            <div className="page54" onClick={clickkhieunaikhachhang}>X</div>
        </div>
    )
}

export default Page5