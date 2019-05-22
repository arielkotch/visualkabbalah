import React from 'react';
import {Badge,Button} from './styled.js';

export const CustomBadge = ({variant="light",buttonVariant="primary"}) => {
    return (
        <React.Fragment>
            <Button variant={buttonVariant}>
                Profile
                <Badge variant={variant}>9</Badge>
                <span className="sr-only">unread messages</span>
            </Button>
        </React.Fragment>
    );
}
