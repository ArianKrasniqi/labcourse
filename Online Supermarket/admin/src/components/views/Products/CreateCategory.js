import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';

const { Title } = Typography;

function CreateCategory() {
  const [CategoryValue, setCategoryValue] = useState("");
  const [SubCategoryValue, setSubCategoryValue] = useState("");


  const onCategoryChange = (event) => {
    setCategoryValue(event.currentTarget.value)
  }

  const onSubCategoryChange = (event) => {
    setSubCategoryValue(event.currentTarget.value)
  }

return (
  <div style={{ maxWidth: '700px', margin: '30px auto'}}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Title level={2}>Shto Kategori</Title>
      </div>
      
      <Form>
          <Button style={{ marginRight: '100px'}} href='/products'>SHTO PRODUKTE</Button> 
          <Button style={{ marginRight: '30px'}} href='/manageproduct'>MENAXHO PRODUKTET</Button>
          <Button style={{ marginLeft: '70px'}} href='/allproducts'>TE GJITHA PRODUKTET</Button>
          <br />
          <br />
          <hr />
          <label>Emri Kategorise</label>
          <Input 
              onChange={onCategoryChange}
              value={CategoryValue}
          />
          <br />
          <br />
          <label>Nen Kategoria</label>
          <Input 
              onChange={onSubCategoryChange}
              value={SubCategoryValue}
          />
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
          <Button>
              Shto Kategorine
          </Button>
          </div>
      </Form>
  </div>
)
}

export default CreateCategory
