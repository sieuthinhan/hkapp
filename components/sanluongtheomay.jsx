import ngaytheomayimg from "../assets/ngaytheomay.png";
import sodotheomayimg from "../assets/sodotheomay.png";

function Page13({ clicktheomay }) {

    const rawDatatheomay = [
        ["1", "Chải kỹ 01", "1.000", "1.000", "1.000", "1.000", "4.000"],
        ["2", "Chải kỹ 02", "1.000", "1.000", "1.000", "1.000", "4.000"],
        ["3", "Chải kỹ 03", "1.000", "1.000", "1.000", "1.000", "4.000"],
        ["4", "Chải kỹ 04", "1.000", "1.000", "1.000", "1.000", "4.000"],
        ["5", "Chải kỹ 05", "1.000", "1.000", "1.000", "1.000", "4.000"],
    ];

    const datatheomay = rawDatatheomay.map(([stt, tenmay, tc12, tc34, tc56, tc78, tongcong]) => ({
            stt, tenmay, tc12, tc34, tc56, tc78, tongcong
    }));

    return (
        <div className="page12">
            <p className="page121">Sản lượng theo máy</p>

            <img src={ngaytheomayimg} alt="chonmathangimg" className="page131" />
            <img src={sodotheomayimg} alt="sanluongtonkhoimg" className="page132" />

            <div className="page52">

                <table className="page521">
                    <thead>
                        <tr>
                            <th className="page5211">STT</th>
                            <th className="page5221">Tên máy</th>
                            <th className="page5231">TC12</th>
                            <th className="page5231">TC34</th>
                            <th className="page5231">TC56</th>
                            <th className="page5231">TC78</th>
                            <th className="page5231">Tổng cộng</th>
                        </tr>
                    </thead>

                    <tbody>

                        {datatheomay.map((row) => (
                            <tr key={row.stt}>
                                <td>{row.stt}</td>
                                <td>{row.tenmay}</td>
                                <td>{row.tc12}</td>
                                <td>{row.tc34}</td>
                                <td>{row.tc56}</td>
                                <td>{row.tc78}</td>
                                <td>{row.tongcong}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>

            <div className="page54" onClick={clicktheomay}>X</div>
        </div>
    )
}

export default Page13