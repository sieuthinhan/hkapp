import Searchbar from "./searchbar";
import Trangthai75 from "../assets/75.png";

function Page8({ clicksanxuat, clickmathang }) {
    return (
        <div className="page5">
            <div className="page51">
                <p>Hành tình sản xuất</p>
                <Searchbar />
            </div>

            <div className="page52">
                <div className="page521">
                    <div className="page5211">STT</div>
                </div>

                <div className="page522">
                    <div className="page5221">Mặt hàng</div>
                    <div className="page5222">NE30 CVCV</div>
                    <div
                        className="page8222"
                        onClick={clickmathang}
                    >
                        Ne 32 CD
                    </div>
                    <div className="page5222">Ne 24 CD</div>
                    <div className="page5222">Ne 16 CD</div>
                    <div className="page5222">Ne 42 CD</div>
                </div>

                <div className="page523">
                    <div className="page5231">Đơn hàng</div>
                    <div className="page5232">PO012 - 10.000Kg</div>
                    <div className="page5232">PO012 - 10.000Kg</div>
                    <div className="page5232">PO012 - 10.000Kg</div>
                    <div className="page5232">PO012 - 10.000Kg</div>
                    <div className="page5232">PO012 - 10.000Kg</div>
                </div>

                <div className="page523">
                    <div className="page5231">Ngày giao</div>
                    <div className="page5232">1/1/2025</div>
                    <div className="page5232">1/1/2025</div>
                    <div className="page5232">1/1/2025</div>
                    <div className="page5232">1/1/2025</div>
                    <div className="page5232">1/1/2025</div>
                </div>

                <div className="page522">
                    <div className="page5221">Trạng thái</div>
                    <div className="page5222" style={{ color: "#4F46E5" }}>Dự kiến còn 10 ngày</div>
                    <div className="page5222" style={{ color: "#EC3515" }}>Dự kiến còn 20 ngày</div>
                    <div className="page5222" style={{ color: "#4F46E5" }}>Dự kiến còn 10 ngày</div>
                    <div className="page5222" style={{ color: "#4F46E5" }}>Dự kiến còn 10 ngày</div>
                    <div className="page5222" style={{ color: "#4F46E5" }}>Dự kiến còn 10 ngày</div>
                </div>
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

            <img src={Trangthai75} alt="75%" className="page81" />
            <img src={Trangthai75} alt="75%" className="page82" />
            <img src={Trangthai75} alt="75%" className="page83" />
            <img src={Trangthai75} alt="75%" className="page84" />
            <img src={Trangthai75} alt="75%" className="page85" />
        </div>
    )
}

export default Page8