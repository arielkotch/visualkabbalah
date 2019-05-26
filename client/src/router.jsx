import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Navigation from 'components/Navigation/index.jsx'
import Zohar from 'modules/Zohar/index.jsx';
import Blog from 'modules/BlogPage/index.jsx';

import Tefillah from 'modules/Tefillah/index.jsx';
import Nusach from 'modules/Nusach/index.jsx';
import Topics from 'modules/Topics/index.jsx';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Learning from 'modules/Learning/index.jsx';
import {SHOW, HIDE} from './constants';
const client = new ApolloClient({uri: 'http://localhost:7000/graphql'});

const routes =  [
        {
            name: 'blog',
            path: '/',
            badge: {
                value: 0
            },
            dropdown:[],
            routes:[
                {
                    path: '/:id',
                }
            ],
            show: SHOW,
            component: Blog
        },{
            name: 'zohar',
            path: '/zohar',
            badge: {
                value: 0
            },
            dropdown: [
                'By Subject א-ת', 'Letters א-ה', 'Letters ו-ל', 'Letters מ-ע', 'Letters פ-ת'

            ],
            show: SHOW,
            component: Zohar
        }, {
            name: 'tefillah',
            path: '/tefillah',
            badge: {
                value: 0
            },
            show: SHOW,
            dropdown: [
                'Introduction-1',
                'Introduction-2',
                'Korbanot',
                'Olam Assiya',
                'Olam Yetzira',
                'Olam Beriya',
                'Olam Atzilut',
                'Chazzara',
                'Tachanun-Sefer Torah',
                'Desceding Worlds',
                'Alenu',
                'Mincha',
                'Arvit',
                'Kash Al HaMitta',
                'Tikkun Chatzot',
                'Shabbat',
                'Holidays'
            ],

            component: Tefillah
        }, {
            name: 'learning',
            path: '/learning',
            badge: {
                value: 5
            },
            show: SHOW,
            dropdown: [
                '138 Gates of Wisdom', 'Otzrot Hayim-Visual', 'Otzrot Hayim-Animation'
            ],
            component: Learning
        }, {
            name: 'nusach',
            path: '/nusach',
            badge: {
                value: 9
            },
            show: SHOW,
            dropdown: [
                'Kabbalat Shabbat', 'Shabbat Shacharit', 'Mussaf & Mevarchim'
            ],

            component: Nusach
        }, {
            name: 'topics',
            path: '/topics',
            badge: {
                value: 9
            },
            show: SHOW,
            dropdown: [
                'Zohar on Teffila', 'Zohar on Shabbat', 'Zohar on Holidays', 'Zohar on Night Shema', 'Zohar on Tikkun Chatzot'
            ],

            component: Topics
        },
    ];

class AppRouter extends Component {

    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                        <Navigation brand="visual kabbalah" loggedIn={SHOW} routes={routes}/>
                        {routes.map(({path,component}) => <Route path={path} exact component={component}/>)}
                </Router>
            </ApolloProvider>
        )

    }

}

export default AppRouter;
