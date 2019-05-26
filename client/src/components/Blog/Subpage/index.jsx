import React from 'react';
import {Container,Button, Nav, Col, Image, Row} from 'react-bootstrap';

export const Subpage = ({posts}) => {
    return posts.map(({
        body,
        title,
        image,
        category
    }, index) => <React.Fragment>
        <Button variant="primary" href={"#"}>back</Button>
        <Image fluid src={image + '/40px200'}/>
        <div>{title}</div>
        <div>{body}</div>
    </React.Fragment>)
}

export default Subpage;