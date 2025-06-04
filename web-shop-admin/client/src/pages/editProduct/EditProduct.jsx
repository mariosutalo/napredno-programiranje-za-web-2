import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import styles from './EditProduct.module.css'
import AddProduct from '../addProduct/AddProduct'
import AddProductForm from '../../components/addProductForm/AddProductForm'

const EditProduct = () => {
    const { id } = useParams()
    const { data, error, isPending } = useFetch(`http://localhost:3000/products/productDetails?id=${id}`)
    const [formData, setFormData] = useState(null)

    useEffect(() => {
        if (data) {
            setFormData(data)
        }
    }, [data])

    useEffect(() => {
        console.log('Form data in use effect:', formData)
    }, [formData])

    return (
        <div>
            {error && <p>Error fetching</p>}
            {isPending && <p>Loading</p>}
            <AddProductForm productData={formData} productId={id} setProductData={setFormData} />
        </div>
    )
}

export default EditProduct