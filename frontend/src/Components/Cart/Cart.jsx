
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delCart } from '../../Redux/action/index';
import { addCart } from '../../Redux/action/index';


const Cart = () => {

    const Items = useSelector((state) => state.handleCart);
    console.log(Items);
    const dispatch = useDispatch()

    const handleClose = (e) => {
        dispatch(delCart(e))
    }

    const handleButton = (value, e) => {
        if (value === 1) {
            dispatch(addCart(e))
        } else {
            dispatch(delCart(e))
        }
    }


    return (
        <>
            {/* {state.length === 0 && emptyCart()} */}
            {/* {state.length !== 0 && state.map(cartItems)} */}
            <h1> Shooping cart</h1>
            {Items.map((e) =>
                <>
                    <div className="px-4 my-5 bg-light rounded-3" key={e.id}>
                        <div className="container py-4">
                            <button onClick={() => handleClose(e)}
                                className="btn close float-end" aria-label="Close">
                                X</button>
                            <div className="row justify-content-right">
                                <div className="col-md-4">
                                    <img src={e.image} alt={e.title} height="200px" width="200px" />

                                </div>
                                <div className="col-md-4">
                                    <h3>{e.title}</h3>
                                    <p className="lead fw-bold">{e.qty} X ${e.price} = $ {e.qty * e.price}</p>
                                    <button className="btn btn-outline-dark me-4" onClick={() => handleButton(-1, e)
                                    }>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <button className="btn btn-outline-dark me-4" onClick={() =>
                                        handleButton(1, e)
                                    }>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </>

            )}
            <div className="container">
                <div className="row">
                    <Link to="/Checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Cart;
