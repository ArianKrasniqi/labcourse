import React, { useState, useEffect } from 'react'
import { Typography, Button, Form, Checkbox, Collapse} from 'antd';
import Axios from 'axios';

const { Title } = Typography;
const { Panel } = Collapse;

function ManageProduct() {

  const [Categories, setCategories] = useState([]);

useEffect(() => {  

  const variables = { }

  getCategories(variables)
}, []) 

const getCategories = (variables) => {
  Axios.post('/api/categories/getCategories', variables )
  .then(response => {
      if(response.data.success) {
          setCategories(response.data.categories);

      } else {
          alert('Gabime ne marrjen e te dhenave');
      }
  })
}

const filterCategory = Categories.map((category, index) => {
        
  return (
          <React.Fragment key={index}>
              <Checkbox
                  type="checkbox"
              >
                  <span>{category.category}</span>
              </Checkbox>
          </React.Fragment>
  )
})

  return (
    <div style={{ maxWidth: '700px', margin: '30px auto'}}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Title level={2}>Menaxho Produktet</Title>
        </div>
        <Form>
            <Button style={{ marginRight: '115px'}} href='/products'>SHTO PRODUKTE</Button> 
            <Button style={{ marginRight: '60px'}} href='/categories'>SHTO KATEGORI</Button>
            <Button style={{ marginLeft: '70px'}} href='/allproducts'>TE GJITHA PRODUKTET</Button>
            <br /> <br />
            <hr />
            <br />
            <label>Zgjedh Kategorine </label>
            <br/>
            <div>
                <Collapse defaultActiveKey={['0']}>
                    <Panel headerkey="1">
                        {filterCategory}
                    </Panel>    
                </Collapse>
            </div>
        </Form>
    </div>
  )
}

export default ManageProduct