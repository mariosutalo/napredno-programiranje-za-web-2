import React from 'react'
import styles from './ProductsList.module.css'

const ProductsListV2 = ({ products, isOnSale }) => {
    console.log('Props products: ', products)
    return (
        <div className={styles.table_container}>
            <table className={styles.custom_table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Likes</th>
                        <th>Category ID</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.likes}</td>
                            <td>{product.category_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsListV2