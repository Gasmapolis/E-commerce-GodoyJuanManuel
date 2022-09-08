import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/Itemcount';
import './Item.css'
const Item = ({name,imagen, stock}) => {

return(
    
        <div className=''>

        <Card className=' bg-transparent'>
        <Card.Body className=' text-center'>
            <Card.Title className='nameProducto text-light'>{name}</Card.Title>
            <Card.Img  variant="top" src={imagen} className='imgProducto container border-2 border border-info' />
            <Card.Text className=''>Stock Disponible {stock}</Card.Text>
            <ItemCount stock={stock}/>
        </Card.Body>
        </Card>
        </div>

);
};

export default Item;

