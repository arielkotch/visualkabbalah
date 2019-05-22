
import {
    Container,
    Nav,
    Col,
    Image,
    Row,
    CardDeck
} from 'react-bootstrap';
import {Card} from 'components/Blog/styles.jsx';
import shared from 'i18n/shared';
import {Padding} from 'components/Styled/Headers/index.jsx';
import React from 'react';
import {Layout} from 'components/Layout/index.jsx';
import {CustomBadge} from 'components/Badge/index.jsx'
import {Badge} from 'react-bootstrap'
const renderViewCounter=()=>(
    <React.Fragment>
        <span style={{
            'font-family':'ubuntu',
            'font-size':'13px'
            }}>Views</span>  
     <Badge variant="info">9</Badge>
    </React.Fragment>
)

export const Blog = ({posts}) => {
    return (
        <Container>
            {posts.map(({body, title, image}) => (
                <React.Fragment>

                    <Card>
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={3}>
                                    <Image fluid src={(shared.image)}/>
                                </Col>
                                <Col>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        
                                    </Card.Text>
                                </Col>
                            </Row>
                            { renderViewCounter()}

                        </Card.Body>
                    </Card>
                    <Padding
                        bottom='16px'
                    />
                </React.Fragment>
                
            ))}
            
        </Container>
    );
}
const renderHeader = () => (
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
)
export default Blog;