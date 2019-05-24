import {Container, Nav, Col, Image, Row} from 'react-bootstrap';
import {truncate} from 'lodash';
import {Card} from 'components/Blog/styles.jsx';
import {Padding} from 'components/Styled/Headers/index.jsx';
import React from 'react';

const BLOG_LENGTH = 500;
export const Blog = ({posts}) => {
    return (
        <Container>
             <Row>
             <Col md={3}>
             {categories()}
 </Col>
             </Row>
            {posts.map(({body, title, image}) => (
                <React.Fragment>
                    <Card>
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={3}>
                                    <Image fluid src={image + '/40px200'}/>
                                </Col>
                                <Col>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        {truncate(body, {
                                            'length': BLOG_LENGTH,
                                            'separator': ' '
                                        })}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Padding bottom='16px'/>
                </React.Fragment>
            ))}
        </Container>
    );
}
const categories = () => (
    <Nav variant="pills" defaultActiveKey="#first">
        <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#parsha">Parsha</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#topics">
                Topics
            </Nav.Link>
        </Nav.Item>
    </Nav>
);