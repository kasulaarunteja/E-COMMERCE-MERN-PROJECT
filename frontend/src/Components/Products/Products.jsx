import React from 'react';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from "react-router-dom"
///import axios from 'axios';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://pleasant-blazer-duck.cyclic.app/product");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                // console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts()
    }, []);


    // console.log(data)
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>

            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((ele) => ele.category === cat);
        setFilter(updatedList);
    }


    const handleChangeSort = (key, value = 1) => {
        if (value == 1) {
            data.sort((a, b) => a[key] - b[key])
            setData([...data])
        }
        else {
            data.sort((a, b) => b[key] - a[key])
            setData([...data])
        }
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Mens Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}> Jewelery </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}> Electronic </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { handleChangeSort("price") }}>Low to high</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { handleChangeSort("price", -1) }}>High to low</button>

                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3" key={product.id}>
                                <div className="card h-100 text-center p-4"
                                // key={product.id}
                                >
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <p className="lead fw-bold">Rating {product.rating && product.rating.rate}</p>
                                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;
