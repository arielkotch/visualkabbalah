import React, {Fragment} from 'react';
import {Panel, Layout} from 'components/index';
import {Title, Landing, Paragraph, Padding, Section} from 'components/Styled/index';
import {pageBackground} from 'theme/index.jsx';
import shared from 'i18n/shared';
import {getAccount, getWords, getLorem} from 'faker/account/index.js';
import {ThemeProvider} from 'styled-components';
import {CardView} from 'components/Card/index.jsx';
import {Nav} from 'react-bootstrap';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Blog} from 'components/Blog/index.jsx'
const BLOG = gql( `
query blog{
    blog{
      id
      body
      image
      title
      author
    }
  }
`);
class Zohar extends React.Component {
    render() {
        console.log()
        return (
            <React.Fragment>
             
                <Landing background={pageBackground}>
                    <Layout >

                    <Query query={BLOG}>
                    {({data,loading, error}) => {
                        if (loading) 
                            return "Loading...";
                        if (error) 
                            return `Error! ${error.message}`;
                        
                        return (
                                  <Blog
                            posts={data.blog}
                            />
                        );
                    }}
                </Query>
                    </Layout>
                </Landing>
            </React.Fragment>
        );
    }
}

export default Zohar;