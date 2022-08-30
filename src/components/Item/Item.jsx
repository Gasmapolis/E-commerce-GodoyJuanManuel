import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCard = ({name, stock}) => {
  const [cantidad, setCantidad] = useState(0)
  return (
    <div className='col-md-4'>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Stock Disponible {stock}</Card.Text>
        <Button variant="danger" className=' m-auto' onClick={() =>{
        cantidad == '0'?console.log("CLICK"):setCantidad(cantidad - 1)
        }}>-</Button>
        <span className='p-5'>{cantidad}</span>
        <Button variant="primary" className='m-auto' onClick={() =>{
        cantidad == stock?console.log("CLICK"):setCantidad(cantidad + 1)
        }}>+</Button>
        <Button className='p-2' onClick={() =>{setCantidad(cantidad*0)}}>AGREGAR AL CARRITO</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ItemCard;

