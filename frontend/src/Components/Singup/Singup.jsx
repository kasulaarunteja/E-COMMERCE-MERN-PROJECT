

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


const Singup = () => {

  const [user, setUser] = useState({ name: "", email: '', password: '', });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  }
  const [registered, setRegistered] = useState(false)

  if (registered) {
    navigate('/login')
  }
  const handleClick = (e) => {
    e.preventDefault();
    console.log(user);
    setRegistered(false)
    axios.post('https://arunteja.herokuapp.com/register', user)

      .then((res) => {
        // alert(res.data);
        console.log(res.data);
        alert("register successful")
        setRegistered(true)
      }).catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content">
          <button className="btn btn-primary ww-100 mb-4"><span className="fa fa-google me-4"></span> sing in with Google</button>
          <button className="btn btn-primary ww-100 mb-4"><span className="fa fa-facebook me-4"></span> sing in with Facebook</button>
          <form onSubmit={handleClick}>

            {/* <div class="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">First name</label>
              <input type="text" className="form-control" id="validationCustom01" />
            </div>
            <div class="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Last name</label>
              <input type="text" className="form-control" id="validationCustom02" />
            </div> */}
            <div className="mb-3">
              <label htmlFor="userInput" className="form-label">UserName</label>
              <input type="text" className="form-control"
                id="name" onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">Minimum 5 laters</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInput" className="form-label">Email address</label>
              <input type="email" className="form-control"
                id="email"
                onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInput" className="form-label">Password</label>
              <input type="password" className="form-control"
                id="password"
                onChange={handleChange} />
              <div id="emailHelp" className="form-text">Be exactly 6 characters long.</div>
              <div id="emailHelp" className="form-text">Contain at least 1 capital letter</div>
              <div id="emailHelp" className="form-text">Contain at least 1 Number</div>
              <div id="emailHelp" className="form-text">contain at least 1 special character</div>

            </div>
            {/* <div className="mb-3">
              <label for="exampleInputcom" className="form-label">Confrom Password</label>
              <input type="password" className="form-control" id="exampleInputcom" />
            </div> */}
            {/* <button className="w-100 btn btn-primary btn-lg " type="submit"
              onClick={handleClick}>Continue</button> */}
            <input type="submit" className="w-100 btn btn-primary btn-lg" placeholder="Continue" />
          </form>

        </div>
      </div>
    </>
  );
}

export default Singup;
