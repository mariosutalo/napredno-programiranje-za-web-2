import React, { useState, useEffect } from 'react'
import ProductForm from '../../components/productForm/ProductForm'

const AddNewProduct = () => {
    const [formData, setFormData] = useState({})


    useEffect(() => {
        console.log('new form data set')
    }, [formData])


    return (
        <div>
            <ProductForm formData={formData} setFormData={setFormData} />
        </div>
    )
}

export default AddNewProduct