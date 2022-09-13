import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/Itemcount";

const ItemDetails = ({name, stock, imagen }) => {
        return(
          <>
            <div className="">
              <Card className=" bg-transparent">
                <Card.Body className=" text-center">
                  <Card.Title className="nameProducto text-light">
                    <span className="name">{name}</span>
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src={imagen}
                    className="imgProducto container border-2 border border-info"
                  />
                  <Card.Text className="">Stock Disponible {stock}</Card.Text>
                  <ItemCount stock={stock} />
                </Card.Body>
              </Card>
            </div>
          </>
        
  );
};

//   const [detalles, setDetalles] = useState();
//   const callDetails = async () => {
//     try{
//         const response = await fetch('https://api.mercadolibre.com/sites/'${})
//         const data = await response.json();
//         setDetalles(data);
//     }catch(e){
//         console.log(e)
//     }
// }
// console.log(setDetalles)
//   useEffect(() => {
//     callDetails()
//   })

//   console.log(detalles);

//   return (
//     <div className='cardProducto container col-md-3 col-sm-4 m-2'>
//                 <Item name={detalle.title} imagen={detalle.thumbnail} stock={detalle.sold_quantity} />

//                 </div>
//   );
// };

export default ItemDetails;
