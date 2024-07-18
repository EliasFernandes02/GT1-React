import Card from 'react-bootstrap/Card';
import Tenis1 from "../../assets/Tenis1.png"
function Props(props) {

    return (
      <>  
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Tenis1} />
            <Card.Body>
              <Card.Title>{props.nome}</Card.Title>
              <Card.Text>
               {props.descricao}
              </Card.Text>
              <Card.Text>
               {props.valor}
              </Card.Text>
            </Card.Body>
          </Card>
      </> 
    )
  }
  
  export default Props
  