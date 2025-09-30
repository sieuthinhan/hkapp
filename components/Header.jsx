import logoimg from "../assets/logo.png";

function Header({ clicklogo }) {
    return (
        <div className="header">
            <img
                src={logoimg}
                alt="logoimg"
                onClick={clicklogo}
            />
            <p>Hệ thống quản trị ngành sợi - Tập đoàn vinatex</p>
            <div>
                <button className="signin">Sign in</button>
                <button className="register">Register</button>
            </div>
        </div>
    );
}

export default Header