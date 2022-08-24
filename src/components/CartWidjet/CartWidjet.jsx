import {BsCart3} from 'react-icons/bs'
const CartWidjet = () => {
    return (
        <button className='me-3 mt-2 border-2 border-info bg-dark'>
            <BsCart3 className='text-white-50 m-1'/><span className='text-white-50 m-auto'>3</span>
        </button>
        )
}
 export default CartWidjet;