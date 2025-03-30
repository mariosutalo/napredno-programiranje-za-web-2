import React from 'react'
import styles from './productsList.module.css'

const ProductsList = ({ products }) => {
    return (
        <div className={styles.container}>
            {/* <input type="text" className={styles.search_products_input} /> */}
            <div className={styles.table_container}>
                <table className={styles.custom_table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Category</th>
                            <th>Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.category_id}</td>
                                <td>{product.likes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsList