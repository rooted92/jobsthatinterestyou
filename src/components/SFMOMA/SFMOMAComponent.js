import 'bootstrap/dist/css/bootstrap.min.css';
import './SFMOMA.css'
import { Nav, Container, Row, Col } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent';

function SFMOMAJob() {
    return (
        <>
            <Nav>
                <Container className='mt-3'>
                    <Row>
                        <Col className='col-12'>
                            <h1 className='mx-3'>My Career Bucket List:</h1>
                            <h3 className='mx-5'>The 5 Jobs I Can't Wait to Pursue</h3>
                        </Col>
                    </Row>
                </Container>
                <Container className='mt-4'>
                    <ButtonComponent/>
                </Container>
            </Nav>
            <div className='container d-flex justify-content-center my-5'>
                <div className='jobContainer'>
                    <h2 className='mt-3 mx-5'>San Francisco Museum of Modern Art</h2>
                    <h4 className='mx-5'>Junior Web Developer</h4>
                    <Container className='mt-5'>
                        <Row>
                            <Col className='col-1'></Col>
                            <Col className='col-5'>
                                <h4 className='jobHeaderColor'>Why I want to work there!</h4>
                                <p>One of the main reason I would like to work at SFMOMA is because of how they
                                    treat their employees. Even team members who work a minimum of 21 hours per
                                    week receive excellent benefits like full medical, dental, and vision coverage as well
                                    as stipends for day care if you have kids. I also like their modern web design and features.
                                    On top of all that you get a super cool view of the city skyline as the museum is located in
                                    heart of San Francisco.
                                </p>
                            </Col>
                            <Col className='col-5'>
                                <h4 className='jobHeaderColor'>What stacks are required?</h4>
                                <Row>
                                    <Col className='col-6'>
                                        <ul>
                                            <h6 className='jobHeaderColor'>My current stack:</h6>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>C#</li>
                                            <li>Bootstrap</li>
                                            <li>React</li>
                                        </ul>
                                    </Col>
                                    <Col className='col-6'>
                                        <ul>
                                            <h6 className='jobHeaderColor'>Stacks I need:</h6>
                                            <li>Angular</li>
                                            <li>.Net Framework</li>
                                            <li>Razor</li>
                                            <li>Azure</li>
                                            <li>jQuery</li>
                                            <ul className='mt-2'>
                                                <h6 className='jobHeaderColor'>Understanding of:</h6>
                                                <li>RESTful Apis</li>
                                                <li>Design Patters</li>
                                            </ul>
                                        </ul>
                                        
                                    </Col>
                                </Row>
                            </Col>
                            <Col className='col-1'></Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col className='col-1'></Col>
                            <Col className='col-10'>
                            <h4 className='jobHeaderColor'>Personal Goals as a Dev working at SFMOMA</h4>
                            <p>
                                I would enjoy being a part of the team that gives space for artists to showcase there talent, whether that is online or in the museum. My interest in art in general comes from the influence of Hip Hop culture during my youth and one of the biggest elements of Hip Hop is Graffitti. Worldwide you see amazing artwork in the streets and by artists unknown. I think it's a shame that their work goes unoticed and also gets scrutnized. So my main goal would be to have a conversation with the lead people at SFMOMA to see how we can provide a place for graffiti artists globally to showcase there incredible art work as well. Online and in the gallery.
                            </p>
                            </Col>
                            <Col className='col-1'></Col>
                        </Row>
                        <hr></hr>
                        <Row className='mb-3'>
                            <Col className='col-1'></Col>
                            <Col className='col-5'>
                                <h4 className='jobHeaderColor'>Assesing My Qualifications for the Position</h4>
                                <p>
                                    Although I do not have the complete skillsets required for this position, I have gained an understanding as to what are the skills companies are looking for. One skillset I'd like to work on is learning the Agile/Scrum development cycles. I know those types of skill are invaluable to a tech company looking to hire an entry-level developer. 
                                </p>
                            </Col>
                            <Col className='col-5 d-flex flex-column align-items-end'>
                                <h4 className='jobHeaderColor'>Links</h4>
                                <p>
                                    <a href='https://www.sfmoma.org/' rel='noreferrer' target={'_blank'}>San Francisco Museum of Modern Art</a>
                                </p>
                                <p>
                                    <a href='https://www.glassdoor.com/Job/santa-rosa-junior-software-developer-jobs-SRCH_IL.0,10_IC1147518_KO11,36.htm?clickSource=searchBox' rel='noreferrer' target={'_blank'}>Junior Web Developer Job Listing</a>
                                </p>
                            </Col>
                            <Col className='col-1'></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default SFMOMAJob;