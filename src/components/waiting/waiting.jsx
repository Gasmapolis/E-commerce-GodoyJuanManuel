import { Card } from "react-bootstrap"
import './waiting.css'

const Waiting = () =>{
    return (
        <div className=''>

        <Card className=' bg-transparent'>
        <Card.Body className=' text-center'>
            <Card.Title className='nameProducto text-light'><span class="loader"></span></Card.Title>
            <Card.Text className=''></Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}
export default Waiting