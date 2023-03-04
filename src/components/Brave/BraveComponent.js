import 'bootstrap/dist/css/bootstrap.min.css';
import './Brave.css'
import { Nav, Container, Row, Col } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent';

function BraveJob() {
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
                    <h2 className='mt-3 mx-5'>Brave</h2>
                    <h4 className='mx-5'>Junior Web Developer</h4>
                    <Container className='mt-5'>
                        <Row>
                            <Col className='col-1'></Col>
                            <Col className='col-5'>
                                <h4 className='jobHeaderColor'>Why I want to work there!</h4>
                                <p>
                                    As an aspiring software developer, I would be interested in working at Brave for several reasons. First and foremost, I am passionate about building technology that makes a positive impact on people's lives, and Brave's focus on privacy, security, and user control aligns with those values.
                                </p>
                                <p>
                                    Additionally, Brave's use of open-source technology and commitment to transparency and accountability in the online advertising industry is something I find compelling. I believe that the current advertising model on the web is broken and that Brave's approach has the potential to be a disruptive force for good in the industry.
                                </p>
                                <p>
                                    Brave also has a built-in cryptocurrency wallet and supports a rewards system based on its Basic Attention Token (BAT) cryptocurrency. Users can choose to view ads and earn BAT as a reward, which they can then use to support content creators or to redeem for other rewards. I think this a very ingenius way of giving power back to the consumer as opposed to a company selling your attention via ads.
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
                                            <li>TypeScript</li>
                                            <li>GoLang</li>
                                            <ul className='mt-2'>
                                                <h6 className='jobHeaderColor'>Understanding of:</h6>
                                                <li>RESTful Apis</li>
                                                <li>Asynchronous Programming</li>
                                                <li>JWTs</li>

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
                                <h4 className='jobHeaderColor'>Personal Goals as a Dev working at Brave</h4>
                                <p>
                                    As an aspiring developer at Brave, my goals would be to contribute to the development of the company's open-source software, with a focus on enhancing privacy and security, and exploring new uses for blockchain technology. Additionally, I would seek out mentorship opportunities and take advantage of the company's commitment to ongoing education and training to improve my skills as a developer and explore new technologies like Rust or functional programming.
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
                                    My current qualifications are not up to par for this position at Brave, but somethings for me to work on and learn would be security and privacy especially in relation to web3.
                                </p>
                            </Col>
                            <Col className='col-5 d-flex flex-column align-items-end'>
                                <h4 className='jobHeaderColor'>Links</h4>
                                <p>
                                    <a href='https://brave.com/' rel='noreferrer' target={'_blank'}>Brave</a>
                                </p>
                                <p>
                                    <a href='https://www.linkedin.com/jobs/view/3499068108/?refId=IpVOWp7wG7od0O81VkXr1w%3D%3D&trackingId=3p0vfFB3mKdxmZaSvNAWbw%3D%3D' rel='noreferrer' target={'_blank'}>Web3 Engineering Intern Job Listing</a>
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

export default BraveJob;