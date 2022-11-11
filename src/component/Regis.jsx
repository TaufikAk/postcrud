import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const Regis = () => {

    const BASE_URL = 'https://jcc.brandingyou.id/api/'

    const [user, setUser] = useState('');
    const [nam, setNam] = useState('');
    const [mail, setMail] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate();

    const handleRegis = async (e) =>{
        // console.log(user)
        e.preventDefault();
        axios.post(`${BASE_URL}register`, {
        name:nam,
        email:mail,
        username: user,
        password: pwd
      })
      .then(function (response) {
        console.log(response);
        navigate("/")
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return (
        <>
        <form className="form-horizontal text-center gap-4" action='' method="POST">
  <fieldset>
    <div id="legend">
      <legend className="my-5">Register</legend>
    </div>
    <div className="control-group m-5">

      <label className="control-label"  htmlFor="username">Username</label>
      <div className="controls">
        <input type="text" id="username" name="username" placeholder="" className="input-xlarge" autoComplete="off" onChange={(e) => 
        setUser(e.target.value)} value ={user}/>
      </div>
    </div>

    <div className="control-group m-5">

      <label className="control-label"  htmlFor="name">Name</label>
      <div className="controls">
        <input type="text" id="name" name="name" placeholder="" className="input-xlarge" autoComplete="off" onChange={(e) => setNam(e.target.value)} 
        value ={nam}/>
      </div>
    </div>
 
    <div className="control-group m-5">

      <label className="control-label" htmlFor="email">E-mail</label>
      <div className="controls">
        <input type="text" id="email" name="email" placeholder="" className="input-xlarge" autoComplete="off" onChange={(e) =>
        setMail(e.target.value)} value ={mail}/>
      </div>
    </div>
 
    <div className="control-group m-5">

      <label className="control-label" htmlFor="password">Password</label>
      <div className="controls">
        <input type="password" id="password" name="password" placeholder="" className="input-xlarge" onChange={(e) => setPwd(e.target.value)} 
        value ={pwd}/>
      </div>
    </div>
 
 
    <div className="control-group m-5">
      <div className="controls">
        <button className="btn btn-success" onClick={handleRegis}>Register</button>
      </div>
    </div>
    <div className="text-center fs-6">
                    Anda sudah punya akun? 
                    <Link to="/">Login disini</Link>
                    </div>
  </fieldset>
</form>
</>
    )
}

export default Regis;