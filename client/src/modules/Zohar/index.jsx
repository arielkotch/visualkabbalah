import React,{Fragment} from 'react';
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
const BLOG = gql`
query blog{
    blog{
      id
      body
      title
      author
    }
  }
`;
const getBlogPosts=()=>(
<Query query={BLOG}>
    {({loading, error, data}) => {
        if (loading) 
            return "Loading...";
        if (error) 
            return `Error! ${error.message}`;
            console.log(data);

        return (
            <div>
                {data}
            </div>
        );
    }}
</Query>)
//                    {getBlogPosts()}

class Zohar extends React.Component {
    render() {
     
        return (
            <React.Fragment>
                    <Landing background={pageBackground}>
                        <Layout >
                            <Blog
                                posts={[
                                {
                                    body: shared.blogBody,
                                    title: shared.blogTitle
                                }
                            ]}/>
                        </Layout>
                    </Landing>
            </React.Fragment>
        );
    }
}

export default Zohar;