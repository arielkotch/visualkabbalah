import React from 'react';
import {Card} from './styled.js';
import {Padding} from 'components/Styled/Headers/index.jsx';

/**
 *
 *
 * @param {any} {
 *     title,
 *     body,
 *     subtitle,
 *     user
 * }
 * @returns {Component}
 */
export const CardView = ({
    title,
    body,
    subtitle,
    user,
    ...props
}) => {
    return (
        <React.Fragment>
            <Card {...props}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                        {body}
                    </Card.Text>
                    {(user)
                        ? (
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    {user}
                                </footer>
                            </blockquote>
                        )
                        : (null)
}
                </Card.Body>
            </Card>
            <Padding bottom={'20px'}/>
        </React.Fragment>
    );
}
