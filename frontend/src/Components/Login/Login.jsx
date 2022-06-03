

import React from 'react';
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router';

const Login = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState(false);


    if (login) {
        navigate('/')
    }

    const [user, setUser] = useState({
        email: '', password: ''
    });


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        setLogin(false);
        axios.post('https://arunteja.herokuapp.com/login', user)
            .then((res) => {
                console.log(res)
                setUser(res.data.user)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setLogin(true)
                alert("login successful")

            }).catch((err) => {
                console.log(err)
            })
    }



    return (
        <>
            <div className="modal-dialog">
                <div className="modal-content">
                    <button className="btn btn-primary ww-100 mb-4"><span className="fa fa-google me-2"></span> sing in with Google</button>
                    <form onSubmit={handleClick}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                value={user.email}
                                onChange={handleChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password"
                                value={user.password}
                                onChange={handleChange} />
                        </div>


                        <button className="w-100 btn btn-primary btn-lg " type="submit"
                            onClick={handleClick}
                        >Continue</button>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Login;
