import React, { useEffect, useState } from 'react'
import { Descriptions, Button } from 'antd'

function ProductInfo(props) {

    const [Product, setProduct] = useState({});

    useEffect(() => {
        
        setProduct(props.detail)

    }, [props.detail])

  return (
    <div>
        <Descriptions title="Detajet e Produktit">
            <Descriptions.Item label="Cmimi"> {Product.price} </Descriptions.Item>
            <Descriptions.Item label="Shitjet"> {Product.sold} </Descriptions.Item>
            <Descriptions.Item label="Zbritja"> {Product.discount} </Descriptions.Item>
            <Descriptions.Item label="Pershkrimi"> {Product.description} </Descriptions.Item>
            </Descriptions>
            <br/> <br/><br/> <br/> 
            <div style={{ display: 'flex', justifyContent: 'center' }}> 
                <Button 
                    size="large" 
                    shape="round" 
                    type="danger"
                    href='/allproducts'
                >
                    Kthehu tek te gjitha produktet
                </Button>
            </div>
    </div>
  )
}

export default ProductInfo