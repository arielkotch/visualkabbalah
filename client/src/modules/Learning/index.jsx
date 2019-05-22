import React from 'react';
import {Panel, Layout} from 'components/index';
import {Title, Landing, Paragraph, Padding, Section} from 'components/Styled/index';
import {pageBackground} from 'theme/index.jsx';
import shared from 'i18n/shared';
import {getAccount, getWords, getLorem} from 'faker/account/index.js';
import {ThemeProvider} from 'styled-components';

class Learning extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                    <Landing background={pageBackground}>
                        <Layout >
                            <Panel>
                                <Padding top='5em'/>
                                <Title fontSize={'1em'}>{'Image goes here'}</Title>
                            </Panel>
                            <Panel>
                                <Padding top='7em'/>
                                <Title position={'left'} fontSize={'3.8em'}>{shared.connect}</Title>
                                <Padding top='0.5em'/>

                                <Paragraph paddingRight='3em' textAlign='left' fontSize='1em'>{shared.message}</Paragraph>
                            </Panel>
                        </Layout>
                    </Landing>
            </React.Fragment>
        );
    }
}
export default Learning;