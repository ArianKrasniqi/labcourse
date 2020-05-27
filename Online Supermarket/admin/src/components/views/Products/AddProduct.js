import React, { useState } from 'react';
import { Typography, Button, Form, Input } from 'antd';
import PhotoUpload from '../../utils/PhotoUpload';
import Axios from 'axios';
import Categories from './CreateCategory';

const { Title } = Typography;
const { TextArea } = Input;

const Discounts = [
    { key: 1, value: 5},
    { key: 2, value: 10},
    { key: 3, value: 15},
    { key: 4, value: 20},
    { key: 5, value: 25},
    { key: 6, value: 30},
    { key: 7, value: 35},
    { key: 8, value: 40},
    { key: 9, value: 45},
    { key: 10, value: 50},
]

function CreateProduct(props) {

    const [NameValue, setNameValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [PriceValue, setPriceValue] = useState(0);
    const [DiscountValue, setDiscountValue] = useState(1);
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

    const onDiscountsChange = (event) => {
        setDiscountValue(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if( !NameValue || !DescriptionValue || !PriceValue || !DiscountValue || !Images ) {
            return alert('Mbushni te gjitha fushat e kerkuara!');
        } 

        const variables = {
            writer: props.user.userData._id,
            title: NameValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            discount: DiscountValue,
        }

        // to save product in server
        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if(response.data.success) {
                    alert('Produkti u shtua me sukses')
                    props.history.push('/allproducts')
                } else {
                    alert('Probleme teknike, produkti nuk u shtua')
                }
            })
    }

  return (
    <div style={{ maxWidth: '700px', margin: '30px auto'}}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Title level={2}>Shto Produkt</Title>
        </div>
        
        <Form onSubmit={onSubmit}>
            <Button style={{ marginRight: '110px'}} href='/categories'>SHTO KATEGORI</Button> 
            <Button style={{ marginRight: '50px'}} href='/manageproduct'>MENAXHO PRODUKTET</Button>
            <Button style={{ marginLeft: '50px'}} href='/allproducts'>TE GJITHA PRODUKTET</Button>
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
                    KATEGORIA
                </option>
            </select>
            <br />
            <br />
            <select onChange={onDiscountsChange}>
                {Discounts.map(item => (
                    <option key={item.key} value={item.key}> {item.value}% </option>
                ))}
            </select>
            <br />
            <br />

            <div style={{ textAlign: 'center' }}>
                <Button onClick={onSubmit}>
                    Shto Produktin
                </Button>
            </div>
        </Form>
    </div>
  )
}

export default CreateProduct