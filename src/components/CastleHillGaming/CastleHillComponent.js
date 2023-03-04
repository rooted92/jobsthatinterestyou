import 'bootstrap/dist/css/bootstrap.min.css';
import './CastleHill.css'
import { Nav, Container, Row, Col } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent';

function CastleHillJob() {
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
                    <ButtonComponent />
                </Container>
            </Nav>
            <div className='container d-flex justify-content-center my-5'>
                <div className='jobContainer'>
                    <h2 className='mt-3 mx-5'>Castle Hill Gaming</h2>
                    <h4 className='mx-5'>Junior Web Developer</h4>
                    <Container className='mt-5'>
                        <Row>
                            <Col className='col-1'></Col>
                            <Col className='col-5'>
                                <h4 className='jobHeaderColor'>Why I want to work there!</h4>
                                <p>
                                    This position interested me because part of me would like to try being part a team that develops games. I think it would be fun to see how Casino games are prgrammed and learn what kind of algorithms are used to keep players playing the slot machine. I don't like that I would have to relocate to Virginia, but I think the opportunity to learn C# programming and the .Net framework would be an exciting venture. Overall, Castle Hill Gaming is a well-respected company in the casino gaming industry, known for its innovative approach to game development and its commitment to delivering high-quality, engaging games and I would like to be an asset in a company that values high standards and craftsmanship.
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
                                            <li>.Net Framework</li>
                                            <li>Flash, GoDot, or Unity</li>
                                            <ul className='mt-2'>
                                                <h6 className='jobHeaderColor'>Understanding of:</h6>
                                                <li>Client-Server Development</li>
                                                <li>Object-Oriented Programming</li>
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
                                <h4 className='jobHeaderColor'>Personal Goals as a Dev working at Castle Hill Gaming</h4>
                                <p>
                                As a software developer at Castle Hill Gaming, my goals would be to create innovative and engaging games, explore new technologies and approaches to game development, and contribute to the company's culture of innovation and creativity. I would also be interested in collaborating with talented professionals, learning from experienced developers, and taking advantage of opportunities for ongoing education and training to advance my career and improve my skills. Ultimately, I would strive to make meaningful contributions to the company's game development efforts and help to build a strong, collaborative, and innovative company culture.
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
                                    I don't meet all the requirements to work for Castle Hill Gaming, but my goal would be to learn Unity again and build a solid foundation on game development.
                                </p>
                            </Col>
                            <Col className='col-5 d-flex flex-column align-items-end'>
                                <h4 className='jobHeaderColor'>Links</h4>
                                <p>
                                    <a href='https://www.castlehillgaming.com/' rel='noreferrer' target={'_blank'}>Castle Hill Gaming</a>
                                </p>
                                <p>
                                    <a href='https://www.glassdoor.com/Job/santa-rosa-junior-software-developer-jobs-SRCH_IL.0,10_IC1147518_KO11,36.htm?clickSource=searchBox' rel='noreferrer' target={'_blank'}>Junior Software Engineer Job Listing</a>
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

export default CastleHillJob;