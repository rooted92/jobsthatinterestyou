import 'bootstrap/dist/css/bootstrap.min.css';
import './IBM.css'
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
                    <h2 className='mt-3 mx-5'>IBM</h2>
                    <h4 className='mx-5'>Frontend Developer</h4>
                    <Container className='mt-5'>
                        <Row>
                            <Col className='col-1'></Col>
                            <Col className='col-5'>
                                <h4 className='jobHeaderColor'>Why I want to work there!</h4>
                                <p>
                                    As an aspiring frontend developer, I am drawn to the opportunities that IBM can provide. IBM's global presence and diverse network would give me the chance to work with a broad range of people and clients from all over the world, which would be a valuable experience for me as a developer.
                                </p>
                                <p>
                                    IBM's commitment to ongoing education and training is also appealing to me. I am eager to stay up-to-date with the latest web technologies, and I appreciate the value of ongoing education and training for career growth.
                                </p>
                                <p>
                                    Furthermore, working on impactful and meaningful projects is significant to me, and IBM's involvement in various projects and initiatives aligns with my values. I would be excited to contribute my skills to projects that have a positive impact on the world.
                                </p>
                                <p>
                                    Lastly, IBM's benefits and perks, such as flexible work arrangements and healthcare benefits, would contribute to a healthy work-life balance, and would be crucial as I strive to grow as a developer. Overall, I believe that IBM would be a great place for me to develop my skills and make a positive impact on the world through my work.
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
                                            <li>Current stack meets their requirements</li>
                                            <ul className='mt-2'>
                                                <h6 className='jobHeaderColor'>Understanding of:</h6>
                                                <li>Automation Testing Framework</li>
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
                                <h4 className='jobHeaderColor'>Personal Goals as a Dev working at IBM</h4>
                                <p>
                                    If I were to be hired as an intern at IBM, I would have several goals that I would like to accomplish. Firstly, I would want to gain experience in working with a large-scale, multinational corporation and understand how to work collaboratively with diverse teams across different time zones. Secondly, I would want to expand my technical skills and deepen my knowledge of frontend development through hands-on projects and mentorship from experienced developers. Lastly, I would be interested in contributing to IBM's projects in a meaningful way, either by improving user experiences or developing new features that align with IBM's mission and values. Through achieving these goals, I believe I can grow as a developer and make a positive impact on IBM's business objectives.
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
                                    I am super exicited about this internship program provided by IBM because I actually meet 95% of their requirements! My current stack meets all their expectations. I would just need to learn Automation Testing which I believe is something they would train entry-level developers on.
                                </p>
                            </Col>
                            <Col className='col-5 d-flex flex-column align-items-end'>
                                <h4 className='jobHeaderColor'>Links</h4>
                                <p>
                                    <a href='https://www.ibm.com/us-en?ar=1' rel='noreferrer' target={'_blank'}>IBM</a>
                                </p>
                                <p>
                                    <a href='https://careers.ibm.com/job/17897292/2023-internship-frontend-developer-san-jose-ca/?codes=WEB_SEARCH_NA' rel='noreferrer' target={'_blank'}>Frontend Developer Job Listing</a>
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