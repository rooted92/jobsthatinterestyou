import { Button, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';

function Buttons() {
    return (
        <Row>
            <Col className='col-1'></Col>
            <Col className='col-2 d-flex flex-row justify-content-center'><Button className='btn btn-dark jobsBtn' as={Link} to='/'>SFMOMA</Button></Col>
            <Col className='col-2 d-flex flex-row justify-content-center'><Button className='btn btn-dark jobsBtn' as={Link} to='/OxLabs'>0xLabs</Button></Col>
            <Col className='col-2 d-flex flex-row justify-content-center'><Button className='btn btn-dark jobsBtn' as={Link} to='/Brave'>Brave</Button></Col>
            <Col className='col-2 d-flex flex-row justify-content-center'><Button className='btn btn-dark jobsBtn' as={Link} to='/CastleHill'>Castle Hill Gaming</Button></Col>
            <Col className='col-2 d-flex flex-row justify-content-center'><Button className='btn btn-dark jobsBtn' as={Link} to='/IBM'>IBM</Button></Col>
            <Col className='col-1'></Col>
        </Row>
    );
}

export default Buttons;