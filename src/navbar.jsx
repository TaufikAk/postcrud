import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


const Navbar = () =>{

    const BASE_URL = 'https://jcc.brandingyou.id/api/'
    const navigate = useNavigate();

    const Logout = () =>{
        console.log(`${localStorage.getItem('token')}`)
        // e.preventDefault();
        axios.post(`${BASE_URL}logout`, {

      })
      .then(function (response) {
        console.log(response);
        // setLoadPost(response);
        navigate("/")

      })
      .catch(function (error) {
        console.log(error);
      });

    }

    return(
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={Logout}>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;