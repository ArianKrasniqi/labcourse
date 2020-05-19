import React from 'react'
import { Typography, Button, Form } from 'antd';

const { Title } = Typography;

function ManageProduct() {
  return (
    <div style={{ maxWidth: '700px', margin: '30px auto'}}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Title level={2}>Menaxho Produktet</Title>
        </div>
        
        <Form>
            <Button style={{ marginRight: '115px'}} href='/products'>SHTO PRODUKTE</Button> 
            <Button style={{ marginRight: '60px'}} href='/allproducts'>TE GJITHA PRODUKTET</Button>
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
  
        </Form>
    </div>
  )
}

export default ManageProduct
