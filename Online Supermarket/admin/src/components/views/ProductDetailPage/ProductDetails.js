import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function ProductDetails(props) {

    const productId = props.match.params.productId
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0]);
            })
    }, [])

  return (
    <div>
      ProductDetails
    </div>
  )
}

export default ProductDetails
