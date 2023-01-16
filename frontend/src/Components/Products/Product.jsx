import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../Redux/action';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import {NotFound} from "../NotFound/Notfound";



const Product = () => {

    const products = useSelector((state) => state)

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(true);

    //  const cart = useSelector((state) => {
    //      return state.cart
    //  })

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://pleasant-blazer-duck.cyclic.app/product/${id}`).catch((err) =>{
                console.log("not found error", err)
                setNotFound(false)
              });
            // (`https://arunteja.herokuapp.com/product/${id}`)
            setProduct(await response.json());
            setLoading(false);
        }
        
        getProduct();
        
    }, []);
    console.log(product);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />

                </div>
                {/* <div className="col-md-6" style={{lineHeight:2}}>
                   <Skeleton height ={50} width={300}/>
                   <Skeleton height ={75}/>
                   <Skeleton height ={25} width={150}/>
                   <Skeleton height ={50}/>
                   <Skeleton height ={150}/>
                   <Skeleton height ={50} width={100}/>
                   <Skeleton height ={50} width={100} style={{marginLeft:6}}/>
               </div> */}
            </>
        )
    };


    const ShowProduct = () => {
        return (
            <>
                {product.map((ele) => {
                    return (
                        <>
                            <div className="col-md-6">
                                <img src={ele.image} alt={ele.title}
                                    height="400px" width="400px" />
                            </div>

                            <div className="col-md-6">
                                <h4 className="text-uppercase text-back-50">{ele.category}</h4>
                                <h1 className="display-5"> {ele.title}</h1>

                                <p className="lead fw-bolder">Rating {ele.rating && ele.rating.rate}</p>
                                <i className="fa fa-star"></i>
                                <h3 className="display-6 fw-bolder my-4"> ${ele.price}</h3>
                                <p className="lead">{ele.description}</p>
                                <button className="btn btn-outline-dark px-4 py-2"
                                    onClick={() => addProduct(ele)}
                                // onClick={() => dispatch(addCart(product))}
                                >
                                    Add to Cart
                                </button>
                                <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                                    Go to Cart
                                </Link>
                            </div>
                        </>
                    )
                })
                }

            </>
        )
    }
    return (
        <>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}

                </div>
            </div>
        </>
    );
}

export default Product;
