import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({titulo}) =>{
    const [productos, setProductos] = useState([])
    const traerProductos = async () => {
        try{
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=juegosdemesa')
            const data = await response.json();
            setProductos(data.results);
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        traerProductos()
    },[])
    console.log(productos)
    console.log("aca estoy")
    return (
        <>
        <div>
            <h2>{titulo}</h2>
        </div>
        {productos.map((producto) => {
            return(
                <>
                <div className='cardProducto container col-md-3 m-2'>
                <Item name={producto.title} imagen={producto.thumbnail} stock='8' />
            
                </div> 
                </>
            )
        })}
        </>
    )
};

export default ItemList;