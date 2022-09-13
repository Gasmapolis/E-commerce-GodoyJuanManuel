import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const BotonDetails = (link) => {
    return(<Container>
        <Row>
          <Link to={`/producto/${link}`}>VER MAS
          </Link>
        </Row>
      </Container>
       )
}
export default BotonDetails