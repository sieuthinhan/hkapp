import Searchbar from "./searchbar";

function Page6({ clickkehoachdonhang }) {
    return(
        <div className="page5">
            <div className="page51">
                <p>Bảng theo dõi thông tin khiếu nại</p>
                <Searchbar />
            </div>

            <div className="page52">
                <div className="page521">
                    <div className="page5211">STT</div>
                </div>

                <div className="page522">
                    <div className="page5221">Khách hàng</div>
                    <div className="page5222">Hà Gia Kính</div>
                    <div className="page5222">Phạm Hương Giang</div>
                    <div className="page5222">Lại Văn Đại</div>
                    <div className="page5222">Hoàng Khánh Hòa</div>
                    <div className="page5222">Nguyễn Chí Công</div>
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
                    <div className="page5222" style={{color:"#4F46E5"}}>Đã xác nhận</div>
                    <div className="page5222" style={{color:"#EC3515"}}>Đang xử lý</div>
                    <div className="page5222" style={{color:"#4F46E5"}}>Đã xác nhận</div>
                    <div className="page5222" style={{color:"#4F46E5"}}>Đã xác nhận</div>
                    <div className="page5222" style={{color:"#4F46E5"}}>Đã xác nhận</div>
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

            <div className="page54" onClick={clickkehoachdonhang}>X</div>
        </div>
    )
}

export default Page6