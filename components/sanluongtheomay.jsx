import ngaytheomayimg from "../assets/ngaytheomay.png";
import sodotheomayimg from "../assets/sodotheomay.png";

function Page13({ clicktheomay }) {
    return(
        <div className="page12">
            <p className="page121">Sản lượng theo máy</p>

            <img src={ngaytheomayimg} alt="chonmathangimg" className="page131" />
            <img src={sodotheomayimg} alt="sanluongtonkhoimg" className="page132" />

            <div className="page52">
                <div className="page521">
                    <div className="page5211">STT</div>
                </div>

                <div className="page523">
                    <div className="page5231">Tên máy</div>
                    <div className="page5232">Chải kỹ 01</div>
                    <div className="page5232">Chải kỹ 02</div>
                    <div className="page5232">Chải kỹ 03</div>
                    <div className="page5232">Chải kỹ 04</div>
                    <div className="page5232">Chải kỹ 06</div>
                </div>

                <div className="page521">
                    <div className="page5211">TC12</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                </div>

                <div className="page521">
                    <div className="page5211">TC34</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                </div>

                <div className="page521">
                    <div className="page5211">TC56</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                </div>

                <div className="page521">
                    <div className="page5211">TC78</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                    <div className="page5222">1000</div>
                </div>

                <div className="page522">
                    <div className="page5221">Tổng cộng</div>
                    <div className="page5222">4000</div>
                    <div className="page5222">4000</div>
                    <div className="page5222">4000</div>
                    <div className="page5222">4000</div>
                    <div className="page5222">4000</div>
                </div>
            </div>

            <div className="page54" onClick={clicktheomay}>X</div>
        </div>
    )
}

export default Page13