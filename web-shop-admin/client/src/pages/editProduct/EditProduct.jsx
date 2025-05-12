import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import styles from './EditProduct.module.css'

const EditProduct = () => {
    const { id } = useParams()
    const { data, error, isPending } = useFetch(`http://localhost:3000/products/productDetails?id=${id}`)
    const [formData, setFormData] = useState(null)
    const [updateInProgress, setUpdateInProgress] = useState(false)

    useEffect(() => {
        if (data) {
            setFormData(data)
        }
    }, [data])

    console.log('componente rerendered!')

    function onChangeFormData(e) {
        const { name, value } = e.target
        console.log('form data:', name, value)
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(JSON.stringify(formData))
        setUpdateInProgress(true)
        try {
            const response = await fetch("http://localhost:3000/products", {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            // const result = await response.json()
            // console.log('result', result)
        } catch (error) {
            console.log('Error updating product:', error)
        } finally {
            setUpdateInProgress(false)
        }
    }

    return (
        <div>
            {error && <p>Error fetching</p>}
            {isPending && <p>Loading</p>}
            {formData && <form className={styles.product_form} onSubmit={handleSubmit}>
                <fieldset disabled={updateInProgress}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={onChangeFormData} />
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={onChangeFormData} />
                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" value={formData.stock} onChange={onChangeFormData} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category_id" value={formData.category_id} onChange={onChangeFormData} />
                    <label htmlFor="specs">Specs:</label>
                    <textarea id="specs" name="specs" value={formData.specs} onChange={onChangeFormData} />
                    <label htmlFor="warranty">Warranty:</label>
                    <input type="number" id="warranty" name="warranty" value={formData.warranty} onChange={onChangeFormData} />
                    <label htmlFor="desc">Description:</label>
                    <textarea id="desc" name="description" value={formData.description} onChange={onChangeFormData} />
                    <button type='submit'>Save changes</button>
                </fieldset>
            </form>}

        </div>
    )
}

export default EditProduct