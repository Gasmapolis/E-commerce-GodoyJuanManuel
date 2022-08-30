import ItemCard from '../Item/Item'
import './ItemListContainer.css'
const ItemListContainer = ({greeting}) => {
    return(
        <div className="productos row ps-5">
                <h2 className='col-md-12 mt-0'>{greeting}</h2>  
            
        <ItemCard name="PULSERAS" stock="7" initial="1" /> 
        <ItemCard name="RELOJ DIGITAL" stock="8" initial="1" /> 
        <ItemCard name="MOCHILAS" stock="5" initial="1" /> 
        </div>
    )
}
export default ItemListContainer