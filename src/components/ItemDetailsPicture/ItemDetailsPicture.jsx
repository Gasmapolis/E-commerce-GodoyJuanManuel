import { useEffect } from "react"
import { useState } from "react"
import './ItemDetailsPicture.css'
const ItemDetailsPicture = () =>{
    const [pictures, SetPictures] = useState([])
    const callPictures = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/items/MLA815835125')
            const data = await response.json();
            SetPictures(data.pictures);
            
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        callPictures()
        console.log(pictures)
    })

    

    return(
        <div className="contenedor  p-2 d-flex justify-content-between container row">
            {pictures.map((lalala) => {
        return(
            <div className="galeria col-2"><img className="foto container" src={lalala.url} alt="" /></div>
        )
    })}
        </div>
    )
}
export default ItemDetailsPicture