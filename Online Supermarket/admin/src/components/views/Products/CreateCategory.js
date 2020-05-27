import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import Axios from 'axios';

const { Title } = Typography;

function CreateCategory(props) {
  const [CategoryValue, setCategoryValue] = useState("");
  const [SubCategoryValue, setSubCategoryValue] = useState("");


  const onCategoryChange = (event) => {
    setCategoryValue(event.currentTarget.value)
  }

  const onSubCategoryChange = (event) => {
    setSubCategoryValue(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if( !CategoryValue ) {
        return alert('Kategoria e zbrazet!!!');
    }

    console.log("U shtua kategoria");
    
    const variables = {
      writer: props.user.userData._id,
      category: CategoryValue,
      subcategory: SubCategoryValue,
  }

  // to save category in server
  Axios.post('/api/categories/uploadCategory', variables)
      .then(response => {
          if(response.data.success) {
              alert('Kategoria u shtua me sukses')
              props.history.push('/allproducts')
          } else {
              alert('Probleme teknike, kategoria nuk u shtua')
          }
      })
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
          <Button onClick={onSubmit}>
              Shto Kategorine
          </Button>
          </div>
      </Form>
  </div>
)
}

export default CreateCategory
