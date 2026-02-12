import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDescription = () => {

  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(res.data)
      } catch (err) {
        setError("Failed to fetch product data..!!")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <h2>Loading...!!</h2>
  if (error) return <h2>{error}</h2>
  if (!product) return null

  return (
    <div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>₹ {product.price}</h3>
        <img src={product.image} width="200" />
      </div>
    </div>
  )
}

export default ProductDescription
