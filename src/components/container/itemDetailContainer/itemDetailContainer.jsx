import ItemDetails from "../../ItemDetails/ItemDetails"

const ItemDetailContainer = (title, stock, imagen) => {
    return (
        <>
        <div className="container p-3 justify-content-between d-flex">
            <ItemDetails name={title} stock={stock} imagen={imagen}/>
        </div>
        </>
    )
}

export default ItemDetailContainer