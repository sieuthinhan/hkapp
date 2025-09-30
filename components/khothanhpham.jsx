import khothanhphamsanxuatimg from "../assets/khothanhphamsanxuat.png";
import { useState } from "react";

function Page11({ clickkhothanhpham, clicktonkho }) {
    const [anhien, setanhien] = useState(false);

    const ck1 = () => {
        setanhien(!anhien);
    }

    return (
        <div className="page9">
            <p className="page111">Hành trình sản xuất</p>

            <img src={khothanhphamsanxuatimg} alt="khothnahphamsanxuatimg" className="page112" />

            <div
                className="page113"
                onClick={clicktonkho}
            >
                
            </div>

            {anhien && (
                <div className="page115"></div>
            )}

            <div className="page114">
                {!anhien && (
                    <div className="page1141"></div>
                )}

                {anhien && (
                    <div className="page1143" >
                        <p>KHO NL</p>
                        <div>
                            <p>Bông Brazil</p>
                            <div>20</div>
                        </div>
                        <div>
                            <p>Bông Úc</p>
                            <div>10</div>
                        </div>

                        <div>
                            <p>Bông Ấn</p>
                            <div>20</div>
                        </div>
                    </div>
                )}

                <div className="page1142">
                    <p>KHO HỒI</p>
                    <div>
                        <p>Cúi hồi chải, màng bông PE</p>
                        <div>20</div>
                    </div>
                    <div>
                        <p>Thô màng (Tở thô)</p>
                        <div>10</div>
                    </div>

                    <div>
                        <p>Hút mối sợi con_CVC</p>
                        <div>20</div>
                    </div>
                </div>

                <div className="page1142" style={{ backgroundColor: "#F613E7" }}>
                    <p>KHO PHẾ</p>
                    <div>
                        <p>Sợi loại 2</p>
                        <div style={{ border: "#F613E7 1px solid" }}>20</div>
                    </div>
                    <div>
                        <p>Hồi không dùng lại (BPH)</p>
                        <div style={{ border: "#F613E7 1px solid" }}>10</div>
                    </div>

                    <div>
                        <p>Sợi cắt máy ống (SCPL)</p>
                        <div style={{ border: "#F613E7 1px solid" }}>20</div>
                    </div>
                </div>

                {anhien && (
                    <div className="page1143">
                        <p>KHO THÀNH PHẨM</p>
                        <div>
                            <p>36CVCCM</p>
                            <div>20</div>
                        </div>
                        <div>
                            <p>34CVCCM</p>
                            <div>10</div>
                        </div>

                        <div>
                            <p>40COCM</p>
                            <div>20</div>
                        </div>
                    </div>
                )}
            </div>

            <div
                className="page116"
                onClick={ck1}
            >
            </div>

            <div className="page54" onClick={clickkhothanhpham}>X</div>
        </div>
    )
}

export default Page11