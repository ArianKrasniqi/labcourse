import React, { useState } from 'react';
import { Typography, Button, Form, Input } from 'antd';
import PhotoUpload from '../../utils/PhotoUpload';

const { Title } = Typography;
const { TextArea } = Input;

function CreateProduct() {

    const [NameValue, setNameValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [PriceValue, setPriceValue] = useState(0);

    const [Images, setImages] = useState([]);

    const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        console.log(newImages);
        setImages(newImages)
    }

  return (
    <div style={{ maxWidth: '700px', margin: '30px auto'}}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Title level={2}>Shto Produkt</Title>
        </div>
        
        <Form>
            <Button style={{ marginRight: '90px'}}>SHTO KATEGORI</Button> 
            <Button style={{ marginRight: '40px'}}>MENAXHO PRODUKTET</Button>
            <Button style={{ marginLeft: '80px'}}>TE GJITHA PRODUKTET</Button>
            <br />
            <br />
            <hr />
            <br />
            <PhotoUpload refreshFunction={updateImages}/>
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
                Shto Produktin
            </Button>
        </Form>
    </div>
  )
}

export default CreateProduct