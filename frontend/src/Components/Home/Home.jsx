
import React from 'react';
import Products from "../Products/Products"
import { useNavigate } from 'react-router';
import { useEffect } from 'react'
import axios from 'axios';



const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem('auth'))
        axios.get('https://arunteja.herokuapp.com/user/', {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((res) => {
                alert(res.data.msg);
                navigate("/auth")
            })
    }, [])

    return (

        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Backgroud" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-right">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;

