import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Typography, Button, Descriptions } from 'antd';

const { Title } = Typography;

function profile(props) {

    // const userId = props.match.params.userId
    // const [User, setUser] = useState([]);

    // useEffect(() => {
    //     Axios.get(`/api/users/getUsers_by_id?id=${userId}&type=single`)
    //         .then(response => {
    //             setUser(response.data[0]);
    //         })
    // }, [])
    
  return (
    <div style={{ maxWidth: '700px', margin: '30px auto'}}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Title level={2}>Profili juaj</Title>
        </div>
        <div>
        <Descriptions title="Te dhenat e juaja">
            <Descriptions.Item label="Emri dhe Mbiemri"> {} </Descriptions.Item>
            <Descriptions.Item label="Email"> {} </Descriptions.Item>
            <Descriptions.Item label="Numri telefonit"> {} </Descriptions.Item>
            <Descriptions.Item label="Pershkrimi"> {} </Descriptions.Item>
        </Descriptions>
       </div>
    </div>
  )
}

export default profile; 