import React, { useEffect, useState } from 'react';
import { Typography, Button, Form, Row, Card, Col } from 'antd';
import Axios from 'axios';
import ImageSlider from '../../utils/ImageSlider';

const { Meta } = Card;

const { Title } = Typography;

function AllProducts() {

    const [Products, setProducts] = useState([])

    useEffect(() => {   
        Axios.post('/api/product/getProducts', )
            .then(response => {
                if(response.data.success) {
                    setProducts(response.data.products);

                    console.log(response.data.products);
                } else {
                    alert('Gabime ne marrjen e te dhenave');
                }
            })

    }, [])

    const renderCards = Products.map((product, index) => {
        
        return <Col lg={6} md={8} xs={24}>
            <Card 
                hoverable={true} 
                cover={<ImageSlider images={product.images} />}
            >
                <Meta
                    title={product.title}
                    description={product.description}
                />
            </Card>
        </Col>
    }) 


    return (
        <div style={{ maxWidth: '700px', margin: '30px auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <Title level={2}>Te gjitha produktet</Title>
            </div>
            
            <Form>
                <Button style={{ marginRight: '115px'}} href='/products'>SHTO PRODUKTE</Button> 
                <Button style={{ marginRight: '60px'}} href='/manageproduct'>MENAXHO PRODUKTET</Button>
                <Button style={{ marginLeft: '70px'}} href='/categories'>SHTO KATEGORI</Button>
                <br />
                <br />
                <hr />
                <br />
                <label>Zgjedh Kategorine </label>
                <br />
                <br />
                <select>
                        <option key value >
                            KATEGORIA
                        </option>
                </select>
                <br /> 
                <br />
                {Products.length === 0 ? 
                    <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                        <h2>Nuk ka produkte te regjistruara</h2>
                    </div>
                    :
                    <div >
                        <Row gutter={[ 16,16 ]}>
                            {renderCards}
                        </Row>
                    </div>
                }
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button>Shiko me shume</button>
                </div>
            </Form>
        </div>
    )
}

export default AllProducts
