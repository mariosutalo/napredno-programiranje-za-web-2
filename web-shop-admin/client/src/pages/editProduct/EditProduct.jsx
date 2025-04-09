import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import styles from './EditProduct.module.css'

const EditProduct = () => {
    const { id } = useParams()
    const { data, error, isPending } = useFetch(`http://localhost:3000/products/productDetails?id=${id}`)

    return (
        <div>
            {error && <p>Error fetching</p>}
            {isPending && <p>Loading</p>}
            {data && <form className={styles.product_form}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={data.name} />
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={data.price} />
                <label htmlFor="stock">Stock:</label>
                <input type="number" id="stock" name="stock" value={data.stock}/>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={data.category_id}/>
                <label htmlFor="specs">Specs:</label>
                <textarea id="specs" name="specs" value={data.specs}/>
                <label htmlFor="warranty">Warranty:</label>
                <input type="number" id="warranty" name="warranty" value={data.warranty}/>
                <label htmlFor="desc">Description:</label>
                <textarea id="desc" name="desc" value={data.description}/>
                <button type='submit'>Save changes</button>
            </form>}
            
        </div>
    )
}

export default EditProduct