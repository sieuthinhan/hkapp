import Searchbar from "./searchbar";
import bieudoimg from "../assets/bieudo.png";
import { useRef, useState } from "react";

function Page7({ clickkhonguyenlieu }) {
    const [xembieudo, setxembieudo] = useState(false);
    const hienbieudo = useRef(null);

    const clickxembieudo = () => {
        setxembieudo(!xembieudo);

        setTimeout(() => {
            hienbieudo.current?.scrollIntoView({ block: "nearest" });
        });
    }

    return (
        <div className="page5">
            <div className="page51">
                <p>Kho nguyên liệu</p>
                <span onClick={clickxembieudo}>Xem biểu đô tồn kho</span>
                <Searchbar />
            </div>

            <div className="page52">
                <div className="page521">
                    <div className="page5211">STT</div>
                </div>

                <div className="page522">
                    <div className="page5221">Nguyên liệu</div>
                    <div className="page5222">Bông brazil</div>
                    <div className="page5222">Bông tay phi</div>
                    <div className="page5222">Bông mỹ</div>
                    <div className="page5222">Bông úc</div>
                    <div className="page5222">Bông ba lan</div>
                </div>

                <div className="page523">
                    <div className="page5231">Tồn tối thiểu</div>
                    <div className="page5232">2.000</div>
                    <div className="page5232">2.000</div>
                    <div className="page5232">2.000</div>
                    <div className="page5232">2.000</div>
                    <div className="page5232">2.000</div>
                </div>

                <div className="page523">
                    <div className="page5231">Tồn thực tế</div>
                    <div className="page5232">2.000</div>
                    <div className="page5232">2.000</div>
                    <div className="page5232">2.000</div>
                    <div className="page5232">2.000</div>
                    <div className="page5232">2.000</div>
                </div>

                <div className="page522">
                    <div className="page5221">Trạng thái</div>
                    <div className="page5222" style={{ color: "#4F46E5" }}></div>
                    <div className="page5222" style={{ color: "#EC3515" }}>Thiếu</div>
                    <div className="page5222" style={{ color: "#4F46E5" }}>Đủ cho 15 ngày</div>
                    <div className="page5222" style={{ color: "#4F46E5" }}>Đủ cho 20 ngày</div>
                    <div className="page5222" style={{ color: "#4F46E5" }}>Đủ cho 30 ngày</div>
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

            <div className="page54" onClick={clickkhonguyenlieu}>X</div>

            {xembieudo && (
                <img src={bieudoimg} alt="bieudoimg" className="bieudoimg" ref={hienbieudo}/>
            )}

        </div>
    )
}

export default Page7