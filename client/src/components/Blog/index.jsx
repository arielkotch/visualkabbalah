import {
    Container,
    Button,
    Nav,
    Col,
    Image,
    Row
} from 'react-bootstrap';
import {truncate, isEqual} from 'lodash';
import {Card} from 'components/Blog/styles.jsx';
import {Padding} from 'components/Styled/Headers/index.jsx';
import {Subpage} from 'components/Blog/Subpage/index.jsx'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const BLOG_LENGTH = 500;

export class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'parsha'
        }
    }

    filterByCategory = ({posts, selector}) => {
        return posts.filter(({body, title, image, category}) => {
            if (isEqual(category, this.state.category)) {
                return true;
            } else {
                return false;
            }
        })
    }
    handleSelect(eventKey) {
        this.setState({category: eventKey})
    }
    categories = () => (
        <Nav
            variant="pills"
            defaultActiveKey="#first"
            onSelect={k => this.handleSelect(k)}>
            <Padding right='7em'/> {this
                .props
                .categories
                .map(({
                    display,
                    eventKey,
                    href
                }, index) => (
                    <Nav.Item>
                        <Nav.Link eventKey={eventKey} href={href}>{display}</Nav.Link>
                    </Nav.Item>
                ))
}
            <Padding bottom='3em'/>
        </Nav>
    );
    linkSubPage = () => {
        console.log('query')
        return (
            <Query query={gql(`
            query blog{
                blog{
                  id
                  body
                  image
                  title
                }
              }
            `)}>
                {({data, loading, error}) => {
                    if (loading)
                        return "Loading...";
                    if (error)
                        return `Error! ${error.message}`;
                    console.log(data)
                    return (<Subpage posts={data.blog}/>);
                }}
            </Query>
        )
    }
    render() {
        return (
            <Container>
                {this.categories()}
                {this
                    .filterByCategory({posts: this.props.posts, selector: 'parsha'})
                    .map(({
                        body,
                        title,
                        image,
                        category
                    }, index) => <React.Fragment>

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

                                        <Button variant="primary" onClick={() => this.linkSubPage()}>  <Link style={{'color':'#ffffff'}} to={`/blog/id_of_blog_test_REPLACE`}>
                                        Full Post</Link></Button>

                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Padding bottom='16px'/>
                    </React.Fragment>)}
            </Container>
        );
    }
}
