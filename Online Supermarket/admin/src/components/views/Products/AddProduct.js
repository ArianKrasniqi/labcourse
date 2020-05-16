import React, { useState } from 'react';
import { Typography, Button, Form, Input } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

function CreateProduct() {

    const [NameValue, setNameValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [PriceValue, setPriceValue] = useState(0);

    const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

  return (
    <div style={{ maxWidth: '700px', margin: '30px auto'}}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Title level={2}>Add Product</Title>
        </div>
        
        <Form onSubmit >

            <Button>ADD CATEGORY</Button>
            <Button>MANAGE PRODUCT</Button>
            <Button> PRODUCTS</Button>
            <br />
            <br />
            <label>Emri Produktit</label>
            <Input 
                onChange={onNameChange}
                value={NameValue}
            />
            <br />
            <br />
            <label>Pershkrimi Produktit</label>
            <TextArea 
                onChange={onDescriptionChange}
                value={DescriptionValue}
            />
            <br />
            <br />
            <label>Cmimi Produktit(euro)</label>
            <Input 
                onChange={onPriceChange}
                value={PriceValue}
                type="number"
            />
            <br />
            <br />
            <select>
                <option key value >

                </option>
            </select>
            <br />
            <br />
            <select>
                <option key value >
                    
                </option>
            </select>
            <br />
            <br />

            <Button>
                Add Product
            </Button>
        </Form>
    </div>
  )
}

export default CreateProduct