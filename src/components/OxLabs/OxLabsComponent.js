import 'bootstrap/dist/css/bootstrap.min.css';
import './OxLabs.css'
import { Nav, Container, Row, Col } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent';

function OxLabsJob() {
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
                    <h2 className='mt-3 mx-5'>OxLabs</h2>
                    <h4 className='mx-5'>Backend Software Engineer</h4>
                    <Container className='mt-5'>
                        <Row>
                            <Col className='col-1'></Col>
                            <Col className='col-5'>
                                <h4 className='jobHeaderColor'>Why I want to work there!</h4>
                                <p>
                                    I would love to work at 0xLabs because they have a great culture centered around an enthusiam for Blockchain Technology. I fully support the idea that the Internet should be and stay centralized. They also have an incredible support system via coaches and mentors. At 0xLabs they provide with an amazing medical benefits package that covers your whole family <strong>AND</strong> they pay for Day Care if you have children!
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
                                            <ul>
                                                <h6 className='jobHeaderColor'>Understanding/Knowledge of:</h6>
                                                <li>Market structures and exchange related concepts</li>
                                                <li>Blockchain technology and cryptoeconomic protocols</li>
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
                                <h4 className='jobHeaderColor'>Personal Goals as a Dev working at 0xLabs</h4>
                                <p>
                                    As an aspiring developer interested in working for a company like 0xLabs, I would be excited about the opportunity to contribute to the development of important infrastructure for the emerging crypto economy. My goals in working for this company would be to:
                                </p>
                                <ol>
                                    <li>
                                        Contribute to the development of the 0x protocol and related technologies to help build a more efficient, transparent, and equitable financial stack.
                                    </li>
                                    <li>
                                        Collaborate with other talented developers and industry experts to innovate and push the boundaries of what's possible in the world of web3.
                                    </li>
                                    <li>
                                         Learn and grow as a developer by working on challenging projects and being part of a team that values continuous learning and improvement.
                                    </li>
                                    <li>
                                        Help 0xLabs to achieve its mission of enabling markets to be created that couldn't have existed before, and in doing so, contribute to the growth and adoption of the crypto economy.
                                    </li>
                                </ol>
                                <p>
                                    Overall, my goal would be to make a meaningful contribution to 0xLabs' mission and help build a better future for the world of finance through innovative technology.
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
                                    Currently I do not meet all of their requirements to become employed with 0xLabs. They did not mention their complete stack but did mention TypeScript. What I plan to do learn TypeScript as well as gain an understaing of Market Structures, Blockchain Technology, and cryptoeconomic protocols. Even though they did not mention it, I know that I will need to learn how to program in Solidity, which is the programming language used to build software on the Etheruem Blockchain.
                                </p>
                            </Col>
                            <Col className='col-5 d-flex flex-column align-items-end'>
                                <h4 className='jobHeaderColor'>Links</h4>
                                <p>
                                    <a href='https://www.0x.org/' rel='noreferrer' target={'_blank'}>0xLabs</a>
                                </p>
                                <p>
                                    <a href='https://www.linkedin.com/jobs/view/3494569090/?alternateChannel=search&refId=lgqDpPN0tCrbN5jU5j8xdw%3D%3D&trackingId=rHfMxKFlSbSoj3pPL4jOgw%3D%3D' rel='noreferrer' target={'_blank'}>Backend Software Engineer Job Listing</a>
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

export default OxLabsJob;