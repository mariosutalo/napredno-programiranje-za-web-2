import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import ProductForm from '../../components/productForm/ProductForm'

const EditProduct = () => {
    const { id } = useParams()
    const { data, error, isPending } = useFetch(`http://localhost:3000/products/productDetails?id=${id}`)
    const [formData, setFormData] = useState(null)

    useEffect(() => {
        if (data) {
            setFormData(data)
        }
    }, [data])

    return (
        <div>
            {error && <p>Error fetching</p>}
            {isPending && <p>Loading</p>}
            {formData && <ProductForm formData={formData} setFormData={setFormData} productId={id} />}
        </div>
    )
}

export default EditProduct