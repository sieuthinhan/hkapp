import chonmathangimg from "../assets/chonmathang.png";
import sanluongtonkhoimg from "../assets/sanluongtonkho.png";

function Page12({ clicktonkho }) {

    const rawDatatonkho = [
        ["1/5/2025", "36CVCCM", "1.000", "800", "800"],
        ["2/5/2025", "34CVCCM", "1.000", "800", "800"],
        ["3/5/2025", "40 COCM", "1.000", "800", "800"],
    ];

    const datatonkho = rawDatatonkho.map(([ngay, mathang, sanxuat, nhapkho, xuatkho]) => ({
            ngay, mathang, sanxuat, nhapkho, xuatkho
    }));

    return(
        <div className="page12">
            <p className="page121">Tồn kho thành phẩm</p>

            <img src={chonmathangimg} alt="chonmathangimg" className="page122" />
            <img src={sanluongtonkhoimg} alt="sanluongtonkhoimg" className="page123" />

            <p className="page124">Sản lượng</p>

            <div className="page52">

                <table className="page521">
                    <thead>
                        <tr>
                            <th className="page5211">Ngày</th>
                            <th className="page5221">Mặt hàng</th>
                            <th className="page5231">Sản xuất</th>
                            <th className="page5231">Nhập kho</th>
                            <th className="page5231">Xuất kho</th>
                        </tr>
                    </thead>

                    <tbody>

                        {datatonkho.map((row) => (
                            <tr key={row.stt}>
                                <td>{row.ngay}</td>
                                <td>{row.mathang}</td>
                                <td>{row.sanxuat}</td>
                                <td>{row.nhapkho}</td>
                                <td>{row.xuatkho}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>

            <div className="page54" onClick={clicktonkho}>X</div>
        </div>
    )
}

export default Page12