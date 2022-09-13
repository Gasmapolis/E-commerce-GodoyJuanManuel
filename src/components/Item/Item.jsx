import React from 'react';
import Card from 'react-bootstrap/Card';
import BotonDetails from '../BotonDetails/BotonDetails';
import './Item.css'
const Item = ({name,imagen, stock, link}) => {

return(
    
        <div className=''>

        <Card className=' bg-transparent'>
        <Card.Body className=' text-center'>
            <Card.Title className='nameProducto text-light'><span className='name'>{name}</span></Card.Title>
            <Card.Img  variant="top" src={imagen} className='imgProducto container border-2 border border-info' />
            <Card.Text className=''>Stock Disponible {stock}</Card.Text>
            <BotonDetails link={link} />
        </Card.Body>
        </Card>
        </div>

);
};

export default Item;

