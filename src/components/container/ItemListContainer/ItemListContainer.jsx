import React from 'react';
import ItemList from '../../ItemList/ItemList';

const ItemListContainer = ({title}) =>{
    return (
        <div className='container'>
        <h1 className='text-center p-3'>{title}</h1>
        <div className='row justify-content-center'><ItemList /></div>
        
        </div>
    );
};

export default ItemListContainer;
