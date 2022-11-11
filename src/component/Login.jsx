import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const BASE_URL = 'https://jcc.brandingyou.id/api/'
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post(`${BASE_URL}login`, {
            username: user,
            password: pwd
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Headers': '*',
                // 'Access-Control-Allow-Credentials': 'true'
            }
        })
            .then(function (response) {
                sessionStorage.setItem('token', response.data.data.token)
                  console.log(response);
                  navigate("/post")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="wrapper">
                <div className="logo">
                    {/* <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" /> */}
                </div>
                <div className="text-center mt-4 name">
                    Login
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="username" id="username" autoComplete="off" onChange={(e) => setUser(e.target.value)}
                            value={user} placeholder="Username" required />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="password" onChange={(e) => setPwd(e.target.value)}
                            value={pwd} placeholder="Password" required />
                    </div>
                    <button className="btn mt-3" onClick={handleSubmit}>Login</button>
                </form>
                {/* <div className="text-center fs-6">
                    <Link to="/regis">Sign up</Link>
                </div> */}
                <div className="text-center fs-6">
                    Belum punya akun? 
                    <Link to="/regis">Daftar disini</Link>
                    </div>
            </div>
        </>
    )
}

export default Login;