import leadingimg from "../assets/leading.png";
import searchimg from "../assets/search.png";
import bieudoimg from "../assets/bieudo.png";
import { useRef, useState } from "react";

function Page7({ clickkhonguyenlieu }) {
    const [xembieudo, setxembieudo] = useState(false);
    const hienbieudo = useRef(null);

    const clickxembieudo = () => {
        setxembieudo(!xembieudo);
    }

    const handleChange = (row) => {
        if (row.trangthai === "Thiếu") {
            return { color: "#EC3515" };
        } else {
            return { color: "#4F46E5" };
        }
    }

    const rawDatanguyenlieu = [
        ["1", "Bông brazil", "2.000", "2.000", ""],
        ["2", "Bông tay phi", "2.000", "2.000", "Thiếu"],
        ["3", "Bông mỹ", "2.000", "2.000", "Đủ cho 15 ngày"],
        ["4", "Bông úc", "2.000", "2.000", "Đủ cho 20 ngày"],
        ["5", "Bông ba lan", "2.000", "2.000", "Đủ cho 30 ngày"],
    ];

    const datanguyenlieu = rawDatanguyenlieu.map(([stt, nguyenlieu, tontoithieu, tonthucte, trangthai]) => ({
        stt, nguyenlieu, tontoithieu, tonthucte, trangthai
    }));

    const [search, setsearch] = useState("");
    const filtereddatanguyenlieu = datanguyenlieu.filter(
        (row) =>
            row.nguyenlieu.toLowerCase().includes(search.toLowerCase()) ||
            row.trangthai.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page5">
            <div className="page51">
                <p>Kho nguyên liệu</p>
                <span onClick={clickxembieudo}>Xem biểu đô tồn kho</span>
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
                            <th className="page5221">Nguyên liệu</th>
                            <th className="page5231">Tồn tối thiểu</th>
                            <th className="page5231">Tồn thực tế</th>
                            <th className="page5231">Trạng thái</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filtereddatanguyenlieu.length > 0 ? (
                            filtereddatanguyenlieu.map((row) => (
                                <tr key={row.stt}>
                                    <td>{row.stt}</td>
                                    <td>{row.nguyenlieu}</td>
                                    <td>{row.tontoithieu}</td>
                                    <td>{row.tonthucte}</td>
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

            <div className="page54" onClick={clickkhonguyenlieu}>X</div>

            {xembieudo && (
                <img src={bieudoimg} alt="bieudoimg" className="bieudoimg" ref={hienbieudo} />
            )}

        </div>
    )
}

export default Page7