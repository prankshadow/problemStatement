import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.userReducer)?.user;

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
        navigate("/login");
    }

    let location = useLocation();

    useEffect(() => {
    }, [location]);


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">SALES APP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {user?.email ? <> <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">ADD SALES</Link>
                                <Link className={`nav-link ${location.pathname === "/top5sales" ? "active" : ""}`} to="/top5sales">TOP 5 SALES</Link>
                                <Link className={`nav-link ${location.pathname === "/totalrevenue" ? "active" : ""}`} to="/totalrevenue">TODAY'S TOTAL REVENUE</Link> </> : ''}
                            {(!user?.email) ? <><Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} to="/login">LOGIN</Link>
                                <Link className={`nav-link ${location.pathname === "/signup" ? "active" : ""}`} to="/signup">REGISTER</Link> </> : ''}
                            {user?.email ? <button className="nav-link bg-transparent border border-0" href="#" onClick={() => logout()}>LOGOUT</button> : ''}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar