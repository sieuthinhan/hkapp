import { useState } from 'react';
import backgroundimg from "../assets/background.png";
import Header from '../components/Header';
import Page1 from '../components/trangchu';
import Page2 from '../components/khieunaikhachhang';
import Page3 from '../components/quanlydonhang';
import Page4 from '../components/sodosanxuat';
import Page5 from '../components/theodoikhieunai';
import Page6 from '../components/kehoachdonhang';
import Page7 from '../components/khonguyenlieu';
import Page8 from '../components/hanhtrinhsanxuat';
import Page9 from '../components/sanxuat_mathang';
import Page10 from '../components/mathang_chaiky1';
import Page11 from '../components/khothanhpham';
import Page12 from '../components/tonkhothanhpham';
import Page13 from '../components/sanluongtheomay';

function App() {
  const [home, sethome] = useState(true);
  const [dhang, setdhang] = useState(false);
  const [sanpham, setsanpham] = useState(false);
  const [thongtinkhieunai, setthongtinkhieunai] = useState(false);
  const [thongtindonhang, setthongtindonhang] = useState(false);
  const [thongtinkhonguyenlieu, setthongtinkhonguyenlieu] = useState(false);
  const [khieunai, setkhieunai] = useState(false);
  const [thongtinsanxuat, setthongtinsanxuat] = useState(false);
  const [mathang, setmathang] = useState(false);
  const [chaiky1, setchaiky1] = useState(false);
  const [khothanhpham, setkhothanhpham] = useState(false);
  const [tonkho, settonkho] = useState(false);
  const [theomay, settheomay] = useState(false);

  const xemkhieunai = () => {
    setkhieunai(!khieunai);
  }

  const backhome = () => {
    sethome(true);
    setdhang(false);
    setsanpham(false);
    setthongtinkhieunai(false);
    setkhieunai(false);
    setthongtindonhang(false);
    setthongtinkhonguyenlieu(false);
    setthongtinsanxuat(false);
    setmathang(false);
    setchaiky1(false);
    setkhothanhpham(false);
    settonkho(false);
    settheomay(false);
  }

  const clickdhang = () => {
    setdhang(true);
    sethome(false);
    setkhieunai(false);
  }

  const clicksanpham = () => {
    setsanpham(true);
    setdhang(false);
  }

  const xemthongtinkhieunai = () => {
    setthongtinkhieunai(!thongtinkhieunai);
  }

  const xemthongtindonhang = () => {
    setthongtindonhang(!thongtindonhang);
  }

  const xemkhonguyenlieu = () => {
    setthongtinkhonguyenlieu(!thongtinkhonguyenlieu);
  }

  const xemsanxuat = () => {
    setthongtinsanxuat(!thongtinsanxuat);
  }

  const xemmathang = () => {
    setmathang(!mathang);
  }

  const xemchaiky1 = () => {
    setchaiky1(!chaiky1);
  }

  const xemkhothanhpham = () => {
    setkhothanhpham(!khothanhpham);
  }

  const xemtonkho = () => {
    settonkho(!tonkho);
  }

  const xemtheomay = () => {
    settheomay(!theomay);
  }

  return (
    <div className='container'>
      <Header
        clicklogo={backhome}
      />

      <div className='body1'>
        {home && (
          <Page1
            clickdonhang={clickdhang}
            clickkhieunai={xemkhieunai}
          />
        )}

        {khieunai && (
          home && (
            <Page2
              onxClick={xemkhieunai}
            />
          )
        )}

        {dhang && (
          <Page3
            clickproduction={clicksanpham}
          />
        )}

        {sanpham && (
          <div className='body2'>
            <img src={backgroundimg} alt="backgroundimg" />
            <Page4
              clickkhieunaikhachhang={xemthongtinkhieunai}
              clickkehoachdonhang={xemthongtindonhang}
              clickkhonguyenlieu={xemkhonguyenlieu}
              clicksanxuat={xemsanxuat}
              clickkhothanhpham={xemkhothanhpham}
              clicktheomay={xemtheomay}
            />

            {thongtinkhieunai && (
              <Page5
                clickkhieunaikhachhang={xemthongtinkhieunai}
              />
            )}

            {thongtindonhang && (
              <Page6
                clickkehoachdonhang={xemthongtindonhang}
              />
            )}

            {thongtinkhonguyenlieu && (
              <Page7
                clickkhonguyenlieu={xemkhonguyenlieu}
              />
            )}

            {thongtinsanxuat && (
              <Page8
                clicksanxuat={xemsanxuat}
                clickmathang={xemmathang}
              />
            )}

            {mathang && (
              <Page9
                clicktatmathang={xemmathang}
                clickchaiky1={xemchaiky1}
              />
            )}

            {chaiky1 && (
              <Page10
                clickchaiky1={xemchaiky1}
              />
            )}

            {khothanhpham && (
              <Page11
                clickkhothanhpham={xemkhothanhpham}
                clicktonkho={xemtonkho}
              />
            )}

            {tonkho && (
              <Page12
                clicktonkho={xemtonkho}
              />
            )}

            {theomay && (
              <Page13
                clicktheomay={xemtheomay}
              />
            )}

          </div>
        )}
      </div>


    </div>
  );
}

export default App