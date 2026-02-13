import { useState } from "react";
import './style.css';

const ProductManagement = ()=>{

    const [products,setProducts] = useState([
        {id:1,name:"Running Shoes",price:2499,available:true},
        {id:2,name:"Wireless Headphones",price:1999,available:false},
        {id:3,name:"Smart Watch",price:3499,available:true},
        {id:4,name:"Backpack",price:1499,available:false},
        {id:5,name:"Sports T-Shirt",price:799,available:true},
    ])

    const handleDelete = (id)=>{
        setProducts(products.filter(p=>p.id !== id))
    }

    return(
        <>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Available</th>
                    <th>Action</th>
                </tr>

                {
                    products.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.available?<span style={{color:"green"}}>In Stock</span> :<span style={{color:"red"}}>Out of Stock</span>}</td>
                            <td><button onClick={()=>handleDelete(p.id)}>Delete</button></td>
                        </tr>
                    ))
                }

            </table>
        </>
    )
}

export default ProductManagement;
