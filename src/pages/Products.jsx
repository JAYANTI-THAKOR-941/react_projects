import React, { useEffect, useState } from 'react'
import './product.css';
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response = await fetch('https://fakestoreapi.com/products')
                let data = await response.json();
                setProducts(data);
            }
            catch (err) {
                setError("Faild to fetch products data..!!");
            }
            finally {
                setLoading(false);
            }
        }
        fetchProducts();

    }, [])

    if (loading) return <h2>Loading...!!</h2>
    if (error) return <h2>{error}</h2>
    return (
       <>
       <div className="title">
        <h1>Explore Our Products</h1>
       </div>
         <div className='product-container'>
            {
                products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt="" />
                        <h3>{product.title}</h3>
                        <p>Category:{product.category}</p>
                        <div className="bottom">
                            <p>Price:₹{product.price}</p>
                            <div className="btns">
                                <button onClick={()=>navigate(`/products/${product.id}`)}>View Details</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
       </>
    )
}

export default Products