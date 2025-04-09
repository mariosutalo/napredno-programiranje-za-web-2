import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const EditProduct = () => {
    const { id } = useParams()
    const { data, error, isPending } = useFetch(`http://localhost:3000/products/productDetails?id=${id}`)

    return (
        <div>
            {error && <p>Error fetching</p>}
            {isPending && <p>Loading</p>}
            {data && <p>{data.name}</p>}
        </div>
    )
}

export default EditProduct